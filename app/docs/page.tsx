'use client';

import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Eyebrow } from '@/components/ui/Eyebrow';
import {
  Check,
  ChevronRight,
  Copy,
  HelpCircle,
  Keyboard,
  MessageSquareCode,
  Play,
  Search,
  Terminal,
} from 'lucide-react';

/* ── Copyable code block ───────────────────────────────────────────── */
function CodeBlock({ code, language = 'bash' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-5 overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex items-center justify-between border-b border-border bg-background px-4 py-2.5">
        <span className="font-mono text-micro uppercase tracking-wider text-muted">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-micro font-medium text-muted transition-colors duration-200 ease-cine hover:text-foreground"
        >
          {copied ? <Check size={13} className="text-success" /> : <Copy size={13} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <div className="overflow-x-auto p-4">
        <code className="whitespace-pre font-mono text-label leading-relaxed text-text-secondary">
          {code}
        </code>
      </div>
    </div>
  );
}

/* ── FAQ accordion ─────────────────────────────────────────────────── */
function FaqItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
      >
        <span className="text-[0.9375rem] font-medium text-foreground">{question}</span>
        <ChevronRight
          size={16}
          className={`shrink-0 text-muted transition-transform duration-200 ease-cine ${
            open ? 'rotate-90 text-primary' : ''
          }`}
          aria-hidden
        />
      </button>
      {open && (
        <div className="max-w-prose pb-5 text-label leading-relaxed text-text-secondary">{answer}</div>
      )}
    </div>
  );
}

const NAV = [
  { id: 'quickstart', label: 'Quickstart guide', icon: Play },
  { id: 'installation', label: 'Advanced installation', icon: Terminal },
  { id: 'prompting', label: 'Prompting practices', icon: MessageSquareCode },
  { id: 'shortcuts', label: 'Keyboard shortcuts', icon: Keyboard },
  { id: 'faq', label: 'FAQs', icon: HelpCircle },
] as const;

const steps = [
  {
    title: 'Install the desktop app',
    body: 'Download and run the installer. The deep-linking protocol is registered automatically.',
  },
  {
    title: 'Authenticate',
    body: 'Sign in through the browser portal, or paste provider API keys directly in Settings.',
  },
  {
    title: 'Open a project',
    body: 'Press Ctrl+O to load a folder. The workspace sandbox is scoped to that directory.',
  },
  {
    title: 'Start coding',
    body: 'Open the Agent tab and give it a task like “refactor the authentication flow”.',
  },
];

const shortcuts = [
  ['Open command palette', 'Ctrl + P'],
  ['Toggle integrated terminal', 'Ctrl + `'],
  ['Open project workspace', 'Ctrl + O'],
  ['New agent chat session', 'Ctrl + K'],
  ['Interrupt running agent', 'Escape'],
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState<string>('quickstart');

  useEffect(() => {
    const handleScroll = () => {
      for (const { id } of NAV) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(id);
  };

  return (
    <div className="relative min-h-screen text-foreground">
      <Navbar />

      <div className="mx-auto flex w-full max-w-shell flex-col gap-14 px-5 pb-24 pt-32 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
        {/* ── Sidebar ── */}
        <aside className="hidden w-60 shrink-0 lg:block">
          <div className="sticky top-28 space-y-8">
            <div className="relative">
              <Search
                size={14}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                aria-hidden
              />
              <input
                type="text"
                placeholder="Search docs..."
                aria-label="Search documentation"
                className="h-10 w-full rounded-lg border border-border bg-surface pl-9 pr-16 text-label text-foreground outline-none transition-colors duration-200 ease-cine placeholder:text-muted focus-visible:border-primary/50"
              />
              <kbd className="absolute right-2 top-1/2 -translate-y-1/2 rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[0.625rem] text-muted">
                Ctrl K
              </kbd>
            </div>

            <nav className="space-y-0.5" aria-label="Documentation sections">
              <p className="kicker mb-3 pl-3">Documentation</p>
              {NAV.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  aria-current={activeSection === id ? 'true' : undefined}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-label transition-colors duration-200 ease-cine ${
                    activeSection === id
                      ? 'bg-primary/10 font-medium text-primary'
                      : 'text-text-secondary hover:bg-surface-hover/60 hover:text-foreground'
                  }`}
                >
                  <Icon size={14} aria-hidden />
                  {label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* ── Content ── */}
        <main className="min-w-0 flex-1">
          <div className="max-w-3xl">
            <Eyebrow rule>Developer documentation</Eyebrow>
            <h1 className="mt-5 text-display-sm font-bold text-foreground">
              Set up, configure and master AetherSync.
            </h1>
            <p className="mt-5 max-w-prose text-body-lg text-text-secondary">
              Everything required to run the autonomous coding environment locally — from a first
              install to advanced agent prompting.
            </p>
          </div>

          <div className="mt-16 space-y-20">
            {/* Quickstart */}
            <section id="quickstart" className="scroll-mt-28">
              <h2 className="flex items-center gap-2.5 border-b border-border pb-4 font-display text-heading font-semibold text-foreground">
                <Play size={20} className="text-primary" aria-hidden /> Quickstart guide
              </h2>

              <ol className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
                {steps.map((s, i) => (
                  <li key={s.title} className="bg-surface/45 p-6">
                    <span className="font-mono text-micro text-primary">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-3 text-[0.9375rem] font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-label leading-relaxed text-text-secondary">{s.body}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Advanced installation */}
            <section id="installation" className="scroll-mt-28">
              <h2 className="flex items-center gap-2.5 border-b border-border pb-4 font-display text-heading font-semibold text-foreground">
                <Terminal size={20} className="text-primary" aria-hidden /> Advanced installation (CLI)
              </h2>

              <p className="mt-6 max-w-prose text-[0.875rem] leading-relaxed text-text-secondary">
                On Linux you can extract and run the standalone binary directly, without the
                installer routine.
              </p>

              <CodeBlock
                language="bash"
                code={`# Download the Linux archive
wget https://github.com/usman4116/Async-Login/releases/latest/download/AetherSync-Desktop-0.1.0-linux-x64.tar.gz

# Extract to your applications directory
tar -xzf AetherSync-Desktop-0.1.0-linux-x64.tar.gz -C ~/.local/bin/

# Make the executable runnable
chmod +x ~/.local/bin/AetherSync/aethersync

# Run the IDE
~/.local/bin/AetherSync/aethersync`}
              />
            </section>

            {/* Prompting */}
            <section id="prompting" className="scroll-mt-28">
              <h2 className="flex items-center gap-2.5 border-b border-border pb-4 font-display text-heading font-semibold text-foreground">
                <MessageSquareCode size={20} className="text-primary" aria-hidden /> Agent prompting
                practices
              </h2>

              <p className="mt-6 max-w-prose text-[0.875rem] leading-relaxed text-text-secondary">
                Autonomous agents work best with explicit context, constraints and a verification
                step. These two prompts differ only in specificity.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-error/25 bg-error/[0.07] p-6">
                  <p className="text-micro font-semibold uppercase tracking-wider text-error">
                    Avoid — vague
                  </p>
                  <p className="mt-3 font-mono text-label leading-relaxed text-text-secondary">
                    “Fix the login page design and make it look better.”
                  </p>
                  <p className="mt-4 text-micro leading-relaxed text-muted">
                    No context on which files are the login page, no definition of “better”, and no
                    stop condition.
                  </p>
                </div>

                <div className="rounded-xl border border-success/25 bg-success/[0.07] p-6">
                  <p className="text-micro font-semibold uppercase tracking-wider text-success">
                    Prefer — explicit
                  </p>
                  <p className="mt-3 font-mono text-label leading-relaxed text-text-secondary">
                    “In app/login/page.tsx, replace the generic blue button with the primary Button
                    from components/ui/Button.tsx. Run npm run build afterwards to verify.”
                  </p>
                  <p className="mt-4 text-micro leading-relaxed text-muted">
                    Explicit paths, a named replacement, and an actionable verification step.
                  </p>
                </div>
              </div>
            </section>

            {/* Shortcuts */}
            <section id="shortcuts" className="scroll-mt-28">
              <h2 className="flex items-center gap-2.5 border-b border-border pb-4 font-display text-heading font-semibold text-foreground">
                <Keyboard size={20} className="text-primary" aria-hidden /> Essential keyboard
                shortcuts
              </h2>

              <div className="mt-8 overflow-hidden rounded-xl border border-border">
                <table className="w-full text-left text-label">
                  <thead className="bg-surface-elevated">
                    <tr>
                      <th className="px-6 py-3.5 text-micro font-semibold uppercase tracking-wider text-muted">
                        Action
                      </th>
                      <th className="px-6 py-3.5 text-right text-micro font-semibold uppercase tracking-wider text-muted">
                        Shortcut
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border bg-surface/45">
                    {shortcuts.map(([action, keys]) => (
                      <tr key={action}>
                        <td className="px-6 py-3.5 text-text-secondary">{action}</td>
                        <td className="px-6 py-3.5 text-right">
                          <kbd className="rounded border border-border bg-background px-2 py-1 font-mono text-micro text-foreground">
                            {keys}
                          </kbd>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-28">
              <h2 className="flex items-center gap-2.5 border-b border-border pb-4 font-display text-heading font-semibold text-foreground">
                <HelpCircle size={20} className="text-primary" aria-hidden /> Frequently asked
                questions
              </h2>

              <div className="mt-4">
                <FaqItem
                  question="Where are my API keys stored?"
                  answer="AetherSync is entirely local-first. Your API keys are encrypted and stored exclusively in your operating system's native keychain (Windows Credential Manager, macOS Keychain, or libsecret). They are never transmitted to our servers."
                />
                <FaqItem
                  question="Does AetherSync collect telemetry or my code data?"
                  answer={
                    <>
                      No. AetherSync has a strict <strong className="text-foreground">zero
                      telemetry on code</strong> policy. We do not track keystrokes, upload source
                      code, or train models on your proprietary data. Your code only reaches the LLM
                      provider you explicitly select.
                    </>
                  }
                />
                <FaqItem
                  question="Can I use local models completely offline?"
                  answer="Yes. Selecting the Ollama or LM Studio provider routes all agent logic to your localhost port, allowing fully air-gapped autonomous coding with no API cost."
                />
                <FaqItem
                  question="Is this just a wrapper around GPT-4?"
                  answer="No. AetherSync runs a continuous feedback loop: the agent executes terminal commands (npm run build, cargo test), reads the console output, and corrects its own code before presenting a diff."
                />
              </div>
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
