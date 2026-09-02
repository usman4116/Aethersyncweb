import Link from 'next/link';
import { FolderOpen, Key, Play, Terminal } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

const steps = [
  {
    title: 'Install AetherSync Desktop',
    desc: 'Download the standalone installer and run it. Setup registers shortcuts and the deep-linking protocol for browser sign-in.',
    code: 'AetherSync-Desktop-0.1.0-x64.exe',
    icon: Terminal,
  },
  {
    title: 'Authenticate, or paste a key',
    desc: 'Sign in with Google, GitHub or Discord through the browser portal — or skip accounts entirely and store provider keys locally.',
    code: 'Settings → API Providers → Save secret key',
    icon: Key,
  },
  {
    title: 'Open a project folder',
    desc: 'Press Ctrl+O to load a directory. The local sandbox indexes the file tree and prepares the integrated terminal.',
    code: 'File explorer: frontend / backend / mobile',
    icon: FolderOpen,
  },
  {
    title: 'Run an autonomous task',
    desc: 'Switch to the agent tab and prompt it to inspect files, run tests and apply multi-file edits — each step reviewable.',
    code: '"Refactor Navbar for dark mode & run build"',
    icon: Play,
  },
];

export function DocsSection() {
  return (
    <Section id="docs" className="border-b border-border">
      <SectionHeader
        eyebrow="Quickstart"
        title="Get started in under 60 seconds."
        description="From download to your first autonomous refactor in four steps."
        aside={
          <Link href="/docs">
            <Button variant="outline" size="sm">
              Full documentation
            </Button>
          </Link>
        }
      />

      <ol className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
        {steps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 55} className="bg-background-secondary/70">
            <div className="flex h-full flex-col p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-md border border-primary/30 bg-primary/12 font-mono text-micro font-bold text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-[1rem] font-semibold text-foreground">
                  {step.title}
                </h3>
              </div>

              <p className="mt-4 text-[0.875rem] leading-relaxed text-text-secondary">
                {step.desc}
              </p>

              <div className="mt-6 flex items-center justify-between gap-3 rounded-lg border border-border bg-background px-3.5 py-2.5">
                <code className="truncate font-mono text-micro text-text-secondary">
                  {step.code}
                </code>
                <step.icon size={14} className="shrink-0 text-muted" aria-hidden />
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
