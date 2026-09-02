import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

const stats = [
  { value: '100%', label: 'Local-first privacy' },
  { value: '< 100 ms', label: 'Local PTY terminal latency' },
  { value: '17', label: 'Supported model providers' },
];

export function AboutSection() {
  return (
    <Section id="about" className="border-b border-border">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20 items-center">
        <Reveal>
          <Eyebrow rule>Our mission</Eyebrow>
          <h2 className="mt-5 text-display-sm font-bold text-foreground">
            Building the open, high-performance future of{' '}
            <span className="text-ember-gradient">agentic coding.</span>
          </h2>
          <p className="mt-6 max-w-prose text-body text-text-secondary">
            AetherSync started from a simple conviction: AI developer tools should be fast, deeply
            autonomous and respectful of developer sovereignty. Engineers deserve an editor that
            pairs local execution speed with frontier model intelligence — without shipping their
            source to someone else&rsquo;s cluster to get it.
          </p>

          {/* Founder Quote / Signature Card */}
          <div className="mt-8 p-4 rounded-xl border border-border bg-surface/40 flex items-center gap-4 max-w-md">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-primary/40 shrink-0">
              <Image 
                src="/founder.jpg" 
                alt="Usman Farhan — Founder" 
                fill 
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                Muhammad Usman Farhan
                <span className="px-1.5 py-0.5 rounded text-[9px] bg-primary/15 text-primary font-mono">Founder</span>
              </span>
              <span className="text-[11px] text-text-secondary mt-0.5">
                "Developer tools should serve the engineer, with zero compromise on privacy."
              </span>
            </div>
          </div>

          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-1.5 text-label font-semibold text-primary hover:underline"
          >
            Meet the leadership team behind AetherSync
            <ArrowUpRight size={14} />
          </Link>
        </Reveal>

        <Reveal delay={80} className="lg:pt-2">
          <dl className="flex flex-col divide-y divide-border border-y border-border">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between gap-6 py-6">
                <dt className="text-[0.875rem] text-text-secondary">{s.label}</dt>
                <dd className="font-display text-[1.75rem] font-bold tabular-nums text-foreground">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-label text-muted">
            Measured on a local workspace with an Ollama model — zero network round trip in the loop.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
