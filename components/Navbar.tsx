'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ArrowUpRight,
  BookOpen,
  Boxes,
  ChevronDown,
  Cpu,
  Download,
  Github,
  Keyboard,
  Menu,
  MonitorPlay,
  Rocket,
  ShieldCheck,
  SquareTerminal,
  SwatchBook,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@/lib/utils';

const SIGN_IN = 'https://login.theaethersync.com/login';
const GITHUB = 'https://github.com/usman4116';

type MenuItem = {
  href: string;
  label: string;
  desc: string;
  icon: typeof Cpu;
  external?: boolean;
};

type NavEntry =
  | { kind: 'link'; href: string; label: string }
  | { kind: 'menu'; label: string; items: MenuItem[] };

const NAV: NavEntry[] = [
  {
    kind: 'menu',
    label: 'Product',
    items: [
      {
        href: '/preview',
        label: 'Desktop workspace',
        desc: 'Editor, explorer and agent panel in one shell.',
        icon: MonitorPlay,
      },
      {
        href: '/features',
        label: 'Autonomous agent',
        desc: 'Multi-file edits with reviewable diffs.',
        icon: Cpu,
      },
      {
        href: '/features#terminal',
        label: 'Sandboxed terminal',
        desc: 'Native PTY shells behind permission guards.',
        icon: SquareTerminal,
      },
      {
        href: '/providers',
        label: 'Model providers',
        desc: 'Bring your own keys, or run fully offline.',
        icon: Boxes,
      },
    ],
  },
  { kind: 'link', href: '/features', label: 'Features' },
  {
    kind: 'menu',
    label: 'Developers',
    items: [
      {
        href: '/docs',
        label: 'Documentation',
        desc: 'Install, configure and prompt the agent.',
        icon: BookOpen,
      },
      {
        href: '/docs#quickstart',
        label: 'Quickstart',
        desc: 'From download to first agent run.',
        icon: Rocket,
      },
      {
        href: '/docs#shortcuts',
        label: 'Keyboard shortcuts',
        desc: 'Command palette and editor bindings.',
        icon: Keyboard,
      },
      {
        href: '/design-system',
        label: 'Design system',
        desc: 'Tokens, type scale and UI primitives.',
        icon: SwatchBook,
      },
    ],
  },
  { kind: 'link', href: '/download', label: 'Download' },
  { kind: 'link', href: '/about', label: 'About' },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close on route change, Escape, or a click outside the nav.
  useEffect(() => {
    setOpenMenu(null);
    setMobileMenu(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        setMobileMenu(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href.split('#')[0]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-cine',
        scrolled
          ? 'aether-glass border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
          : 'aether-glass border-b border-border/40'
      )}
    >
      <div
        ref={navRef}
        className="mx-auto flex h-16 w-full max-w-shell items-center gap-6 px-5 sm:px-6 lg:px-8"
      >
        {/* Brand */}
        <Link href="/" className="group flex shrink-0 items-center gap-2.5">
          <Logo
            size={30}
            className="transition-transform duration-500 ease-cine group-hover:-rotate-[7deg]"
          />
          <span className="flex items-baseline gap-1.5">
            <span className="font-display text-[15px] font-extrabold tracking-tight text-foreground">
              Aethersync
            </span>
            <span className="font-mono text-micro text-muted">v0.1.0</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((entry) =>
            entry.kind === 'link' ? (
              <Link
                key={entry.label}
                href={entry.href}
                className={cn(
                  'rounded-md px-3 py-2 text-[0.8125rem] font-medium transition-colors duration-300 ease-cine',
                  isActive(entry.href)
                    ? 'text-foreground'
                    : 'text-text-secondary hover:text-foreground'
                )}
              >
                {entry.label}
              </Link>
            ) : (
              <div key={entry.label} className="relative">
                <button
                  type="button"
                  aria-expanded={openMenu === entry.label}
                  onClick={() => setOpenMenu(openMenu === entry.label ? null : entry.label)}
                  onMouseEnter={() => setOpenMenu(entry.label)}
                  className={cn(
                    'flex items-center gap-1 rounded-md px-3 py-2 text-[0.8125rem] font-medium transition-colors duration-300 ease-cine',
                    openMenu === entry.label
                      ? 'text-foreground'
                      : 'text-text-secondary hover:text-foreground'
                  )}
                >
                  {entry.label}
                  <ChevronDown
                    size={13}
                    className={cn(
                      'transition-transform duration-300 ease-cine',
                      openMenu === entry.label && 'rotate-180'
                    )}
                  />
                </button>

                {openMenu === entry.label && (
                  <div
                    onMouseLeave={() => setOpenMenu(null)}
                    className="absolute left-0 top-full w-[30rem] pt-2"
                  >
                    <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-background-secondary p-2 shadow-panel">
                      {entry.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group flex gap-3 rounded-lg p-3 transition-colors duration-300 ease-cine hover:bg-surface-hover/70"
                        >
                          <item.icon
                            size={16}
                            className="mt-0.5 shrink-0 text-muted transition-colors group-hover:text-primary"
                          />
                          <span className="min-w-0">
                            <span className="block text-[0.8125rem] font-semibold text-foreground">
                              {item.label}
                            </span>
                            <span className="mt-0.5 block text-micro leading-snug text-muted">
                              {item.desc}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </nav>

        {/* Desktop actions */}
        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-secondary transition-colors duration-300 ease-cine hover:border-border-strong hover:text-foreground"
          >
            <Github size={15} />
          </a>
          <ThemeToggle />
          <a href={SIGN_IN} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
          </a>
          <Link href="/download">
            <Button size="sm">
              Launch AetherSync
              <ArrowUpRight size={14} />
            </Button>
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-expanded={mobileMenu}
            aria-label="Toggle navigation"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-secondary"
          >
            {mobileMenu ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenu && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background px-5 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV.map((entry) =>
              entry.kind === 'link' ? (
                <Link
                  key={entry.label}
                  href={entry.href}
                  className="border-b border-border py-3 text-[0.9375rem] font-semibold text-foreground"
                >
                  {entry.label}
                </Link>
              ) : (
                <div key={entry.label} className="border-b border-border py-3">
                  <p className="kicker mb-3">{entry.label}</p>
                  <div className="flex flex-col gap-3">
                    {entry.items.map((item) => (
                      <Link key={item.href} href={item.href} className="flex items-start gap-3">
                        <item.icon size={15} className="mt-0.5 shrink-0 text-primary" />
                        <span>
                          <span className="block text-[0.875rem] font-semibold text-foreground">
                            {item.label}
                          </span>
                          <span className="block text-micro text-muted">{item.desc}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            )}
          </nav>

          <div className="mt-6 flex flex-col gap-2">
            <Link href="/download">
              <Button className="w-full">
                <Download size={15} /> Download AetherSync
              </Button>
            </Link>
            <a href={SIGN_IN} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full">
                Sign in to the web portal
              </Button>
            </a>
            <p className="mt-2 flex items-center justify-center gap-1.5 text-micro text-muted">
              <ShieldCheck size={12} className="text-success" /> Local-first — your code never
              leaves your machine
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
