import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AboutSection } from '@/components/AboutSection';
import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowUpRight, Sparkles, Code2, Cpu } from 'lucide-react';

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

const founders = [
  {
    name: 'Muhammad Usman Farhan',
    role: 'CEO & Founder',
    image: '/founder.jpg',
    bio: "Visionary engineer and entrepreneur driving the AetherSync mission to build Pakistan's 1st Autonomous AI IDE and empower global developers with private, high-speed agentic coding.",
    lead: true,
  },
  {
    name: 'Muhammad Abdullah Bhatti',
    role: 'Co-Founder',
    initial: 'A',
    bio: 'Core architect and product strategist shaping the AetherSync ecosystem — from infrastructure to user experience across every platform.',
    lead: false,
  },
];

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

        <Section>
          <SectionHeader
            eyebrow="Leadership & Innovation"
            title="Meet the founders."
            description="Engineering the frontier of local-first developer tooling and autonomous AI systems."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-[1.4fr_1fr] items-stretch">
            {/* Founder Usman Farhan Featured Card */}
            <Reveal>
              <article className="h-full rounded-2xl border border-primary/40 bg-surface/60 backdrop-blur-xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center shadow-xl relative overflow-hidden group">
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                
                {/* Founder Image */}
                <div className="relative w-44 h-56 sm:w-52 sm:h-64 rounded-xl overflow-hidden shrink-0 border-2 border-primary/30 shadow-2xl">
                  <Image
                    src="/founder.jpg"
                    alt="Muhammad Usman Farhan — Founder & CEO of AetherSync"
                    fill
                    className="object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] text-white font-mono bg-black/60 backdrop-blur-md px-2 py-1 rounded border border-white/10">
                    <span>AETHERSYNC</span>
                    <span className="text-primary">FOUNDER</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-1 gap-3">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold mb-2 border border-primary/30">
                      <Sparkles size={12} />
                      <span>Founder & CEO</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground tracking-tight">
                      Muhammad Usman Farhan
                    </h3>
                    <p className="text-primary font-mono text-xs font-semibold mt-0.5">
                      CEO & Founder · AetherSync Technology
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-text-secondary">
                    Visionary engineer and entrepreneur driving the AetherSync mission to pioneer the world's most powerful, privacy-first autonomous AI IDE — pairing local execution speed with frontier intelligence.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-background border border-border text-text-secondary font-mono text-[11px] flex items-center gap-1">
                      <Code2 size={12} className="text-primary" /> Autonomous IDE
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-background border border-border text-text-secondary font-mono text-[11px] flex items-center gap-1">
                      <Cpu size={12} className="text-primary" /> Multi-Model Architecture
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>

            {/* Co-Founder Card */}
            <Reveal delay={80}>
              <article className="h-full rounded-2xl border border-border bg-surface/45 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between gap-5 shadow-lg">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-surface-elevated border border-primary/35 text-primary font-bold text-2xl flex items-center justify-center font-display mb-4 shadow-sm">
                    A
                  </div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-surface text-text-secondary text-xs font-medium mb-1 border border-border">
                    Co-Founder
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Muhammad Abdullah Bhatti
                  </h3>
                  <p className="text-muted text-xs font-mono mt-0.5">
                    Co-Founder · Core Architecture
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-text-secondary">
                  Core architect and product strategist shaping the AetherSync ecosystem — from high-throughput local PTY terminal infrastructure to seamless multi-platform UX.
                </p>

                <div className="border-t border-border pt-3">
                  <span className="text-[11px] text-muted font-mono">Infrastructure · PTY Core · System Design</span>
                </div>
              </article>
            </Reveal>
          </div>
        </Section>

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
