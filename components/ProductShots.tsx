'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Bot, KeyRound, MessagesSquare, PanelsTopLeft, TerminalSquare } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { ShotFrame } from '@/components/ui/ShotFrame';
import { LiveIDEApp } from '@/components/ui/LiveIDEApp';
import { LiveCodingAgentApp } from '@/components/ui/LiveCodingAgentApp';
import { LiveTerminalApp } from '@/components/ui/LiveTerminalApp';
import { LiveProvidersApp } from '@/components/ui/LiveProvidersApp';
import { LiveChatApp } from '@/components/ui/LiveChatApp';
import { cn } from '@/lib/utils';

type Shot = {
  id: string;
  label: string;
  icon: typeof Bot;
  title: string;
  copy: string;
  facts: string[];
  caption: string;
  component: React.ComponentType;
};

const SHOTS: Shot[] = [
  {
    id: 'workspace',
    label: 'Workspace',
    icon: PanelsTopLeft,
    title: 'The full editor, terminal and assistant in one frame.',
    copy:
      'Explorer, Monaco editor with real language services, an attached PTY terminal and the AI assistant docked on the right — the same window in dark and light, because the desktop app ships both themes.',
    facts: ['Monaco editor core', 'Attached bash session', 'Docked AI assistant'],
    caption: 'AetherSync Desktop 0.1.0 — IDE Workspace',
    component: LiveIDEApp,
  },
  {
    id: 'agent',
    label: 'Coding agent',
    icon: Bot,
    title: 'An agent that reads, edits and runs — inside a sandbox you set.',
    copy:
      'The Coding Agent works the repository directly: inspecting files, editing across them, running commands and verifying the result. The activity rail shows every tool call, and the sandbox is pinned to the folder you opened.',
    facts: ['Tool-call activity log', 'Folder-scoped sandbox', 'Approval on risky steps'],
    caption: 'Coding Agent — sandboxed to the open project',
    component: LiveCodingAgentApp,
  },
  {
    id: 'terminal',
    label: 'Terminal',
    icon: TerminalSquare,
    title: 'A real shell, not a transcript.',
    copy:
      'The integrated terminal is a genuine PTY: run your dev server, your test suite, your git workflow. The agent uses the same session, so what it runs is what you see.',
    facts: ['True PTY, not emulated', 'Shared with the agent', 'Per-project sessions'],
    caption: 'Integrated terminal running the project dev server',
    component: LiveTerminalApp,
  },
  {
    id: 'providers',
    label: 'Providers',
    icon: KeyRound,
    title: 'Your keys, your models, stored by the OS.',
    copy:
      'Point AetherSync at any OpenAI- or Anthropic-compatible endpoint — hosted or local. Presets cover the common ones, and API keys go into the operating system credential store rather than a config file.',
    facts: ['OpenAI & Anthropic formats', 'Ollama and LM Studio', 'OS credential store'],
    caption: 'Settings — Provider configuration',
    component: LiveProvidersApp,
  },
  {
    id: 'chat',
    label: 'Chat',
    icon: MessagesSquare,
    title: 'Start with a conversation, escalate to the workspace.',
    copy:
      'Simple Chat is the fastest surface in the app: ask a question, paste a file, get an answer. When it turns into real work, the same session moves into the IDE or the agent.',
    facts: ['Attachments supported', 'Model switch per chat', 'History stays local'],
    caption: 'Simple Chat — first run',
    component: LiveChatApp,
  },
];

export function ProductShots() {
  const [active, setActive] = useState(0);
  const shot = SHOTS[active];
  const ActiveComponent = shot.component;

  return (
    <Section id="product-shots" className="border-t border-border">
      <SectionHeader
        eyebrow="Inside the application"
        title="This is the actual desktop app."
        description="Not a mockup and not a marketing render — these are live interactive simulations of AetherSync Desktop 0.1.0 running on Linux, in the light and dark themes it ships with."
        aside={
          <Link href="/download">
            <Button variant="outline">
              Download the build
              <ArrowRight size={15} />
            </Button>
          </Link>
        }
      />

      {/* Tab strip — hairline grid, same language as the provider switcher */}
      <div
        className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5"
        role="tablist"
        aria-label="Application screenshots"
      >
        {SHOTS.map((entry, i) => {
          const Icon = entry.icon;
          const selected = i === active;
          return (
            <button
              key={entry.id}
              type="button"
              role="tab"
              id={`shot-tab-${entry.id}`}
              aria-selected={selected}
              aria-controls={`shot-panel-${entry.id}`}
              onClick={() => setActive(i)}
              className={cn(
                'flex items-center gap-2.5 px-4 py-3.5 text-left transition-colors duration-300 ease-cine',
                selected
                  ? 'bg-surface-elevated text-foreground'
                  : 'bg-background-secondary/80 text-text-secondary hover:bg-surface-hover/60 hover:text-foreground'
              )}
            >
              <Icon
                size={15}
                className={cn('shrink-0', selected ? 'text-primary' : 'text-muted')}
              />
              <span className="text-label font-semibold">{entry.label}</span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`shot-panel-${shot.id}`}
        aria-labelledby={`shot-tab-${shot.id}`}
        className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.55fr] lg:items-center lg:gap-14"
      >
        <Reveal key={`copy-${shot.id}`}>
          <h3 className="text-heading font-semibold text-foreground">{shot.title}</h3>
          <p className="mt-4 text-body text-text-secondary">{shot.copy}</p>
          <ul className="mt-7 space-y-px overflow-hidden rounded-lg border border-border bg-border">
            {shot.facts.map((fact) => (
              <li
                key={fact}
                className="flex items-center gap-3 bg-background-secondary/80 px-4 py-3 text-label text-text-secondary"
              >
                <span className="h-1 w-1 rounded-full bg-primary" aria-hidden />
                {fact}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal key={`shot-${shot.id}`} delay={80}>
          <ShotFrame
            alt={`AetherSync IDE ${shot.label.toLowerCase()} — ${shot.caption}`}
            caption={shot.caption}
            glow
          >
            <ActiveComponent />
          </ShotFrame>
        </Reveal>
      </div>
    </Section>
  );
}
