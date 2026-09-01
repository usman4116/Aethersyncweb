'use client';

import {
  Download,
  Terminal,
  Sparkles,
  ChevronDown,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

const DOWNLOAD_LINK =
  'https://github.com/usman4116/Async-Login/releases/latest/download/AetherSync-Desktop-0.1.0-x64.exe';
const LINUX_DOWNLOAD_LINK =
  'https://github.com/usman4116/Async-Login/releases/latest/download/AetherSync-Desktop-0.1.0-linux-x64.tar.gz';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden">
      {/* Background Cinematic Atmosphere */}
      <div className="pointer-events-none absolute inset-0 aether-grid opacity-30" />
      
      {/* Glowing Neon Plasma Orbs */}
      <div className="glow-orb top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/20 animate-pulse-glow" />
      <div className="glow-orb top-[40%] right-[10%] w-[450px] h-[450px] bg-secondary/10 animate-float-slow" />
      <div className="glow-orb top-[30%] left-[5%] w-[400px] h-[400px] bg-accent/15" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Tag Pill */}
        <div className="group relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-elevated/80 border border-primary/40 text-primary text-xs font-bold shadow-[0_0_15px_rgba(255,102,0,0.15)] mb-4 hover:shadow-[0_0_25px_rgba(255,102,0,0.3)] hover:border-primary/60 hover:bg-surface-elevated transition-all duration-300 cursor-default">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Sparkles size={14} className="text-primary animate-pulse" />
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">AetherSync AI 2.0 • Autonomous Coding Agent & IDE</span>
          <span className="relative z-10 hidden sm:inline text-muted">|</span>
          <span className="relative z-10 hidden sm:inline text-text-secondary font-mono text-[11px] tracking-wide">Local-First & Fast</span>
        </div>

        {/* Pakistan Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 border border-green-500/30 text-green-500 text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-[0_0_10px_rgba(34,197,94,0.15)] hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-300 cursor-default">
          <span className="text-sm">🇵🇰</span>
          <span>Pakistan's First AI-Based IDE Platform</span>
        </div>

        {/* Cinematic Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.1] max-w-4xl">
          The Autonomous AI IDE Built for{' '}
          <span className="text-primary">Precision, Privacy & Speed.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-text-secondary max-w-2xl font-normal leading-relaxed">
          Code at the speed of thought. Pair with autonomous coding agents that inspect repositories, edit multi-file codebases, and execute sandboxed terminal workflows.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 w-full max-w-lg">
          {/* Primary row: Windows + Linux */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
            <a href={DOWNLOAD_LINK} download className="w-full sm:w-auto">
              <Button size="lg" variant="primary" className="w-full flex items-center justify-center gap-3">
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 88 88">
                  <path d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48.016 45.728zm4.326-39.027L87.914 0v41.525l-47.918.278zm47.918 39.566l-.004 41.53-47.918-6.743V45.728z" />
                </svg>
                <span>Windows (.exe)</span>
                <span className="rounded-lg bg-black/30 backdrop-blur-sm border border-white/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-white/90">
                  95 MB
                </span>
              </Button>
            </a>

            <a href={LINUX_DOWNLOAD_LINK} download className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full flex items-center justify-center gap-3">
                <Terminal size={16} className="text-primary" />
                <span>Linux (.tar.gz)</span>
                <span className="rounded-lg bg-primary/10 border border-primary/20 px-2.5 py-1 font-mono text-[11px] font-semibold text-primary">
                  115 MB
                </span>
              </Button>
            </a>
          </div>

          {/* Secondary row: Live Demo */}
          <a href="#live-preview" className="w-full sm:w-auto">
            <Button size="lg" variant="glass" className="w-full flex items-center justify-center gap-2">
              <Sparkles size={16} className="text-primary" />
              <span>Interactive Live Demo</span>
            </Button>
          </a>
        </div>

        {/* Feature Badges under CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-text-secondary">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-green-400" />
            <span>100% Free & Open Ecosystem</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-green-400" />
            <span>Bring Your Own API Keys</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-green-400" />
            <span>Zero Telemetry on Code</span>
          </div>
        </div>

        {/* Scroll down indicator */}
        <a
          href="#live-preview"
          className="mt-14 inline-flex flex-col items-center gap-1 text-muted hover:text-primary transition-colors animate-bounce"
        >
          <span className="text-[11px] font-mono">EXPLORE DESKTOP WORKSPACE</span>
          <ChevronDown size={16} />
        </a>
      </div>
    </section>
  );
}
