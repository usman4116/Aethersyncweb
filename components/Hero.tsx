'use client';

import Link from 'next/link';
import { Download, ArrowRight, Play, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';

const providers = [
  'Anthropic Claude',
  'OpenAI',
  'DeepSeek',
  'Google Gemini',
  'Mistral AI',
  'Ollama',
  'Groq',
  'Cohere',
  'Together AI',
  'Perplexity',
  'xAI Grok',
  'Amazon Bedrock',
  'Azure OpenAI',
  'Hugging Face',
];

export function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-background overflow-hidden flex flex-col justify-end pt-24 pb-0 border-b border-border transition-colors duration-300">
      
      {/* Full-bleed Bright Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video 
          src="/shots/hero-video.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-90 scale-100 filter brightness-105 contrast-105"
        />
      </div>

      {/* Theme-Adaptive Bottom Gradient (Soft Black in Dark Mode, Soft White in Light Mode) */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[50%] z-[1] pointer-events-none bg-gradient-to-t from-background via-background/60 via-60% to-transparent transition-colors duration-300"
      />

      {/* Peeking AetherSync "A" Mascot with Orange Background */}
      <motion.div 
        initial={{ x: 120, rotate: 10 }}
        animate={{ x: 0, rotate: -5 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="absolute right-[-35px] lg:right-[-15px] bottom-48 lg:bottom-56 z-10 pointer-events-none select-none hidden md:block"
      >
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-36 h-48 lg:w-44 lg:h-56 bg-gradient-to-br from-[#ff7a2e] to-[#ff5700] rounded-l-[4rem] rounded-r-3xl shadow-[0_0_60px_rgba(255,108,26,0.6)] border-4 border-white/25 flex flex-col items-center justify-center p-4 pl-6"
        >
          {/* Eyes for the Mascot */}
          <div className="flex items-center gap-4 mb-2">
            <div className="w-3.5 h-4 bg-white rounded-full animate-bounce shadow-sm" style={{ animationDuration: '3s' }} />
            <div className="w-3.5 h-4 bg-white rounded-full animate-bounce shadow-sm" style={{ animationDuration: '3s', animationDelay: '0.2s' }} />
          </div>

          {/* Big White A Logo */}
          <div className="text-5xl lg:text-6xl font-black text-white font-display leading-none tracking-tighter drop-shadow-md">
            A
          </div>

          {/* Cute Smile / Mouth */}
          <div className="w-7 h-3.5 border-b-4 border-white rounded-full mt-1.5" />
        </motion.div>
      </motion.div>

      {/* Main Bottom Grid Content Area */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Left Side: Headline & Pakistan 1st AI IDE Badge */}
          <div className="lg:col-span-6 xl:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-border mb-5 shadow-lg transition-colors duration-300">
                <span className="text-sm">🇵🇰</span>
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[12px] font-mono font-bold tracking-wider text-foreground uppercase">
                  Pakistan's 1st Autonomous AI IDE
                </span>
              </div>

              <h1 className="text-[3.25rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[5.5rem] font-black text-foreground leading-[0.98] tracking-tight drop-shadow-lg transition-colors duration-300">
                Build with <br />
                <span className="text-primary drop-shadow-[0_0_40px_rgba(255,108,26,0.7)]">
                  AetherSync
                </span>
              </h1>
            </Reveal>
          </div>

          {/* Right Side: Theme-Adaptive Control Box */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-end">
            <Reveal delay={150}>
              <div className="p-6 sm:p-7 rounded-3xl bg-surface/85 backdrop-blur-2xl border border-border shadow-panel flex flex-col gap-5 transition-colors duration-300">
                
                {/* Feature Bulletins */}
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-primary/15 border border-primary/30 text-primary shrink-0 shadow-sm">
                      <Sparkles size={14} />
                    </span>
                    <p className="text-[15px] font-medium text-foreground">
                      <span className="font-semibold text-primary">AetherSync:</span> Your 10x Autonomous AI Coding Engineer
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-surface-elevated border border-border text-text-secondary shrink-0">
                      <Shield size={14} />
                    </span>
                    <p className="text-[14px] text-text-secondary">
                      100% local-first execution. Zero telemetry on your proprietary code.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                  <Link href="/download" className="w-full sm:w-auto flex-1">
                    <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-[#ff8642] hover:brightness-110 text-white font-bold px-6 h-[50px] rounded-xl shadow-[0_0_35px_rgba(255,108,26,0.35)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-full text-[15px]">
                      <Download size={17} />
                      Download Free
                    </button>
                  </Link>

                  <a href="#live-workspace" className="w-full sm:w-auto flex-1">
                    <button className="flex items-center justify-center gap-2 bg-surface-elevated hover:bg-surface-hover text-foreground font-medium px-6 h-[50px] rounded-xl border border-border backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-full text-[15px]">
                      <Play size={15} className="text-primary fill-primary" />
                      Live Workspace
                    </button>
                  </a>
                </div>

                {/* Footer Links & OS Badges */}
                <div className="flex items-center justify-between pt-2.5 border-t border-border text-xs text-muted">
                  <a 
                    href="/docs" 
                    className="inline-flex items-center gap-1 text-primary hover:text-primary-hover font-semibold transition-colors group"
                  >
                    Documentation <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </a>
                  <span className="text-muted font-mono text-[11px]">
                    macOS · Windows · Linux
                  </span>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>

      {/* Model Providers Marquee Strip Inside Hero (Theme-Adaptive) */}
      <div className="relative z-10 w-full pt-4 pb-3 border-t border-border bg-background/80 backdrop-blur-md transition-colors duration-300">
        <div className="mx-auto w-full max-w-shell px-5 sm:px-6 lg:px-8 mb-3">
          <p className="text-center text-[12px] font-medium tracking-wide text-muted">
            Works with the frontier models you already pay for — and the local ones you don&rsquo;t.
          </p>
        </div>

        <div className="mask-x-fade flex overflow-hidden py-1">
          {[0, 1].map((track) => (
            <ul
              key={track}
              aria-hidden={track === 1}
              className="flex shrink-0 animate-marquee items-center gap-10 pr-10"
            >
              {providers.map((name) => (
                <li
                  key={name}
                  className="whitespace-nowrap font-display text-[0.875rem] font-semibold text-muted transition-colors duration-300 ease-cine hover:text-primary cursor-default"
                >
                  {name}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

    </section>
  );
}
