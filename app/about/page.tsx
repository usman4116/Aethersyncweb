import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AboutSection } from '@/components/AboutSection';
import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowUpRight, Sparkles, Code2, Cpu, ShieldCheck, Terminal, Flame } from 'lucide-react';

export const metadata = {
  title: 'About AetherSync Technology — Founder Usman Farhan',
  description:
    'AetherSync Technology builds AetherSync IDE and AetherSync AI: autonomous developer platforms engineered so your source code never leaves your machine.',
  keywords: [
    'About AetherSync',
    'Usman Farhan',
    'Muhammad Usman Farhan',
    'AetherSync Founder',
    'AetherSync Technology',
    'AetherSync AI company',
    'AetherSync IDE team',
  ],
  openGraph: {
    title: 'About AetherSync — Founder Usman Farhan & Team',
    description: 'AetherSync Technology builds AetherSync IDE and AetherSync AI: autonomous developer platforms engineered so your source code never leaves your machine.',
    url: '/about',
    type: 'website',
  },
  alternates: { canonical: '/about' },
};

const ecosystem = ['Purple AI', 'Open ERP', 'Corpflow', 'Finraze', 'AetherSync AI IDE'];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <Navbar />

      <main>
        <PageHeader
          eyebrow="Company & vision"
          title="About AetherSync Technology."
          description="Pioneering autonomous developer platforms that automate complex workflows and scale engineering speed."
        />

        <AboutSection />

        {/* Meet the Founders Section */}
        <Section>
          <SectionHeader
            eyebrow="Leadership & Innovation"
            title="Meet the founders."
            description="Engineering the frontier of local-first developer tooling and autonomous AI systems."
          />

          <div className="mt-12 flex flex-col gap-8">
            
            {/* BIG HERO FOUNDER CARD — Usman Farhan */}
            <Reveal>
              <article className="w-full rounded-3xl border-2 border-primary/40 bg-surface/80 backdrop-blur-2xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-8 lg:gap-14 group">
                
                {/* Background Ambient Glow */}
                <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -left-16 -top-16 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                {/* Big Founder Portrait Image */}
                <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] h-[440px] sm:h-[500px] lg:h-[540px] rounded-2xl overflow-hidden shrink-0 border-2 border-primary/40 shadow-[0_0_50px_rgba(255,108,26,0.25)]">
                  <Image
                    src="/founder.jpg"
                    alt="Muhammad Usman Farhan — Founder & CEO of AetherSync"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  
                  {/* Subtle edge overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent pointer-events-none" />
                  
                  {/* Bottom Image Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white font-mono bg-black/75 backdrop-blur-md px-3 py-2 rounded-xl border border-white/15 shadow-lg">
                    <span className="font-bold flex items-center gap-1.5 tracking-wider">
                      <Flame size={14} className="text-primary" /> AETHERSYNC
                    </span>
                    <span className="text-primary font-bold tracking-widest text-[11px] bg-primary/20 px-2 py-0.5 rounded border border-primary/30">
                      FOUNDER & CEO
                    </span>
                  </div>
                </div>

                {/* Founder Detailed Story & Vision */}
                <div className="flex flex-col justify-between flex-1 gap-5 z-10 text-left">
                  
                  <div>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 text-primary text-xs font-bold mb-3 border border-primary/35 shadow-sm">
                      <Sparkles size={13} />
                      <span>🇵🇰 Founder & Chief Executive Officer</span>
                    </div>

                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                      Muhammad Usman Farhan
                    </h2>

                    <p className="text-primary font-mono text-sm sm:text-base font-semibold mt-1">
                      CEO & Founder · AetherSync Technology
                    </p>
                  </div>

                  <blockquote className="border-l-4 border-primary pl-4 py-1 text-base sm:text-lg font-medium text-foreground italic leading-relaxed bg-surface-elevated/40 rounded-r-xl">
                    "We engineered AetherSync with a bold conviction: your source code must never leave your machine. Frontier AI intelligence and lightning-fast local execution belong directly in the developer's hands."
                  </blockquote>

                  <p className="text-sm sm:text-base leading-relaxed text-text-secondary">
                    Visionary engineer and entrepreneur driving the AetherSync mission to build Pakistan's 1st Autonomous AI IDE and scale it into the world's premier developer platform. Leading the core architecture across multi-model orchestration, folder-scoped local sandboxes, and autonomous AI agents.
                  </p>

                  {/* Core Architecture Tags */}
                  <div className="pt-2 flex flex-wrap gap-2.5">
                    <span className="px-3 py-1.5 rounded-lg bg-background-secondary border border-border text-foreground font-mono text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                      <Code2 size={14} className="text-primary" /> Autonomous Coding Agent
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-background-secondary border border-border text-foreground font-mono text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                      <ShieldCheck size={14} className="text-primary" /> 100% Local-First Privacy
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-background-secondary border border-border text-foreground font-mono text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                      <Terminal size={14} className="text-primary" /> High-Throughput PTY Core
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-background-secondary border border-border text-foreground font-mono text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                      <Cpu size={14} className="text-primary" /> Universal Model Engine
                    </span>
                  </div>

                </div>

              </article>
            </Reveal>

            {/* Co-Founder Card */}
            <div className="grid gap-6 md:grid-cols-2">
              <Reveal delay={60}>
                <article className="h-full rounded-2xl border border-border bg-surface/50 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between gap-5 shadow-lg">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-surface-elevated border border-primary/35 text-primary font-bold text-2xl flex items-center justify-center font-display mb-4 shadow-md">
                      A
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-surface text-primary text-xs font-bold mb-1 border border-border">
                      Co-Founder
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      Muhammad Abdullah Bhatti
                    </h3>
                    <p className="text-muted text-xs font-mono mt-0.5">
                      Co-Founder · Core Architecture & Infrastructure
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-text-secondary">
                    Core architect and product strategist shaping the AetherSync ecosystem — specializing in high-throughput local PTY terminal infrastructure, process isolation, and cross-platform desktop optimization.
                  </p>

                  <div className="border-t border-border pt-3">
                    <span className="text-xs text-muted font-mono">Infrastructure · PTY Core · System Design</span>
                  </div>
                </article>
              </Reveal>

              {/* Company Mission Pillars Card */}
              <Reveal delay={100}>
                <article className="h-full rounded-2xl border border-border bg-surface/50 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between gap-5 shadow-lg">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 text-primary font-bold text-2xl flex items-center justify-center font-display mb-4 shadow-md">
                      <Sparkles size={24} />
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-surface text-foreground text-xs font-bold mb-1 border border-border">
                      Engineering Philosophy
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      Sovereignty & Speed
                    </h3>
                    <p className="text-muted text-xs font-mono mt-0.5">
                      Built for developers who demand total control
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-text-secondary">
                    AetherSync is engineered from day one to eliminate intermediary cloud relays. Whether connected to frontier models or local Ollama instances on your machine, your codebase stays strictly under your control.
                  </p>

                  <div className="border-t border-border pt-3">
                    <span className="text-xs text-primary font-mono font-semibold">Zero Telemetry · Instant Hot-Swapping · Local Runtime</span>
                  </div>
                </article>
              </Reveal>
            </div>

          </div>
        </Section>

        {/* Ecosystem Section */}
        <Section spacing="loose" className="border-t border-border">
          <Reveal>
            <div className="grid items-center gap-10 rounded-xl border border-border bg-surface/45 p-8 md:grid-cols-[1fr_auto] sm:p-12">
              <div>
                <span className="kicker">Parent organisation</span>
                <h2 className="mt-3 font-display text-heading font-semibold text-foreground">
                  Part of the Aethersync ecosystem.
                </h2>
                <p className="mt-3 max-w-prose text-[0.875rem] leading-relaxed text-text-secondary">
                  Aethersync builds AI and enterprise SaaS platforms that power modern digital operations.
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {ecosystem.map((p) => (
                    <li
                      key={p}
                      className="rounded-md border border-border bg-background px-3 py-1.5 text-micro font-medium text-text-secondary"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://theaethersync.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 self-start rounded-lg border border-border-strong px-5 text-label font-medium text-foreground transition-colors duration-200 ease-cine hover:border-primary/50 hover:text-primary md:self-center"
              >
                theaethersync.com
                <ArrowUpRight size={14} aria-hidden />
              </a>
            </div>
          </Reveal>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
