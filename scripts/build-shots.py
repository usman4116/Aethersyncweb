"""Re-derive public/shots/*.webp from the original captures.

Two corrections are applied to the raw screenshots:
  1. The account row in the left rail is anonymised — the real captures show a
     personal name and email address, which must not ship on a public site.
  2. On the light capture only, the window manager painted its own dark
     minimise/maximise/close block over the app's light titlebar. That is OS
     chrome, not app UI, so it is filled with the titlebar's own colour.
Nothing inside the application's own interface is otherwise altered.
"""
from PIL import Image, ImageDraw, ImageFont
import os

SRC = '/home/usman/Pictures/Screenshots'
OUT = 'public/shots'
# Full-window captures, shipped at 1600px wide.
CAPTURES = {
    'workspace-dark':  ('Screenshot from 2026-09-01 19-22-11.png', True),
    'workspace-light': ('Screenshot from 2026-09-01 19-22-21.png', True),
    'agent-dark':      ('Screenshot from 2026-09-01 19-19-46.png', True),
    'providers-dark':  ('Screenshot from 2026-09-01 19-22-53.png', True),
    'chat-dark':       ('Screenshot from 2026-09-01 19-19-30.png', True),
    'terminal-dark':   ('Screenshot from 2026-09-01 19-20-36.png', True),
}

BOLD = ImageFont.truetype('/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf', 13)
REG = ImageFont.truetype('/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf', 11)
AVATAR_FONT = ImageFont.truetype('/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf', 13)

# Geometry measured on the 1915x1047 captures (identical window position in all).
TEXT_BOX = (45, 998, 186, 1032)   # name + email lines
AVATAR = (16, 1003, 40, 1027)     # avatar circle, incl. the personal initial
BG_PROBE_X = 178                  # clean card background, right of the text


def anonymise_account_row(im):
    px = im.load()
    d = ImageDraw.Draw(im)
    x0, y0, x1, y1 = TEXT_BOX
    for y in range(y0, y1):
        c = px[BG_PROBE_X, y]
        d.line([(x0, y), (x1 - 1, y)], fill=c)

    # Re-letter the avatar so the personal initial goes with the name.
    ax0, ay0, ax1, ay1 = AVATAR
    disc = px[(ax0 + ax1) // 2, ay0 + 4]      # solid disc fill, above the glyph
    glyph = px[(ax0 + ax1) // 2, (ay0 + ay1) // 2]   # the initial's own accent
    d.ellipse([ax0, ay0, ax1, ay1], fill=disc)
    d.text(((ax0 + ax1) / 2, (ay0 + ay1) / 2 - 1), 'A', font=AVATAR_FONT,
           fill=glyph, anchor='mm')

    name_c = px[BG_PROBE_X, y0]
    lum = sum(name_c) / 3
    d.text((x0 + 2, y0 + 1), 'AetherSync', font=BOLD,
           fill=(24, 24, 28) if lum > 128 else (232, 233, 238))
    d.text((x0 + 2, y0 + 19), 'Local account', font=REG,
           fill=(122, 124, 134) if lum > 128 else (128, 130, 140))
    return im


def strip_os_window_controls(im):
    """Remove the window manager's dark control block from the light capture."""
    w, h = im.size
    px = im.load()

    def strip_mean(x):
        return sum(sum(px[x, y]) for y in range(30)) // 30 // 3

    x = w - 1
    while x > w - 300 and strip_mean(x) < 90:
        x -= 1
    left = x + 1
    if left >= w:                      # nothing dark up there — dark capture
        return im

    def dark_depth(xx):
        y = 0
        while y < h and sum(px[xx, y]) / 3 < 90:
            y += 1
        return y

    bot = max(dark_depth(left + 2), dark_depth(w - 2))
    for y in range(bot):
        c = px[left - 4, y]
        for xx in range(left, w):
            px[xx, y] = c
    return im


# Detail crops, taken at native resolution — no resize, so they stay sharp.
#
# The hero panel renders at roughly 550 CSS px. 700x640 starts at the editor's
# tab bar and gutter (x=488) so no line begins mid-word, ends past the longest
# line so none is clipped mid-word either, and leaves ~1.25x device pixels for
# the code to stay crisp on a HiDPI screen while still reading at ~10px.
CROPS = {
    'hero-code-dark':  ('Screenshot from 2026-09-01 19-22-11.png', (488, 58, 1188, 698)),
    'hero-code-light': ('Screenshot from 2026-09-01 19-22-21.png', (488, 58, 1188, 698)),
    'permissions-dark': ('Screenshot from 2026-09-01 19-23-06.png', (890, 145, 1445, 632)),
}


os.makedirs(OUT, exist_ok=True)
for name, (fname, box) in CROPS.items():
    im = Image.open(os.path.join(SRC, fname)).convert('RGB').crop(box)
    path = os.path.join(OUT, f'{name}.webp')
    im.save(path, 'WEBP', quality=88, method=6)
    print(f'{name:16} {im.size[0]}x{im.size[1]}  {os.path.getsize(path)//1024} KB')

for name, (fname, do_account) in CAPTURES.items():
    im = Image.open(os.path.join(SRC, fname)).convert('RGB')
    if do_account:
        anonymise_account_row(im)
    if name.endswith('-light'):
        strip_os_window_controls(im)
    w, h = im.size
    out = im.resize((1600, round(h * 1600 / w)), Image.LANCZOS)
    path = os.path.join(OUT, f'{name}.webp')
    out.save(path, 'WEBP', quality=84, method=6)
    print(f'{name:16} {out.size[0]}x{out.size[1]}  {os.path.getsize(path)//1024} KB')
