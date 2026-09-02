import { Key, RefreshCw, ShieldCheck } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProvidersSection } from '@/components/ProvidersSection';
import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/layout/Section';
import { ShotFrame } from '@/components/ui/ShotFrame';

export const metadata = {
  title: 'Model Providers — Claude, GPT-4o, DeepSeek, Ollama',
  description:
    'Every model provider AetherSync AI supports, and how to configure each one: Anthropic Claude, OpenAI GPT-4o, DeepSeek R1, Groq, Mistral and fully local Ollama or LM Studio inference.',
  keywords: [
    'AetherSync IDE providers',
    'AetherSync AI models',
    'Claude coding IDE',
    'GPT-4o IDE',
    'DeepSeek R1 IDE',
    'Ollama local AI IDE',
  ],
  openGraph: {
    title: 'Model Providers — Claude, GPT-4o, DeepSeek & Ollama in AetherSync IDE',
    description: 'Every model provider AetherSync AI supports, and how to configure each one: Anthropic Claude, OpenAI GPT-4o, DeepSeek R1, Groq, Mistral and fully local Ollama or LM Studio inference.',
    url: '/providers',
    type: 'website',
  },
  alternates: { canonical: '/providers' },
};

const guarantees = [
  {
    icon: Key,
    title: 'OS keyring storage',
    desc: 'API secrets are encrypted locally with the native Windows Credential Manager and Electron safeStorage APIs.',
  },
  {
    icon: RefreshCw,
    title: 'Dynamic hot-swapping',
    desc: 'Move from Claude 3.7 to DeepSeek R1 mid-conversation without interrupting a running terminal task.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero intermediary proxies',
    desc: 'Requests stream directly from your machine to the provider. There is no relay in the middle to log them.',
  },
];

export default function ProvidersPage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <Navbar />

      <main>
        <PageHeader
          eyebrow="Universal model ecosystem"
          title="Supported AI providers and local LLMs."
          description="Zero lock-in. Connect your own API keys, or run completely offline against a model on your own GPU."
        />

        <ProvidersSection />

        {/* The pane itself, from the shipped build */}
        <Section spacing="tight" className="border-t border-border">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-center lg:gap-14">
            <div>
              <h2 className="text-heading font-semibold text-foreground">
                Add a provider in about twenty seconds.
              </h2>
              <p className="mt-4 text-body text-text-secondary">
                Pick a preset or paste any OpenAI- or Anthropic-compatible base URL, name the
                model and test the connection. Keys are handed to the operating system credential
                store — Keychain, Credential Manager or libsecret — never to a config file in your
                project.
              </p>
              <ul className="mt-7 space-y-px overflow-hidden rounded-lg border border-border bg-border">
                {[
                  'Presets for OpenAI, Anthropic, OpenRouter, Groq, NVIDIA NIM, Together, Fireworks, Mistral',
                  'Ollama and LM Studio for fully local inference',
                  'Test Connection before you save',
                ].map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 bg-background-secondary/80 px-4 py-3 text-label text-text-secondary"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <ShotFrame
              src="/shots/providers-dark.webp"
              alt="AetherSync IDE settings: provider configuration with quick presets, API format, base URL, API key and model fields"
              caption="Settings — Provider configuration"
              sizes="(min-width: 1024px) 58vw, 100vw"
              glow
            />
          </div>
        </Section>

        <Section spacing="tight">
          <div className="grid gap-4 md:grid-cols-3">
            {guarantees.map((g) => (
              <div key={g.title} className="rounded-xl border border-border bg-surface/45 p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-primary">
                  <g.icon size={16} />
                </span>
                <h2 className="mt-5 font-display text-[1rem] font-semibold text-foreground">
                  {g.title}
                </h2>
                <p className="mt-2.5 text-[0.875rem] leading-relaxed text-text-secondary">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
