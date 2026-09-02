'use client';

import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';

const chapters = [
  {
    id: 'agent',
    label: 'Autonomous coding',
    title: 'Hand the agent a goal, review a diff.',
    body: 'The agent reads the repository before it writes. It plans across files, applies edits as a reviewable diff and stops at every boundary you have not granted, so a refactor never becomes a surprise.',
    points: [
      'Repository-wide context, not single-file guessing',
      'Multi-file edits staged as diffs you approve',
      'Syntax and type checks run before the agent reports done',
    ],
  },
  {
    id: 'chat',
    label: 'Conversational pairing',
    title: 'Ask about the code you actually have.',
    body: 'Chat is grounded in the open workspace. Reference a file, a selection or a failing test and get an answer that cites the real source instead of a plausible invention.',
    points: [
      'Workspace-aware answers with file references',
      'Switch model mid-conversation without losing context',
      'Inline apply — accept a suggestion straight into the buffer',
    ],
  },
  {
    id: 'workspace',
    label: 'Editor workspace',
    title: 'A full editor, not an assistant panel.',
    body: 'Tabbed buffers, a file tree, a command palette and multi-language syntax highlighting. The AI surfaces live beside the editor, so you never trade tooling for intelligence.',
    points: [
      'Command palette on Ctrl+P',
      'Tabbed workspaces with per-file state',
      'VS Code-grade editing behaviour',
    ],
  },
  {
    id: 'terminal',
    label: 'Sandboxed terminal',
    title: 'Real shells, with a permission boundary.',
    body: 'AetherSync spawns native PTY sessions — PowerShell, CMD, Bash — with streamed output and live echo. The agent may propose a command; you decide whether it runs.',
    points: [
      'Native PTY with sub-100 ms local latency',
      'Per-command permission prompts for agent-issued commands',
      'Full scrollback, streamed as it happens',
    ],
  },
  {
    id: 'models',
    label: 'Model routing',
    title: 'Seventeen providers, one credential store.',
    body: 'Point the agent at Claude, GPT-4o, DeepSeek R1, Gemini, Mistral or a local Ollama model. Keys are encrypted in the OS keyring and never leave the machine.',
    points: [
      'Bring your own API keys — no markup, no proxy',
      'Local models via Ollama and Jan for full offline use',
      'Per-task model selection instead of one global default',
    ],
  },
  {
    id: 'permissions',
    label: 'Trust & permissions',
    title: 'Autonomy you can bound.',
    body: 'Every capability that touches your machine — file writes, shell execution, network calls — sits behind an explicit grant, scoped to the workspace you opened.',
    points: [
      'Workspace-scoped file access',
      'Explicit grants for shell and network capabilities',
      'Zero telemetry on source code, ever',
    ],
  },
];

/**
 * Sticky summary rail driving scroll-linked chapters. The rail is a real anchor
 * list, so it works without JS; the observer only adds the active highlight.
 */
export function CapabilityTrack() {
  const [active, setActive] = useState(chapters[0].id);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const nodes = chapters
      .map((c) => document.getElementById(`chapter-${c.id}`))
      .filter((n): n is HTMLElement => Boolean(n));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id.replace('chapter-', ''));
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: 0 }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="capabilities" className="border-b border-border">
      <SectionHeader
        eyebrow="Capabilities"
        title="Everything the agent can reach, and where it stops."
        description="Six subsystems, one shell. Follow the summary to jump straight to the part you care about."
      />

      <div ref={containerRef} className="mt-16 grid gap-12 lg:grid-cols-[15rem_1fr] lg:gap-16">
        {/* Sticky summary rail */}
        <nav aria-label="Capability summary" className="lg:sticky lg:top-28 lg:self-start">
          <p className="kicker mb-5">Summary</p>
          <ol className="flex flex-col border-l border-border">
            {chapters.map((c, i) => (
              <li key={c.id}>
                <a
                  href={`#chapter-${c.id}`}
                  aria-current={active === c.id ? 'true' : undefined}
                  className={cn(
                    '-ml-px flex items-baseline gap-3 border-l py-2.5 pl-4 text-[0.8125rem] transition-colors duration-300 ease-cine',
                    active === c.id
                      ? 'border-primary font-semibold text-foreground'
                      : 'border-transparent text-muted hover:text-text-secondary'
                  )}
                >
                  <span className="font-mono text-micro text-muted">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {c.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Chapters */}
        <div className="flex flex-col">
          {chapters.map((c, i) => (
            <article
              key={c.id}
              id={`chapter-${c.id}`}
              className={cn(
                'scroll-mt-28 py-10 first:pt-0 last:pb-0',
                i > 0 && 'border-t border-border'
              )}
            >
              <p className="kicker">
                {String(i + 1).padStart(2, '0')} — {c.label}
              </p>
              <h3 className="mt-4 max-w-2xl font-display text-heading font-bold text-foreground">
                {c.title}
              </h3>
              <p className="mt-4 max-w-prose text-body text-text-secondary">{c.body}</p>
              <ul className="mt-6 flex flex-col gap-2.5">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[0.875rem] text-foreground">
                    <Check size={15} className="mt-1 shrink-0 text-primary" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
