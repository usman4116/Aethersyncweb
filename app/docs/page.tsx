'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { 
  Terminal, 
  BookOpen, 
  Search, 
  Copy, 
  CheckCircle2, 
  ChevronRight, 
  MessageSquareCode, 
  Keyboard, 
  HelpCircle,
  FolderOpen,
  Key,
  Play
} from 'lucide-react';

/* ── Helper Component for Copyable Code Blocks ── */
function CodeBlock({ code, language = 'bash' }: { code: string, language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl bg-surface border border-border overflow-hidden my-4">
      <div className="flex items-center justify-between px-4 py-2 bg-background border-b border-border">
        <span className="text-[11px] font-mono text-muted uppercase tracking-wider">{language}</span>
        <button 
          onClick={handleCopy}
          className="text-muted hover:text-foreground transition-colors flex items-center gap-1.5 text-xs"
        >
          {copied ? <CheckCircle2 size={13} className="text-green-500" /> : <Copy size={13} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <code className="text-sm font-mono text-primary/90 whitespace-pre">{code}</code>
      </div>
    </div>
  );
}

/* ── FAQ Accordion Item ── */
function FaqItem({ question, answer }: { question: string, answer: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="border border-border rounded-xl bg-surface overflow-hidden mb-3">
      <button 
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-surface-elevated transition-colors"
      >
        <span className="font-semibold text-foreground text-sm">{question}</span>
        <ChevronRight size={16} className={`text-muted transform transition-transform ${open ? 'rotate-90' : ''}`} />
      </button>
      {open && (
        <div className="p-4 pt-0 text-sm text-text-secondary border-t border-border mt-2 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('quickstart');

  // Simple scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['quickstart', 'installation', 'prompting', 'shortcuts', 'faq'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
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
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        
        {/* ── Left Sidebar Navigation ── */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="sticky top-28 space-y-8">
            
            {/* Search Placeholder */}
            <div className="relative group cursor-text">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search size={14} className="text-muted group-hover:text-primary transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Search docs..." 
                className="w-full bg-surface border border-border rounded-xl pl-9 pr-14 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted"
              />
              <div className="absolute inset-y-0 right-2 flex items-center">
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono font-medium text-muted bg-background border border-border rounded">Ctrl K</kbd>
              </div>
            </div>

            {/* Nav Links */}
            <nav className="space-y-1">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-muted mb-3 pl-2">Documentation</h4>
              
              <button onClick={() => scrollTo('quickstart')} className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${activeSection === 'quickstart' ? 'bg-primary/10 text-primary font-semibold' : 'text-text-secondary hover:text-foreground hover:bg-surface'}`}>
                <Play size={14} /> Quickstart Guide
              </button>
              <button onClick={() => scrollTo('installation')} className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${activeSection === 'installation' ? 'bg-primary/10 text-primary font-semibold' : 'text-text-secondary hover:text-foreground hover:bg-surface'}`}>
                <Terminal size={14} /> Advanced Installation
              </button>
              <button onClick={() => scrollTo('prompting')} className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${activeSection === 'prompting' ? 'bg-primary/10 text-primary font-semibold' : 'text-text-secondary hover:text-foreground hover:bg-surface'}`}>
                <MessageSquareCode size={14} /> Prompting Best Practices
              </button>
              <button onClick={() => scrollTo('shortcuts')} className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${activeSection === 'shortcuts' ? 'bg-primary/10 text-primary font-semibold' : 'text-text-secondary hover:text-foreground hover:bg-surface'}`}>
                <Keyboard size={14} /> Keyboard Shortcuts
              </button>
              <button onClick={() => scrollTo('faq')} className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${activeSection === 'faq' ? 'bg-primary/10 text-primary font-semibold' : 'text-text-secondary hover:text-foreground hover:bg-surface'}`}>
                <HelpCircle size={14} /> FAQs
              </button>
            </nav>
          </div>
        </aside>

        {/* ── Main Content Area ── */}
        <main className="flex-1 min-w-0 max-w-4xl pb-24">
          
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground leading-tight mb-4">
              AetherSync <span className="text-primary">Documentation</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Everything you need to set up, configure, and master the AetherSync autonomous coding environment.
            </p>
          </div>

          <div className="space-y-16">
            
            {/* Quickstart */}
            <section id="quickstart" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border flex items-center gap-2">
                <Play className="text-primary" /> Quickstart Guide
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="aether-card rounded-xl p-5">
                  <div className="w-8 h-8 rounded-lg bg-primary text-foreground font-black text-sm flex items-center justify-center mb-3">1</div>
                  <h3 className="font-bold text-foreground mb-2">Install Desktop</h3>
                  <p className="text-xs text-text-secondary">Download and run the installer. The deep-linking protocol is automatically registered.</p>
                </div>
                <div className="aether-card rounded-xl p-5">
                  <div className="w-8 h-8 rounded-lg bg-primary text-foreground font-black text-sm flex items-center justify-center mb-3">2</div>
                  <h3 className="font-bold text-foreground mb-2">Authenticate</h3>
                  <p className="text-xs text-text-secondary">Sign in via the browser portal or input your specific API keys in Settings.</p>
                </div>
                <div className="aether-card rounded-xl p-5">
                  <div className="w-8 h-8 rounded-lg bg-primary text-foreground font-black text-sm flex items-center justify-center mb-3">3</div>
                  <h3 className="font-bold text-foreground mb-2">Open Project</h3>
                  <p className="text-xs text-text-secondary">Press <kbd className="px-1.5 py-0.5 bg-surface-elevated rounded border border-border mx-1">Ctrl+O</kbd> to load your folder.</p>
                </div>
                <div className="aether-card rounded-xl p-5">
                  <div className="w-8 h-8 rounded-lg bg-primary text-foreground font-black text-sm flex items-center justify-center mb-3">4</div>
                  <h3 className="font-bold text-foreground mb-2">Start Coding</h3>
                  <p className="text-xs text-text-secondary">Open the Agent tab and give it a prompt like "Refactor the authentication flow".</p>
                </div>
              </div>
            </section>

            {/* Advanced Installation */}
            <section id="installation" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border flex items-center gap-2">
                <Terminal className="text-primary" /> Advanced Installation (CLI)
              </h2>
              
              <p className="text-sm text-text-secondary mb-4">
                For power users on Linux, you can extract and run the standalone binaries directly from the terminal without standard installation routines.
              </p>
              
              <CodeBlock 
                language="bash" 
                code={`# Download the Linux Archive
wget https://github.com/usman4116/Async-Login/releases/latest/download/AetherSync-Desktop-0.1.0-linux-x64.tar.gz

# Extract to your applications directory
tar -xzf AetherSync-Desktop-0.1.0-linux-x64.tar.gz -C ~/.local/bin/

# Make the executable runable
chmod +x ~/.local/bin/AetherSync/aethersync

# Run the IDE
~/.local/bin/AetherSync/aethersync`} 
              />
            </section>

            {/* Prompting Best Practices */}
            <section id="prompting" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border flex items-center gap-2">
                <MessageSquareCode className="text-primary" /> Agent Prompting Best Practices
              </h2>
              
              <p className="text-sm text-text-secondary mb-6">
                AetherSync autonomous agents operate best when given clear context and constraints. Follow these patterns to achieve the highest accuracy in multi-file refactors.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5">
                  <h4 className="text-red-500 font-bold text-sm mb-2 flex items-center gap-1.5">
                    <span className="text-lg">❌</span> Avoid Vague Prompts
                  </h4>
                  <p className="text-xs text-text-secondary italic">"Fix the login page design and make it look better."</p>
                  <p className="text-[11px] text-muted mt-3">Why it fails: No context on which files represent the "login page", no specific definition of "better", and no clear stop condition.</p>
                </div>

                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5">
                  <h4 className="text-emerald-500 font-bold text-sm mb-2 flex items-center gap-1.5">
                    <span className="text-lg">✅</span> Use Explicit Constraints
                  </h4>
                  <p className="text-xs text-text-secondary italic">"In app/login/page.tsx, replace the generic blue button with the new primary button component from components/ui/Button.tsx. Run npm run build afterwards to verify."</p>
                  <p className="text-[11px] text-muted mt-3">Why it works: Explicit file paths, clear component replacements, and an actionable verification step.</p>
                </div>
              </div>
            </section>

            {/* Keyboard Shortcuts */}
            <section id="shortcuts" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border flex items-center gap-2">
                <Keyboard className="text-primary" /> Essential Keyboard Shortcuts
              </h2>
              
              <div className="aether-card rounded-xl overflow-hidden">
                <table className="w-full text-sm text-left">
                  <thead className="bg-surface-elevated text-xs uppercase text-muted">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Action</th>
                      <th className="px-6 py-4 font-semibold text-right">Shortcut</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-surface-elevated/50 transition-colors">
                      <td className="px-6 py-3 text-foreground">Open Command Palette</td>
                      <td className="px-6 py-3 text-right"><kbd className="px-2 py-1 rounded bg-surface border border-border text-xs font-mono">Ctrl + P</kbd></td>
                    </tr>
                    <tr className="hover:bg-surface-elevated/50 transition-colors">
                      <td className="px-6 py-3 text-foreground">Toggle Integrated Terminal</td>
                      <td className="px-6 py-3 text-right"><kbd className="px-2 py-1 rounded bg-surface border border-border text-xs font-mono">Ctrl + `</kbd></td>
                    </tr>
                    <tr className="hover:bg-surface-elevated/50 transition-colors">
                      <td className="px-6 py-3 text-foreground">Open Project Workspace</td>
                      <td className="px-6 py-3 text-right"><kbd className="px-2 py-1 rounded bg-surface border border-border text-xs font-mono">Ctrl + O</kbd></td>
                    </tr>
                    <tr className="hover:bg-surface-elevated/50 transition-colors">
                      <td className="px-6 py-3 text-foreground">New Agent Chat Session</td>
                      <td className="px-6 py-3 text-right"><kbd className="px-2 py-1 rounded bg-surface border border-border text-xs font-mono">Ctrl + K</kbd></td>
                    </tr>
                    <tr className="hover:bg-surface-elevated/50 transition-colors">
                      <td className="px-6 py-3 text-foreground">Interrupt Running Agent</td>
                      <td className="px-6 py-3 text-right"><kbd className="px-2 py-1 rounded bg-surface border border-border text-xs font-mono">Escape</kbd></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQs */}
            <section id="faq" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border flex items-center gap-2">
                <HelpCircle className="text-primary" /> Frequently Asked Questions
              </h2>
              
              <FaqItem 
                question="Where are my API keys stored?" 
                answer="AetherSync is entirely local-first. Your API keys are encrypted and stored exclusively in your operating system's native keychain (e.g., Windows Credential Manager or macOS Keychain). We never transmit them to our servers." 
              />
              <FaqItem 
                question="Does AetherSync collect telemetry or my code data?" 
                answer={
                  <>
                    No. AetherSync has a strict <strong>Zero Telemetry on Code</strong> policy. We do not track your keystrokes, we do not upload your source code, and we do not use your proprietary data to train our own models. Your code only goes to the LLM provider you explicitly select.
                  </>
                } 
              />
              <FaqItem 
                question="Can I use local models completely offline?" 
                answer="Yes! By selecting the Ollama or LM Studio provider in the settings, AetherSync will route all agent logic to your localhost port. This allows for 100% air-gapped, offline autonomous coding without spending a dime on API costs." 
              />
              <FaqItem 
                question="Is this just a wrapper around GPT-4?" 
                answer="No. AetherSync is a fundamentally different architecture from standard chat interfaces. It features a continuous feedback loop where the agent can run terminal commands (like npm run build or cargo test), read the console output, and autonomously correct its own code before presenting it to you." 
              />
            </section>

          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
