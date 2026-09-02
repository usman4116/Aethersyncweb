import {
  Boxes,
  Code2,
  Cpu,
  FolderLock,
  Globe,
  Terminal,
} from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';

const features = [
  {
    icon: Code2,
    title: 'Autonomous coding agent',
    desc: 'Multi-file refactors, new file scaffolding and syntax repair across large repositories, staged as a real-time diff you approve before anything is written.',
  },
  {
    icon: FolderLock,
    title: '100% local-first privacy',
    desc: 'Your codebase, terminal sessions and workspace state never leave your computer. Zero telemetry on proprietary source.',
  },
  {
    icon: Terminal,
    title: 'Sandboxed PTY shell',
    desc: 'Native PowerShell, CMD and Bash sessions with permission guards, streamed output and live echo — sub-100 ms locally.',
  },
  {
    icon: Cpu,
    title: 'Universal AI providers',
    desc: 'Switch between Claude 3.7 Sonnet, GPT-4o, DeepSeek R1, Gemini, Mistral, a local Ollama model or any OpenAI-compatible endpoint.',
  },
  {
    icon: Globe,
    title: 'One-click browser sign-in',
    desc: 'Optional web login via Google, Discord, GitHub or email, with desktop deep linking for cloud sync when you want it.',
  },
  {
    icon: Boxes,
    title: 'Monaco-powered editor',
    desc: 'VS Code-grade editing: full syntax highlighting, tabbed workspaces, multi-language support and a command palette.',
  },
];

export function Features() {
  return (
    <Section id="features" className="border-b border-border">
      <SectionHeader
        eyebrow="Core capabilities"
        title="Engineered for the next generation of software."
        description="Everything needed to build, test and ship modern software with an agent that behaves like a colleague rather than a black box."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feat, idx) => (
          <Reveal key={feat.title} delay={idx * 50}>
            <div className="group flex h-full flex-col bg-background-secondary p-7 transition-colors duration-300 ease-cine hover:bg-surface-hover/60">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-primary transition-colors duration-300 ease-cine group-hover:border-primary/40">
                <feat.icon size={18} />
              </span>
              <h3 className="mt-6 font-display text-[1.0625rem] font-semibold text-foreground">
                {feat.title}
              </h3>
              <p className="mt-3 text-[0.875rem] leading-relaxed text-text-secondary">
                {feat.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
