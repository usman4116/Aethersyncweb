import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Download, CheckCircle2, ShieldCheck, Terminal, Globe, Sparkles, Cpu, Zap } from 'lucide-react';

export const metadata = {
  title: 'Download AetherSync Desktop | Windows & Linux (x64)',
  description: 'Download the official AetherSync AI Desktop application for Windows and Linux. Local-first autonomous coding agent and IDE.',
};

const WIN_DOWNLOAD =
  'https://github.com/usman4116/Async-Login/releases/latest/download/AetherSync-Desktop-0.1.0-x64.exe';
const LINUX_TAR_DOWNLOAD =
  'https://github.com/usman4116/Async-Login/releases/latest/download/AetherSync-Desktop-0.1.0-linux-x64.tar.gz';
const LINUX_ZIP_DOWNLOAD =
  'https://github.com/usman4116/Async-Login/releases/latest/download/AetherSync-Desktop-0.1.0-linux-x64.zip';

export default function DownloadPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="glow-orb top-24 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-primary/15" />
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold mb-4">
          <Download size={13} />
          <span>Official Distribution Builds (v0.1.0)</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-foreground leading-tight">
          Download <span className="text-primary">AetherSync Desktop</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Get the autonomous AI IDE on your workstation. Choose your operating system below.
        </p>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-text-secondary">
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-green-500" />
            <span>Signed Binary</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap size={14} className="text-primary" />
            <span>Zero Telemetry</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Globe size={14} className="text-primary" />
            <span>Works Offline</span>
          </div>
        </div>
      </section>

      {/* Platform Download Cards */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Windows Card */}
        <div className="aether-card rounded-2xl p-8 border-2 border-primary/40 relative overflow-hidden flex flex-col justify-between">
          {/* Recommended Badge */}
          <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-xl bg-primary text-foreground text-[10px] font-bold uppercase tracking-wider">
            Recommended
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 text-primary flex items-center justify-center">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 88 88">
                  <path d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48.016 45.728zm4.326-39.027L87.914 0v41.525l-47.918.278zm47.918 39.566l-.004 41.53-47.918-6.743V45.728z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Windows</h3>
                <p className="text-xs text-muted">Windows 10, 11 (64-bit)</p>
              </div>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed mb-5">
              Standalone NSIS setup executable. Automatically configures desktop shortcuts and registers the deep-linking protocol.
            </p>

            <div className="space-y-2.5 mb-6">
              <div className="flex items-center gap-2 text-xs text-text-secondary">
                <CheckCircle2 size={13} className="text-green-500 shrink-0" />
                <span>One-click setup wizard with EULA</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-secondary">
                <CheckCircle2 size={13} className="text-green-500 shrink-0" />
                <span>Integrated Windows PowerShell &amp; CMD</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-secondary">
                <CheckCircle2 size={13} className="text-green-500 shrink-0" />
                <span>Auto-updates via built-in updater</span>
              </div>
            </div>
          </div>

          <a
            href={WIN_DOWNLOAD}
            download
            className="w-full py-4 rounded-xl bg-primary text-foreground font-bold text-sm text-center flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all"
          >
            <Download size={15} />
            <span>Download for Windows</span>
            <span className="ml-1 text-xs font-mono font-normal opacity-80 bg-black/20 px-2 py-0.5 rounded-md">.exe • 95 MB</span>
          </a>
        </div>

        {/* Linux Card */}
        <div className="aether-card rounded-2xl p-8 border border-border relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 text-primary flex items-center justify-center">
                <Terminal size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Linux</h3>
                <p className="text-xs text-muted">Ubuntu, Debian, Fedora, Arch (64-bit)</p>
              </div>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed mb-5">
              Portable standalone distribution archive. Extract and launch the executable directly on any modern Linux distribution.
            </p>

            <div className="space-y-2.5 mb-6">
              <div className="flex items-center gap-2 text-xs text-text-secondary">
                <CheckCircle2 size={13} className="text-green-500 shrink-0" />
                <span>Works on all system glibc distributions</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-secondary">
                <CheckCircle2 size={13} className="text-green-500 shrink-0" />
                <span>Native Bash &amp; Zsh terminal integration</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-secondary">
                <CheckCircle2 size={13} className="text-green-500 shrink-0" />
                <span>No root privileges required</span>
              </div>
            </div>
          </div>

          <div className="space-y-2.5">
            <a
              href={LINUX_TAR_DOWNLOAD}
              download
              className="w-full py-3.5 rounded-xl bg-surface-elevated border border-primary/30 text-primary font-bold text-sm text-center flex items-center justify-center gap-2 hover:bg-primary hover:text-foreground transition-all"
            >
              <Download size={15} />
              <span>Download .tar.gz</span>
              <span className="text-xs font-mono font-normal opacity-80">115 MB</span>
            </a>
            <a
              href={LINUX_ZIP_DOWNLOAD}
              download
              className="w-full py-2.5 rounded-xl text-muted hover:text-foreground text-xs font-medium text-center flex items-center justify-center gap-1.5 border border-border hover:border-primary/30 transition-all"
            >
              <Download size={13} />
              <span>Download as .zip (Alternative)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Linux Quick Launch */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="aether-card rounded-2xl p-6 border border-border">
          <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
            <Terminal size={14} className="text-primary" /> Linux Quick Launch
          </h4>
          <div className="p-4 rounded-xl bg-surface border border-border font-mono text-xs space-y-1">
            <p className="text-muted"># Extract archive</p>
            <p className="text-primary">tar -xzf AetherSync-Desktop-0.1.0-linux-x64.tar.gz</p>
            <p className="text-muted mt-2"># Run executable</p>
            <p className="text-primary">cd linux-unpacked && ./aethersync-desktop</p>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h3 className="text-lg font-bold text-foreground mb-4 text-center flex items-center justify-center gap-2">
          <Cpu size={18} className="text-primary" /> System Requirements
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="aether-card rounded-xl p-5 text-center">
            <p className="text-xs font-bold uppercase text-muted tracking-wider mb-2">Processor</p>
            <p className="text-sm font-semibold text-foreground">x64 / AMD64</p>
            <p className="text-[11px] text-text-secondary mt-1">Intel Core i5+ / AMD Ryzen 5+</p>
          </div>
          <div className="aether-card rounded-xl p-5 text-center">
            <p className="text-xs font-bold uppercase text-muted tracking-wider mb-2">Memory</p>
            <p className="text-sm font-semibold text-foreground">4 GB RAM</p>
            <p className="text-[11px] text-text-secondary mt-1">8 GB recommended for local LLMs</p>
          </div>
          <div className="aether-card rounded-xl p-5 text-center">
            <p className="text-xs font-bold uppercase text-muted tracking-wider mb-2">Disk Space</p>
            <p className="text-sm font-semibold text-foreground">500 MB</p>
            <p className="text-[11px] text-text-secondary mt-1">+ model storage if using Ollama</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
