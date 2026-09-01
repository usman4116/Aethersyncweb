'use client';

import {
  Code2,
  ShieldCheck,
  Zap,
  Terminal,
  Cpu,
  Globe,
  Layers,
  Sparkles,
  GitBranch,
  RefreshCw,
  FolderLock,
  Boxes,
} from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Autonomous Coding Agent',
    desc: 'Perform multi-file refactoring, autonomous file creation, and syntax fixes across large repositories with real-time diff previews.',
  },
  {
    icon: FolderLock,
    title: '100% Local-First Privacy',
    desc: 'Your codebase, terminal sessions, and workspace files never leave your computer. Zero telemetry on your proprietary IP.',
  },
  {
    icon: Terminal,
    title: 'Integrated Sandboxed PTY Shell',
    desc: 'Spawns high-performance native shells (PowerShell, CMD, Bash) with permission guards, instant stream output, and live echo.',
  },
  {
    icon: Cpu,
    title: 'Universal AI Providers',
    desc: 'Seamlessly switch between Anthropic Claude 3.7 Sonnet, OpenAI GPT-4o, DeepSeek R1, Ollama (Local LLM), and custom OpenAI endpoints.',
  },
  {
    icon: Globe,
    title: 'One-Click Browser Sign-In',
    desc: 'Modern web login with Clerk Auth. Authenticate via Google, Discord, GitHub, or Email to unlock cloud sync with desktop deep linking.',
  },
  {
    icon: Boxes,
    title: 'Monaco-Powered Editor',
    desc: 'VS Code grade editing experience with full syntax highlighting, tabbed workspaces, multi-language support, and Antigravity TitleBar.',
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold mb-3">
          <Zap size={12} />
          <span>Core Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
          Engineered for the <span className="text-primary">Next Generation</span> of Software
        </h2>
        <p className="mt-3 text-text-secondary text-sm sm:text-base">
          Everything you need to build, test, and ship modern software with autonomous AI intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div
              key={idx}
              className="group relative rounded-2xl border border-border bg-surface/80 p-7  transition-all duration-300 hover:border-primary/40 hover:bg-surface-elevated hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-transform">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {feat.title}
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed font-normal">
                {feat.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
