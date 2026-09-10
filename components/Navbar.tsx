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
import { GITHUB_URL, LOGIN_URL, NAV_GROUPS, PRIMARY_NAV } from '@/lib/site';
import { cn } from '@/lib/utils';

/** Icons live here, not in `lib/site.ts`, so the route table stays framework-free. */
const ICONS: Record<string, typeof Cpu> = {
  '/features': Cpu,
  '/features#terminal': SquareTerminal,
  '/preview': MonitorPlay,
  '/providers': Boxes,
  '/docs': BookOpen,
  '/docs#quickstart': Rocket,
  '/docs#shortcuts': Keyboard,
  '/design-system': SwatchBook,
  '/about': ShieldCheck,
  '/download': Download,
};

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

  const isActive = (href: string) => {
    const base = href.split('#')[0];
    return base === '/' ? pathname === '/' : pathname === base || pathname.startsWith(`${base}/`);
  };

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
        <Link
          href="/"
          aria-label="AetherSync IDE — home"
          className="group flex shrink-0 items-center gap-2.5"
        >
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

        {/*
          Desktop nav. The dropdown panels stay mounted and are hidden with CSS
          rather than unmounted — conditionally rendering them kept every
          secondary link out of the served HTML, so crawlers saw a site with
          only three internal links.
        */}
        <nav className="hidden flex-1 items-center gap-1 lg:flex" aria-label="Main">
          {NAV_GROUPS.map((group) => {
            const open = openMenu === group.title;
            return (
              <div key={group.title} className="relative">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenMenu(open ? null : group.title)}
                  onMouseEnter={() => setOpenMenu(group.title)}
                  className={cn(
                    'flex items-center gap-1 rounded-md px-3 py-2 text-[0.8125rem] font-medium transition-colors duration-300 ease-cine',
                    open ? 'text-foreground' : 'text-text-secondary hover:text-foreground'
                  )}
                >
                  {group.title}
                  <ChevronDown
                    size={13}
                    aria-hidden
                    className={cn('transition-transform duration-300 ease-cine', open && 'rotate-180')}
                  />
                </button>

                <div
                  onMouseLeave={() => setOpenMenu(null)}
                  className={cn(
                    'absolute left-0 top-full w-[30rem] pt-2 transition-all duration-200 ease-cine',
                    open
                      ? 'visible translate-y-0 opacity-100'
                      : 'invisible -translate-y-1 opacity-0'
                  )}
                >
                  <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-background-secondary p-2 shadow-panel">
                    {group.items.map((item) => {
                      const Icon = ICONS[item.path] ?? Cpu;
                      return item.external ? (
                        <a
                          key={item.path}
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex gap-3 rounded-lg p-3 transition-colors duration-300 ease-cine hover:bg-surface-hover/70"
                        >
                          <ArrowUpRight
                            size={16}
                            aria-hidden
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
                        </a>
                      ) : (
                        <Link
                          key={item.path}
                          href={item.path}
                          aria-current={isActive(item.path) ? 'page' : undefined}
                          className="group flex gap-3 rounded-lg p-3 transition-colors duration-300 ease-cine hover:bg-surface-hover/70"
                        >
                          <Icon
                            size={16}
                            aria-hidden
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
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Flat links to the pages that matter most for search. */}
          {PRIMARY_NAV.filter((l) => ['/features', '/download', '/about'].includes(l.path)).map(
            (link) => (
              <Link
                key={link.path}
                href={link.path}
                aria-current={isActive(link.path) ? 'page' : undefined}
                className={cn(
                  'rounded-md px-3 py-2 text-[0.8125rem] font-medium transition-colors duration-300 ease-cine',
                  isActive(link.path)
                    ? 'text-foreground'
                    : 'text-text-secondary hover:text-foreground'
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop actions */}
        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="AetherSync on GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-secondary transition-colors duration-300 ease-cine hover:border-border-strong hover:text-foreground"
          >
            <Github size={15} aria-hidden />
          </a>
          <ThemeToggle />
          <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
          </a>
          <Link href="/download">
            <Button size="sm">
              Launch AetherSync
              <ArrowUpRight size={14} aria-hidden />
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
            {mobileMenu ? <X size={17} aria-hidden /> : <Menu size={17} aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile drawer — same hierarchy, same labels, same order. */}
      {mobileMenu && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background px-5 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV_GROUPS.map((group) => (
              <div key={group.title} className="border-b border-border py-3">
                <p className="kicker mb-3">{group.title}</p>
                <div className="flex flex-col gap-3">
                  {group.items.map((item) => {
                    const Icon = ICONS[item.path] ?? Cpu;
                    return item.external ? (
                      <a
                        key={item.path}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3"
                      >
                        <ArrowUpRight size={15} aria-hidden className="mt-0.5 shrink-0 text-primary" />
                        <span>
                          <span className="block text-[0.875rem] font-semibold text-foreground">
                            {item.label}
                          </span>
                          <span className="block text-micro text-muted">{item.desc}</span>
                        </span>
                      </a>
                    ) : (
                      <Link
                        key={item.path}
                        href={item.path}
                        aria-current={isActive(item.path) ? 'page' : undefined}
                        className="flex items-start gap-3"
                      >
                        <Icon size={15} aria-hidden className="mt-0.5 shrink-0 text-primary" />
                        <span>
                          <span className="block text-[0.875rem] font-semibold text-foreground">
                            {item.label}
                          </span>
                          <span className="block text-micro text-muted">{item.desc}</span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-2">
            <Link href="/download">
              <Button className="w-full">
                <Download size={15} aria-hidden /> Download AetherSync
              </Button>
            </Link>
            <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full">
                Sign in to the web portal
              </Button>
            </a>
            <p className="mt-2 flex items-center justify-center gap-1.5 text-micro text-muted">
              <ShieldCheck size={12} aria-hidden className="text-success" /> Local-first — your code
              never leaves your machine
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
