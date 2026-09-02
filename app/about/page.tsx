import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AboutSection } from '@/components/AboutSection';
import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'About AetherSync Technology',
  description:
    'AetherSync Technology builds AetherSync IDE and AetherSync AI: autonomous developer platforms engineered so your source code never leaves your machine.',
  keywords: [
    'About AetherSync',
    'AetherSync Technology',
    'AetherSync AI company',
    'AetherSync IDE team',
  ],
  openGraph: {
    title: 'About AetherSync — The Team Behind AetherSync IDE',
    description: 'AetherSync Technology builds AetherSync IDE and AetherSync AI: autonomous developer platforms engineered so your source code never leaves your machine.',
    url: '/about',
    type: 'website',
  },
  alternates: { canonical: '/about' },
};

const founders = [
  {
    initial: 'U',
    name: 'Muhammad Usman Farhan',
    role: 'CEO & Founder',
    bio: "Visionary engineer and entrepreneur driving the AetherSync mission to build the world's most powerful autonomous AI developer platform.",
    lead: true,
  },
  {
    initial: 'A',
    name: 'Muhammad Abdullah Bhatti',
    role: 'Co-Founder',
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
            eyebrow="The people behind AetherSync"
            title="Meet the founders."
            description="A small team building developer tooling with the assumption that your code stays yours."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {founders.map((f, idx) => (
              <Reveal key={f.name} delay={idx * 60}>
                <article
                  className={`flex h-full flex-col gap-5 rounded-xl border bg-surface/45 p-8 ${
                    f.lead ? 'border-primary/30' : 'border-border'
                  }`}
                >
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-lg font-display text-heading-sm font-bold ${
                      f.lead
                        ? 'bg-primary text-primary-fg'
                        : 'border border-primary/35 bg-surface-elevated text-primary'
                    }`}
                    aria-hidden
                  >
                    {f.initial}
                  </span>

                  <div>
                    <h3 className="font-display text-body-lg font-semibold text-foreground">{f.name}</h3>
                    <p className="kicker mt-1.5">{f.role}</p>
                  </div>

                  <p className="text-label leading-relaxed text-text-secondary">{f.bio}</p>
                </article>
              </Reveal>
            ))}
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
