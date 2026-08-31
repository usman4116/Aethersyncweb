'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Download,
  Terminal,
  Layers,
  Sparkles,
  ExternalLink,
  Menu,
  X,
  Shield,
  Cpu,
  ChevronRight,
  Globe,
  BookOpen,
  Info,
} from 'lucide-react';

const DOWNLOAD_LINK =
  'https://github.com/usman4116/Async-Login/releases/latest/download/AetherSync-Desktop-0.1.0-x64.exe';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
          ? 'bg-[#070810]/92 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl shadow-black/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo matching theaethersync */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-orange-500 opacity-70 blur-md group-hover:opacity-100 transition-opacity" />
            <div className="relative w-9 h-9 rounded-xl bg-[#0d0e1a] border border-purple-500/40 flex items-center justify-center font-black text-white text-base shadow-inner">
              A
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1">
              Aethersync <span className="text-purple-400">AI</span>
              <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 ml-1">
                v0.1.0
              </span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Multi-Page) */}
        <nav className="hidden md:flex items-center gap-1 rounded-full bg-[#0d0e1a]/90 border border-white/[0.08] p-1 backdrop-blur-xl shadow-inner">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-white border border-purple-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.pulse && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://login.theaethersync.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1 px-3 py-2"
          >
            <Globe size={13} className="text-purple-400" />
            <span>Web Login</span>
          </a>

          <a
            href={DOWNLOAD_LINK}
            download
            className="relative group overflow-hidden rounded-xl p-[1px] font-bold text-xs transition-all shadow-lg shadow-purple-500/20 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-500 to-orange-500 transition-all duration-300 group-hover:opacity-100" />
            <div className="relative flex items-center gap-2 rounded-xl bg-[#090a14] px-4 py-2 text-white transition-colors group-hover:bg-transparent">
              <Download size={14} className="text-purple-300 group-hover:text-white transition-colors" />
              <span>Download .exe</span>
            </div>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href={DOWNLOAD_LINK}
            download
            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs flex items-center gap-1.5"
          >
            <Download size={13} />
            <span>.exe</span>
          </a>
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="p-2 rounded-lg bg-[#111220] border border-white/[0.08] text-slate-300"
          >
            {mobileMenu ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenu && (
        <div className="md:hidden mt-3 px-4 pt-2 pb-6 bg-[#070810]/98 backdrop-blur-2xl border-b border-white/[0.08] space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenu(false)}
              className={`block py-2 text-sm font-semibold rounded-lg px-3 ${
                pathname === link.href
                  ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
            <a
              href="https://login.theaethersync.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 text-center text-xs font-semibold rounded-xl bg-[#111220] text-slate-300 border border-white/[0.06]"
            >
              Web Login Portal
            </a>
            <a
              href={DOWNLOAD_LINK}
              download
              className="py-2.5 text-center text-xs font-bold rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center gap-2 shadow-lg shadow-purple-600/25"
            >
              <Download size={14} /> Download AetherSync (.exe)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
