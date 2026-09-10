'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Download, Github, Globe, Linkedin, ShieldCheck, Twitter } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { GITHUB_URL, GROUP_URL, NAV_GROUPS, SITE_URL } from '@/lib/site';
import { TermsModal } from './TermsModal';

const WIN_DOWNLOAD =
  'https://github.com/usman4116/Async-Login/releases/latest/download/AetherSync-Desktop-0.1.0-x64.exe';
const LINUX_DOWNLOAD =
  'https://github.com/usman4116/Async-Login/releases/latest/download/AetherSync-Desktop-0.1.0-linux-x64.tar.gz';

const socials = [
  { label: 'GitHub', href: GITHUB_URL, icon: Github },
  { label: 'X', href: 'https://x.com/aethersync', icon: Twitter },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/aethersync', icon: Linkedin },
  { label: 'Website', href: GROUP_URL, icon: Globe },
];

export function Footer() {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <footer className="relative">
      <div className="mx-auto w-full max-w-shell px-5 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-border pb-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Logo size={30} />
              <span className="font-display text-[15px] font-extrabold tracking-tight text-foreground">
                Aethersync AI
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-[0.8125rem] leading-relaxed text-text-secondary">
              <Link href="/features" className="underline-offset-2 hover:underline">
                AetherSync IDE
              </Link>{' '}
              is an autonomous AI IDE and coding-agent workspace built for speed, privacy and
              precision.
            </p>

            <p className="mt-4 inline-flex items-center gap-1.5 text-micro font-semibold uppercase tracking-[0.16em] text-muted">
              <span aria-hidden>🇵🇰</span> Pakistan&rsquo;s first AI-based IDE platform
            </p>

            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted transition-colors duration-300 ease-cine hover:border-border-strong hover:text-foreground"
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/*
            Link columns come from the same `NAV_GROUPS` the header renders, so
            the footer can never fall out of step with the main navigation.
          */}
          {NAV_GROUPS.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="kicker">
                <Link
                  href={group.path}
                  className="transition-colors duration-300 ease-cine hover:text-foreground"
                >
                  {group.title}
                </Link>
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {group.items.map((link) => (
                  <li key={link.path}>
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[0.8125rem] text-text-secondary transition-colors duration-300 ease-cine hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.path}
                        className="text-[0.8125rem] text-text-secondary transition-colors duration-300 ease-cine hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Platform badges */}
        <div className="flex flex-col gap-4 border-b border-border py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-label text-muted">
            Download the{' '}
            <Link href="/download" className="text-foreground underline-offset-2 hover:underline">
              AetherSync IDE desktop app
            </Link>
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href={WIN_DOWNLOAD}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border px-3.5 py-2 text-label font-semibold text-foreground transition-colors duration-300 ease-cine hover:border-primary/40"
            >
              <Download size={13} className="text-primary" /> Windows · .exe · 95 MB
            </a>
            <a
              href={LINUX_DOWNLOAD}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border px-3.5 py-2 text-label font-semibold text-foreground transition-colors duration-300 ease-cine hover:border-primary/40"
            >
              <Download size={13} className="text-primary" /> Linux · .tar.gz · 115 MB
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-micro text-muted">
            &copy; {new Date().getFullYear()} AetherSync Technology. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-micro text-muted">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={12} className="text-success" /> Local-first architecture
            </span>
            <button
              type="button"
              onClick={() => setShowTerms(true)}
              className="transition-colors duration-300 ease-cine hover:text-foreground"
            >
              Terms &amp; privacy
            </button>
            <a
              href={SITE_URL}
              className="font-mono transition-colors duration-300 ease-cine hover:text-foreground"
            >
              ai.theaethersync.com
            </a>
          </div>
        </div>
      </div>

      {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}
    </footer>
  );
}
