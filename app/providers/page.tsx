import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProvidersSection } from '@/components/ProvidersSection';
import { Cpu, ShieldCheck, Key, RefreshCw, Zap } from 'lucide-react';

export const metadata = {
  title: 'API Providers & Model Compatibility | AetherSync AI IDE',
  description: 'Configure Anthropic Claude 3.7, OpenAI GPT-4o, DeepSeek R1, or local Ollama LLMs with AetherSync Desktop.',
};

export default function ProvidersPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Header */}
      <section className="relative pt-36 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="glow-orb top-24 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-primary/15" />
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold mb-4">
          <Cpu size={13} />
          <span>Universal Model Ecosystem</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-foreground leading-tight">
          Supported <span className="aether-gradient-text">AI Providers &amp; LLMs</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Zero lock-in. Connect your own API keys or run completely offline with local GPUs.
        </p>
      </section>

      {/* Interactive Provider Hub Component */}
      <div className="pb-16">
        <ProvidersSection />
      </div>

      {/* Security & Keyring Info */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="aether-card rounded-2xl p-6">
            <Key size={22} className="text-primary mb-3" />
            <h3 className="text-base font-bold text-foreground mb-1.5">OS Keyring Storage</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              API secrets are encrypted locally with native Windows Credential Manager / safeStorage APIs.
            </p>
          </div>
          <div className="aether-card rounded-2xl p-6">
            <RefreshCw size={22} className="text-primary mb-3" />
            <h3 className="text-base font-bold text-foreground mb-1.5">Dynamic Hot-Swapping</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Switch from Claude 3.7 to DeepSeek R1 mid-conversation without interrupting terminal tasks.
            </p>
          </div>
          <div className="aether-card rounded-2xl p-6">
            <ShieldCheck size={22} className="text-primary mb-3" />
            <h3 className="text-base font-bold text-foreground mb-1.5">Zero Intermediary Proxies</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Requests stream directly from your machine to Anthropic / OpenAI / Ollama with no MITM proxy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
