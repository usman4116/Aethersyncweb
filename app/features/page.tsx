import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Boxes, Check, Code2, Cpu, FolderLock, Globe, Terminal } from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ShotFrame } from '@/components/ui/ShotFrame';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import Link from 'next/link';

export const metadata = {
  title: 'Features — Autonomous Agent & Sandboxed Terminal',
  description:
    'Every capability inside AetherSync AI: the autonomous multi-file coding agent, the local-first sandbox, the integrated PTY terminal, multi-provider model switching and the Monaco editor.',
  keywords: [
    'AetherSync IDE features',
    'AetherSync AI features',
    'autonomous coding agent',
    'AI IDE sandboxed terminal',
    'multi-file refactoring AI',
    'Monaco AI code editor',
  ],
  openGraph: {
    title: 'AetherSync IDE Features — Autonomous Agent, Sandboxed Terminal & Model Hub',
    description: 'Every capability inside AetherSync AI: the autonomous multi-file coding agent, the local-first sandbox, the integrated PTY terminal, multi-provider model switching and the Monaco editor.',
    url: '/features',
    type: 'website',
  },
  alternates: { canonical: '/features' },
};

const featureDetails = [
  {
    icon: Code2,
    badge: 'Core Engine',
    title: 'Autonomous Coding Agent & Multi-File Refactoring',
    desc: 'AetherSync breaks down complex engineering prompts into concrete execution plans. It autonomously inspects directory structures, reads relevant modules, executes non-destructive edits, and verifies builds through real-time diffs.',
    bullets: [
      'Multi-turn reasoning and tool orchestration',
      'Unified git diff previews before applying modifications',
      'Continuous execution watchdog with graceful interruption',
    ],
  },
  {
    icon: FolderLock,
    badge: 'Enterprise Security',
    title: '100% Local-First Sandbox & Zero Telemetry',
    desc: 'Your proprietary code, sensitive configuration files, and terminal environment never leave your local hardware. AetherSync does not harvest source code or train centralized models on your workspace.',
    bullets: [
      'OS-level secure keyring for API key encryption',
      'Workspace sandbox preventing directory escapes',
      'Zero background telemetry or analytics on file contents',
    ],
  },
  {
    id: 'terminal',
    icon: Terminal,
    badge: 'Native Execution',
    title: 'Integrated Sandboxed PTY Terminal Shell',
    desc: 'Spawns full-fidelity interactive terminal instances (PowerShell, CMD, Bash) directly inside your editor. Supports background long-running daemons, build logs, and agent command execution with sub-millisecond response times.',
    bullets: [
      'Native Windows CMD & PowerShell pipe management',
      'Interactive REPL support with real-time stream echoing',
      'Granular permission prompts before running risky commands',
    ],
  },
  {
    icon: Cpu,
    badge: 'Universal Intelligence',
    title: 'Frontier Multi-Provider Model Hub',
    desc: 'Switch between Anthropic Claude 3.7 Sonnet, OpenAI GPT-4o / o3, DeepSeek R1, or local GPU-powered Ollama instances on the fly without changing your workflow.',
    bullets: [
      'Native streaming tool-calling support across all major vendors',
      'Instant model switching without losing conversation context',
      'Local offline inference support via Ollama / vLLM',
    ],
  },
  {
    icon: Globe,
    badge: 'Cloud Sync',
    title: 'Instant Browser Sign-In & Desktop Deep Linking',
    desc: 'Authenticate via Google, Discord, GitHub, or Email using Clerk Auth. Seamless desktop loopback deep-linking connects your profile and settings in one click.',
    bullets: [
      'OAuth 2.0 with Discord, GitHub, and Google integration',
      'Session storage persistence across browser redirects',
      'Local offline fallback for air-gapped environments',
    ],
  },
  {
    icon: Boxes,
    badge: 'Editor Experience',
    title: 'Monaco-Powered Code Editor & Custom TitleBar',
    desc: 'Enjoy VS Code grade syntax highlighting, breadcrumbs, tabbed navigation, and an Antigravity-inspired custom TitleBar with integrated command palette.',
    bullets: [
      'High-performance Monaco engine with 60+ language grammars',
      'Quick-open command palette (Ctrl+P / Cmd+P)',
      'Dark obsidian theme with low-contrast eye comfort',
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <Navbar />

      <main>
        <PageHeader
          eyebrow="Complete feature guide"
          title="Everything you need for autonomous engineering."
          description="An architectural review of the capabilities powering the AetherSync IDE and its desktop agent — what each subsystem does, and where its boundaries are."
          actions={
            <>
              <Link href="/download">
                <Button size="lg">Download AetherSync</Button>
              </Link>
              <Link href="/preview">
                <Button size="lg" variant="outline">
                  Try the live workspace
                </Button>
              </Link>
            </>
          }
        />

        <Section>
          <div className="grid gap-4 md:grid-cols-2">
            {featureDetails.map((feat, idx) => (
              <Reveal key={feat.title} delay={idx * 55}>
                <article
                  id={'id' in feat ? (feat.id as string) : undefined}
                  className="flex h-full scroll-mt-28 flex-col justify-between rounded-xl border border-border bg-surface/45 p-8"
                >
                  <div>
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-primary">
                        <feat.icon size={18} />
                      </span>
                      <span className="kicker">{feat.badge}</span>
                    </div>

                    <h2 className="font-display text-heading-sm font-semibold text-foreground">
                      {feat.title}
                    </h2>
                    <p className="mt-3 text-[0.875rem] leading-relaxed text-text-secondary">
                      {feat.desc}
                    </p>
                  </div>

                  <ul className="mt-7 flex flex-col gap-2.5 border-t border-border pt-6">
                    {feat.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-label text-text-secondary">
                        <Check size={14} className="mt-px shrink-0 text-primary" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
        {/* Those subsystems, as they appear in the shipped build */}
        <Section spacing="tight" className="border-t border-border">
          <SectionHeader
            eyebrow="Seen in the app"
            title="Where each subsystem lives."
            description="Screenshots of AetherSync Desktop 0.1.0 — the autonomous agent with its activity rail, and the permission matrix that gates everything it is allowed to touch."
          />

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-10">
            <Reveal>
              <ShotFrame
                src="/shots/agent-dark.webp"
                alt="AetherSync IDE Coding Agent with the tool-call activity rail and the sandbox scoped to the open project folder"
                caption="Coding Agent — activity rail, sandbox scoped to the open folder"
                sizes="(min-width: 1024px) 60vw, 100vw"
                lift
                glow
              />
            </Reveal>
            <Reveal delay={90}>
              <ShotFrame
                src="/shots/permissions-dark.webp"
                width={555}
                height={487}
                alt="AetherSync IDE permission matrix: allow, ask or deny file reading, writing, deletion, terminal, git, package installation, network access and MCP tools"
                caption="Settings — per-capability permission matrix"
                sizes="(min-width: 1024px) 34vw, 100vw"
                lift
              />
            </Reveal>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
