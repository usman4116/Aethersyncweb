import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { Check, Download, Globe, ShieldCheck, Terminal, Zap } from 'lucide-react';

export const metadata = {
  title: 'Download AetherSync IDE for Windows & Linux',
  description:
    'Download AetherSync AI Desktop v0.1.0 free for Windows 10/11 and Linux (x64). A local-first autonomous AI coding agent and IDE — signed binaries, zero telemetry, works offline.',
  keywords: [
    'download AetherSync IDE',
    'AetherSync AI download',
    'AetherSync Desktop',
    'AI code editor download',
    'free AI IDE Windows',
    'AI IDE Linux',
  ],
  openGraph: {
    title: 'Download AetherSync IDE — Free AI Code Editor for Windows & Linux',
    description: 'Download AetherSync AI Desktop v0.1.0 free for Windows 10/11 and Linux (x64). A local-first autonomous AI coding agent and IDE — signed binaries, zero telemetry, works offline.',
    url: '/download',
    type: 'website',
  },
  alternates: { canonical: '/download' },
};

const WIN_DOWNLOAD =
  'https://github.com/usman4116/Async-Login/releases/latest/download/AetherSync-Desktop-0.1.0-x64.exe';
const LINUX_TAR_DOWNLOAD =
  'https://github.com/usman4116/Async-Login/releases/latest/download/AetherSync-Desktop-0.1.0-linux-x64.tar.gz';
const LINUX_ZIP_DOWNLOAD =
  'https://github.com/usman4116/Async-Login/releases/latest/download/AetherSync-Desktop-0.1.0-linux-x64.zip';

const trust = [
  { icon: ShieldCheck, label: 'Signed binary' },
  { icon: Zap, label: 'Zero telemetry' },
  { icon: Globe, label: 'Works offline' },
];

const winFeatures = [
  'One-click setup wizard with EULA',
  'Integrated PowerShell & CMD',
  'Auto-updates via built-in updater',
];

const linuxFeatures = [
  'Works on all system glibc distributions',
  'Native Bash & Zsh terminal integration',
  'No root privileges required',
];

const requirements = [
  { label: 'Processor', value: 'x64 / AMD64', note: 'Intel Core i5+ / AMD Ryzen 5+' },
  { label: 'Memory', value: '4 GB RAM', note: '8 GB recommended for local LLMs' },
  { label: 'Disk space', value: '500 MB', note: '+ model storage if using Ollama' },
];

export default function DownloadPage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <Navbar />

      <main>
        <PageHeader
          eyebrow="Official distribution builds — v0.1.0"
          title="Download AetherSync Desktop."
          description="Run the autonomous AI IDE on your own workstation. Pick your operating system below."
          actions={
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {trust.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-label text-text-secondary">
                  <Icon size={14} className="text-primary" aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
          }
        />

        <Section>
          <div className="grid gap-4 md:grid-cols-2">
            {/* Windows */}
            <Reveal>
              <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-primary/30 bg-surface/45 p-8">
                <span className="absolute right-0 top-0 rounded-bl-lg bg-primary px-3 py-1.5 text-micro font-semibold uppercase tracking-wider text-primary-fg">
                  Recommended
                </span>

                <div>
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-primary">
                      <svg className="h-5 w-5 fill-current" viewBox="0 0 88 88" aria-hidden>
                        <path d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48.016 45.728zm4.326-39.027L87.914 0v41.525l-47.918.278zm47.918 39.566l-.004 41.53-47.918-6.743V45.728z" />
                      </svg>
                    </span>
                    <div>
                      <h2 className="font-display text-body-lg font-semibold text-foreground">Windows</h2>
                      <p className="text-micro text-muted">Windows 10, 11 (64-bit)</p>
                    </div>
                  </div>

                  <p className="mt-6 text-[0.875rem] leading-relaxed text-text-secondary">
                    Standalone NSIS setup executable. Configures desktop shortcuts and registers the
                    deep-linking protocol automatically.
                  </p>

                  <ul className="mt-6 flex flex-col gap-2.5 border-t border-border pt-6">
                    {winFeatures.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-label text-text-secondary">
                        <Check size={14} className="mt-px shrink-0 text-primary" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={WIN_DOWNLOAD}
                  download
                  className="mt-8 flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-label font-semibold text-primary-fg transition-colors duration-200 ease-cine hover:bg-primary-hover active:translate-y-px"
                >
                  <Download size={15} aria-hidden />
                  Download for Windows
                  <span className="font-mono text-micro font-normal opacity-70">.exe • 95 MB</span>
                </a>
              </article>
            </Reveal>

            {/* Linux */}
            <Reveal delay={60}>
              <article className="flex h-full flex-col justify-between rounded-xl border border-border bg-surface/45 p-8">
                <div>
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-primary">
                      <Terminal size={20} aria-hidden />
                    </span>
                    <div>
                      <h2 className="font-display text-body-lg font-semibold text-foreground">Linux</h2>
                      <p className="text-micro text-muted">Ubuntu, Debian, Fedora, Arch (64-bit)</p>
                    </div>
                  </div>

                  <p className="mt-6 text-[0.875rem] leading-relaxed text-text-secondary">
                    Portable distribution archive. Extract and launch the executable directly on any
                    modern Linux distribution.
                  </p>

                  <ul className="mt-6 flex flex-col gap-2.5 border-t border-border pt-6">
                    {linuxFeatures.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-label text-text-secondary">
                        <Check size={14} className="mt-px shrink-0 text-primary" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 space-y-2.5">
                  <a
                    href={LINUX_TAR_DOWNLOAD}
                    download
                    className="flex h-12 items-center justify-center gap-2 rounded-lg border border-border-strong px-6 text-label font-semibold text-foreground transition-colors duration-200 ease-cine hover:border-primary/50 hover:text-primary active:translate-y-px"
                  >
                    <Download size={15} aria-hidden />
                    Download .tar.gz
                    <span className="font-mono text-micro font-normal text-muted">115 MB</span>
                  </a>
                  <a
                    href={LINUX_ZIP_DOWNLOAD}
                    download
                    className="flex h-10 items-center justify-center gap-1.5 rounded-lg text-micro font-medium text-muted transition-colors duration-200 ease-cine hover:text-foreground"
                  >
                    <Download size={13} aria-hidden />
                    Download as .zip (alternative)
                  </a>
                </div>
              </article>
            </Reveal>
          </div>
        </Section>

        <Section spacing="tight" className="border-t border-border">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <span className="kicker">Linux quick launch</span>
              <h2 className="mt-3 font-display text-heading font-semibold text-foreground">
                Extract, then run.
              </h2>
              <p className="mt-3 max-w-prose text-[0.875rem] leading-relaxed text-text-secondary">
                No installer, no root. The archive unpacks to a self-contained directory.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-border bg-surface">
              <div className="flex items-center gap-2 border-b border-border bg-background px-4 py-2.5">
                <Terminal size={13} className="text-primary" aria-hidden />
                <span className="font-mono text-micro uppercase tracking-wider text-muted">bash</span>
              </div>
              <pre className="overflow-x-auto p-4 font-mono text-label leading-relaxed">
                <code>
                  <span className="text-muted"># Extract archive</span>
                  {'\n'}
                  <span className="text-text-secondary">
                    tar -xzf AetherSync-Desktop-0.1.0-linux-x64.tar.gz
                  </span>
                  {'\n\n'}
                  <span className="text-muted"># Run executable</span>
                  {'\n'}
                  <span className="text-text-secondary">
                    cd linux-unpacked &amp;&amp; ./aethersync-desktop
                  </span>
                </code>
              </pre>
            </div>
          </div>
        </Section>

        <Section className="border-t border-border">
          <SectionHeader
            eyebrow="Before you install"
            title="System requirements."
            description="AetherSync runs comfortably on standard developer hardware; local model inference is the only demanding path."
          />

          <dl className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {requirements.map((r) => (
              <div key={r.label} className="bg-surface/45 p-7">
                <dt className="kicker">{r.label}</dt>
                <dd className="mt-3 font-display text-heading-sm font-semibold text-foreground">
                  {r.value}
                </dd>
                <dd className="mt-1.5 text-label text-text-secondary">{r.note}</dd>
              </div>
            ))}
          </dl>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
