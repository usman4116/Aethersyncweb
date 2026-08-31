'use client';

import {
  Download,
  Terminal,
  Sparkles,
  Zap,
  Shield,
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  ChevronDown,
  CheckCircle2,
} from 'lucide-react';

const DOWNLOAD_LINK =
  'https://github.com/usman4116/Async-Login/releases/latest/download/AetherSync-Desktop-0.1.0-x64.exe';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden">
      {/* Background Cinematic Atmosphere */}
      <div className="pointer-events-none absolute inset-0 cyber-grid opacity-30" />
      
      {/* Glowing Neon Plasma Orbs */}
      <div className="hero-glow-orb top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-orange-600/20 via-amber-500/15 to-transparent animate-pulse-glow" />
      <div className="hero-glow-orb top-[40%] right-[10%] w-[450px] h-[450px] bg-gradient-to-bl from-orange-500/10 via-amber-600/10 to-transparent animate-float-slow" />
      <div className="hero-glow-orb top-[30%] left-[5%] w-[400px] h-[400px] bg-gradient-to-br from-orange-700/10 via-purple-600/5 to-transparent" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Tag Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141d]/90 border border-orange-500/30 text-orange-400 text-xs font-semibold shadow-lg shadow-orange-500/10 backdrop-blur-md mb-8 animate-fade-in">
          <Sparkles size={13} className="text-orange-400 animate-spin-slow" />
          <span>AetherSync AI 2.0 • Autonomous Coding Agent & IDE</span>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="hidden sm:inline text-slate-300 font-mono text-[11px]">Local-First & Fast</span>
        </div>

        {/* Cinematic Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] max-w-4xl">
          The Autonomous AI IDE Built for{' '}
          <span className="neon-gradient-text">Precision, Privacy & Speed.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-400 max-w-2xl font-normal leading-relaxed">
          Code at the speed of thought. Pair with autonomous coding agents that inspect repositories, edit multi-file codebases, and execute sandboxed terminal workflows.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <a
            href={DOWNLOAD_LINK}
            download
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-sm shadow-xl shadow-orange-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 group"
          >
            {/* Windows Logo SVG */}
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 88 88">
              <path d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48.016 45.728zm4.326-39.027L87.914 0v41.525l-47.918.278zm47.918 39.566l-.004 41.53-47.918-6.743V45.728z" />
            </svg>
            <span>Download for Windows (.exe)</span>
            <span className="rounded-md bg-black/20 px-2 py-0.5 font-mono text-[11px] font-normal text-orange-100">
              95 MB
            </span>
          </a>

          <a
            href="#live-preview"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#111118]/80 border border-white/[0.1] text-slate-200 font-semibold text-sm hover:bg-[#181822] hover:border-orange-500/40 hover:text-white transition-all duration-200 backdrop-blur-md"
          >
            <Terminal size={16} className="text-orange-400" />
            <span>Interactive Live Demo</span>
          </a>
        </div>

        {/* Feature Badges under CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-emerald-400" />
            <span>100% Free & Open Ecosystem</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-emerald-400" />
            <span>Bring Your Own API Keys</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-emerald-400" />
            <span>Zero Telemetry on Code</span>
          </div>
        </div>

        {/* Scroll down indicator */}
        <a
          href="#live-preview"
          className="mt-14 inline-flex flex-col items-center gap-1 text-slate-500 hover:text-orange-400 transition-colors animate-bounce"
        >
          <span className="text-[11px] font-mono">EXPLORE DESKTOP WORKSPACE</span>
          <ChevronDown size={16} />
        </a>
      </div>
    </section>
  );
}
