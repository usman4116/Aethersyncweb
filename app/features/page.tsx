import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  Code2,
  FolderLock,
  Terminal,
  Cpu,
  Globe,
  Boxes,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  GitBranch,
  Search,
  Key,
} from 'lucide-react';

export const metadata = {
  title: 'Features & Architecture | AetherSync AI IDE',
  description: 'Explore the core autonomous capabilities, local sandbox, multi-provider model switching, and Monaco editor inside AetherSync Desktop.',
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
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="glow-orb top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/15" />
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold mb-4">
          <Zap size={13} />
          <span>Complete Feature Guide</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-foreground leading-tight">
          Everything You Need for <span className="aether-gradient-text">Autonomous Engineering</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Deep architectural review of the capabilities powering AetherSync AI IDE and Desktop Agent.
        </p>
      </section>

      {/* Feature Deep Dive Grid */}
      <section className="relative pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureDetails.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="aether-card rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-surface text-primary border border-border">
                      {feat.badge}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-foreground mb-3">{feat.title}</h2>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal mb-6">
                    {feat.desc}
                  </p>
                </div>

                <div className="pt-5 border-t border-border space-y-2">
                  {feat.bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-text-secondary">
                      <CheckCircle2 size={13} className="text-primary shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
