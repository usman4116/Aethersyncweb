import Link from 'next/link';
import { ArrowUpRight, Boxes, MonitorPlay, ShieldCheck, SquareTerminal } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';

const products = [
  {
    icon: MonitorPlay,
    label: 'Workspace',
    title: 'A desktop IDE, not a chat window',
    desc: 'Monaco-grade editing, tabbed workspaces, a file explorer and an agent panel that share one process. Open a repository and start working — no browser tab, no upload step.',
    href: '/preview',
    cta: 'Open the live preview',
    span: true,
  },
  {
    icon: Boxes,
    label: 'Providers',
    title: 'Bring your own model',
    desc: 'Seventeen providers, one credential store, zero lock-in.',
    href: '/providers',
    cta: 'Browse providers',
    span: false,
  },
  {
    icon: SquareTerminal,
    label: 'Terminal',
    title: 'Real shells, guarded',
    desc: 'Native PowerShell, CMD and Bash sessions with per-command permission prompts.',
    href: '/features#terminal',
    cta: 'See the agent tooling',
    span: false,
  },
  {
    icon: ShieldCheck,
    label: 'Privacy',
    title: 'Local-first by construction',
    desc: 'Source files, terminal history and workspace state stay on disk. Keys live in your OS keyring, and nothing is proxied through our servers.',
    href: '#deployment',
    cta: 'Read the deployment modes',
    span: true,
  },
];

/** The "do it all" product grid: two wide tiles, two narrow ones. */
export function ProductGrid() {
  return (
    <Section id="product" className="border-b border-border">
      <SectionHeader
        eyebrow="Platform"
        title={
          <>
            Do it all with <span className="text-ember-gradient">AetherSync.</span>
          </>
        }
        description="One installer covers the editor, the agent, the shell and the model layer. Every part is designed to be inspected, overridden and run offline."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <Reveal
            key={p.title}
            delay={i * 60}
            className={p.span ? 'lg:col-span-2' : 'lg:col-span-1'}
          >
            <Link
              href={p.href}
              className="group flex h-full flex-col rounded-xl border border-border bg-surface/45 p-6 transition-[transform,border-color,background-color] duration-300 ease-cine hover:-translate-y-[3px] hover:border-primary/30 hover:bg-surface-elevated/70"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-primary">
                  <p.icon size={16} />
                </span>
                <span className="kicker">{p.label}</span>
              </div>

              <h3 className="mt-6 font-display text-heading-sm font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 max-w-prose text-[0.875rem] leading-relaxed text-text-secondary">
                {p.desc}
              </p>

              <span className="mt-auto flex items-center gap-1.5 pt-6 text-label font-semibold text-primary">
                {p.cta}
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 ease-cine group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
