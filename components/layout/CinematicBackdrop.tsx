/**
 * CinematicBackdrop — the page's photographed space.
 *
 * A single fixed layer behind all content: light pooling at the top of the
 * frame, three slow-drifting ambient fields (two warm, one cool) and the
 * engineering grid, masked so it never terminates on a hard edge.
 *
 * Everything is CSS driven from the `--bloom-*` / `--grid-opacity` tokens, so
 * the light theme gets the same composition at a whisper and the reduced-motion
 * block in `globals.css` freezes the drift without removing the atmosphere.
 */
export function CinematicBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Blueprint grid — structural, faded top and bottom */}
      <div className="aether-grid mask-y-fade absolute inset-0 animate-grid-pan" />

      {/* Key light above the fold */}
      <div className="cine-horizon absolute inset-x-0 top-0 h-[80vh]" />

      {/* Warm key, upper left */}
      <div className="cine-field animate-drift -left-[18vw] -top-[22vh] h-[70vh] w-[70vh]" />

      {/* Cool fill, lower right — keeps the frame from reading as all ember */}
      <div
        className="cine-field animate-drift-slow -bottom-[26vh] -right-[14vw] h-[76vh] w-[76vh]"
        data-tone="cool"
        style={{ animationDelay: '-11s' }}
      />

      {/* Soft centre falloff between the two */}
      <div
        className="cine-field animate-drift left-1/2 top-1/3 h-[54vh] w-[54vh] -translate-x-1/2"
        style={{ animationDelay: '-20s' }}
      />
    </div>
  );
}
