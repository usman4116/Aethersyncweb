import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LivePreview } from '@/components/LivePreview';
import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { ThemedShot } from '@/components/ui/ShotFrame';

export const metadata = {
  title: 'Live Preview — Try the IDE in Your Browser',
  description:
    'Test drive the AetherSync AI workspace without installing anything: browse the file tree, switch editor tabs, run terminal commands and prompt the autonomous agent.',
  keywords: [
    'AetherSync IDE preview',
    'AetherSync AI demo',
    'try AI IDE online',
    'AI code editor demo',
  ],
  openGraph: {
    title: 'Live Preview — Try the AetherSync IDE Workspace in Your Browser',
    description: 'Test drive the AetherSync AI workspace without installing anything: browse the file tree, switch editor tabs, run terminal commands and prompt the autonomous agent.',
    url: '/preview',
    type: 'website',
  },
  alternates: { canonical: '/preview' },
};

const DOWNLOAD_LINK =
  'https://github.com/usman4116/Async-Login/releases/latest/download/AetherSync-Desktop-0.1.0-x64.exe';

export default function PreviewPage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <Navbar />

      <main>
        <PageHeader
          eyebrow="Full interactive demo"
          title="Test drive the AetherSync workspace."
          description="Interact with the Monaco-style editor, the terminal runner and the agent copilot directly in this live simulation — no install required."
          actions={
            <>
              <a href={DOWNLOAD_LINK} download>
                <Button size="lg">
                  <Download size={16} /> Download the desktop app
                </Button>
              </a>
              <Link href="/docs">
                <Button size="lg" variant="outline">
                  Read the docs
                  <ArrowRight size={15} />
                </Button>
              </Link>
            </>
          }
        />

        {/* The genuine article first — then the in-browser simulation of it. */}
        <Section spacing="tight">
          <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:items-center lg:gap-14">
            <ThemedShot
              darkSrc="/shots/workspace-dark.webp"
              lightSrc="/shots/workspace-light.webp"
              alt="AetherSync IDE workspace: file explorer, Monaco editor, integrated terminal and the docked AI assistant"
              caption="AetherSync Desktop 0.1.0 — IDE Workspace, both shipped themes"
              sizes="(min-width: 1024px) 62vw, 100vw"
              eager
              glow
            />
            <div>
              <h2 className="text-heading font-semibold text-foreground">
                What the desktop build actually looks like.
              </h2>
              <p className="mt-4 text-body text-text-secondary">
                Explorer, editor, terminal and assistant in one window — that is a capture of
                the shipped 0.1.0 application, not a render. The simulation below reproduces its
                behaviour closely enough to try, but the real thing is a 95 MB download away.
              </p>
              <ul className="mt-7 space-y-px overflow-hidden rounded-lg border border-border bg-border">
                {[
                  'Monaco editor with real language services',
                  'Attached bash session, not a transcript',
                  'Assistant docked to the file you are in',
                ].map((line) => (
                  <li
                    key={line}
                    className="flex items-center gap-3 bg-background-secondary/80 px-4 py-3 text-label text-text-secondary"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <LivePreview />

        <Section spacing="tight">
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-border bg-surface/45 p-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-heading-sm font-semibold text-foreground">
                Ready for the native desktop application?
              </h2>
              <p className="mt-2 max-w-prose text-[0.875rem] text-text-secondary">
                The standalone installer needs no configuration — open a folder and start working.
              </p>
            </div>
            <a href={DOWNLOAD_LINK} download className="shrink-0">
              <Button size="lg">
                <Download size={16} /> AetherSync Desktop (.exe)
              </Button>
            </a>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
