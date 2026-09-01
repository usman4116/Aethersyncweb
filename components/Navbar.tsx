'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Download, Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const WIN_DOWNLOAD = 'https://github.com/usman4116/Async-Login/releases/latest/download/AetherSync-Desktop-0.1.0-x64.exe';
const LINUX_DOWNLOAD = 'https://github.com/usman4116/Async-Login/releases/latest/download/AetherSync-Desktop-0.1.0-linux-x64.tar.gz';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('aether-theme');
    if (saved === 'light') {
      setLight(true);
      document.documentElement.classList.add('light');
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    if (next) {
      document.documentElement.classList.add('light');
      localStorage.setItem('aether-theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('aether-theme', 'dark');
    }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/preview', label: 'Live Preview', pulse: true },
    { href: '/providers', label: 'API Providers' },
    { href: '/docs', label: 'Documentation' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 border-b border-border shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 rounded-xl bg-primary opacity-70 blur-md group-hover:opacity-100 transition-opacity" />
            <div className="relative w-9 h-9 rounded-xl bg-surface-elevated border border-primary/40 flex items-center justify-center font-black text-foreground text-base shadow-inner">
              A
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-foreground flex items-center gap-1">
              Aethersync <span className="text-primary">AI</span>
              <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30 ml-1">
                v0.1.0
              </span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 rounded-full bg-surface-elevated/90 border border-border p-1 shadow-inner">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-primary text-foreground border border-primary/40 shadow-sm'
                    : 'text-muted hover:text-foreground hover:bg-border'
                }`}
              >
                {link.pulse && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg bg-surface border border-border text-muted hover:text-primary transition-colors"
          >
            {light ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <a
            href="https://login.theaethersync.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-muted hover:text-foreground transition-colors flex items-center gap-1 px-3 py-2"
          >
            <Globe size={13} className="text-primary" />
            <span>Web Login</span>
          </a>

          <Link href="/download">
            <Button variant="primary" size="sm" className="flex items-center gap-2">
              <Download size={14} />
              <span>Download</span>
            </Button>
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg bg-surface border border-border text-muted"
          >
            {light ? <Moon size={15} /> : <Sun size={15} />}
          </button>
          <Link href="/download">
            <Button size="sm" variant="primary" className="bg-primary border-0 flex items-center gap-1.5 px-3">
              <Download size={13} />
              <span>Download</span>
            </Button>
          </Link>
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="p-2 rounded-lg bg-surface border border-border text-muted"
          >
            {mobileMenu ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenu && (
        <div className="md:hidden mt-3 px-4 pt-2 pb-6 bg-background border-b border-border space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenu(false)}
              className={`block py-2 text-sm font-semibold rounded-lg px-3 ${
                pathname === link.href
                  ? 'bg-primary/20 text-primary border border-primary/30'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-border flex flex-col gap-2">
            <a
              href="https://login.theaethersync.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 text-center text-xs font-semibold rounded-xl bg-surface text-muted border border-border"
            >
              Web Login Portal
            </a>
            <a href={WIN_DOWNLOAD} download>
              <Button className="w-full bg-primary text-foreground flex items-center justify-center gap-2 border-0">
                <Download size={14} /> Windows (.exe)
              </Button>
            </a>
            <a href={LINUX_DOWNLOAD} download>
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                <Download size={14} /> Linux (.tar.gz)
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
