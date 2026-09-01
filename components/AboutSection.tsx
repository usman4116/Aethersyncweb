'use client';

import { ShieldCheck, Heart, Sparkles, Code2, Users, Rocket } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl border border-border bg-primary from-[#0e0e16] to-[#07070a] p-8 sm:p-14  shadow-2xl relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-semibold mb-4">
            <Rocket size={12} />
            <span>Our Mission</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight leading-tight">
            Building the Open, High-Performance Future of{' '}
            <span className="text-primary">Agentic Coding.</span>
          </h2>

          <p className="mt-6 text-sm sm:text-base text-text-secondary leading-relaxed">
            AetherSync was born out of a simple conviction: AI developer tools should be blazingly fast, deeply autonomous, and respectful of developer sovereignty. We believe software engineers deserve an editor that pairs local execution speed with frontier model intelligence.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-foreground">100%</div>
              <div className="text-xs text-text-secondary mt-1">Local-First Privacy</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-primary">&lt; 100ms</div>
              <div className="text-xs text-text-secondary mt-1">Local PTY Terminal Latency</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-foreground">4+</div>
              <div className="text-xs text-text-secondary mt-1">Frontier AI Model Families</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
