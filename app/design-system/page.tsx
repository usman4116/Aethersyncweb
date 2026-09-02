import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Eyebrow } from '@/components/ui/Eyebrow';

export const metadata = {
  title: 'Design System | AetherSync',
  description:
    'The AetherSync design language: colour tokens, type scale, elevation, motion and component primitives.',
  robots: { index: false, follow: false },
};

const swatches = [
  { name: 'background', cls: 'bg-background', note: 'Page ground' },
  { name: 'surface', cls: 'bg-surface', note: 'Panels & cards' },
  { name: 'surface-elevated', cls: 'bg-surface-elevated', note: 'Raised chrome' },
  { name: 'surface-hover', cls: 'bg-surface-hover', note: 'Interactive hover' },
  { name: 'primary', cls: 'bg-primary', note: 'Ember accent' },
  { name: 'primary-hover', cls: 'bg-primary-hover', note: 'Accent hover' },
  { name: 'accent', cls: 'bg-accent', note: 'Informational' },
  { name: 'success', cls: 'bg-success', note: 'Passing state' },
  { name: 'warning', cls: 'bg-warning', note: 'Caution state' },
  { name: 'error', cls: 'bg-error', note: 'Failure state' },
];

const textTokens = [
  { name: 'foreground', cls: 'text-foreground' },
  { name: 'text-secondary', cls: 'text-text-secondary' },
  { name: 'muted', cls: 'text-muted' },
  { name: 'primary', cls: 'text-primary' },
];

const typeScale = [
  { name: 'display-lg', cls: 'text-display-lg' },
  { name: 'display', cls: 'text-display' },
  { name: 'display-sm', cls: 'text-display-sm' },
  { name: 'heading', cls: 'text-heading' },
  { name: 'heading-sm', cls: 'text-heading-sm' },
  { name: 'body-lg', cls: 'text-body-lg' },
  { name: 'body', cls: 'text-body' },
  { name: 'label', cls: 'text-label' },
  { name: 'micro', cls: 'text-micro' },
];

export default function DesignSystemPage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <Navbar />

      <main>
        <PageHeader
          eyebrow="Internal reference"
          title="The AetherSync design language."
          description="One token layer, one card treatment, one button language and one motion curve — the primitives every page on this site is built from."
        />

        {/* Colour */}
        <Section>
          <Eyebrow rule>Colour tokens</Eyebrow>
          <h2 className="mt-4 font-display text-heading font-semibold">Surfaces &amp; states</h2>
          <p className="mt-3 max-w-prose text-[0.875rem] leading-relaxed text-text-secondary">
            Every colour is a CSS custom property holding bare RGB channels, so Tailwind opacity
            modifiers work and the <code className="font-mono text-primary">.light</code> theme is a
            pure token swap.
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {swatches.map((s) => (
              <div key={s.name} className="bg-surface/45 p-5">
                <div className={`h-16 rounded-lg border border-border ${s.cls}`} aria-hidden />
                <p className="mt-3 font-mono text-micro text-foreground">{s.name}</p>
                <p className="mt-0.5 text-micro text-muted">{s.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3 rounded-xl border border-border bg-surface/45 p-6">
            {textTokens.map((t) => (
              <p key={t.name} className={`text-label ${t.cls}`}>
                <span className="font-mono">{t.name}</span> — the quick brown fox
              </p>
            ))}
          </div>
        </Section>

        {/* Type */}
        <Section className="border-t border-border">
          <Eyebrow rule>Typography</Eyebrow>
          <h2 className="mt-4 font-display text-heading font-semibold">Fluid type scale</h2>
          <p className="mt-3 max-w-prose text-[0.875rem] leading-relaxed text-text-secondary">
            Every step is a <code className="font-mono text-primary">clamp()</code>, so headings
            scale with the viewport without breakpoint jumps. Display faces use Plus Jakarta Sans;
            code uses JetBrains Mono.
          </p>

          <div className="mt-10 divide-y divide-border rounded-xl border border-border bg-surface/45">
            {typeScale.map((t) => (
              <div key={t.name} className="flex flex-wrap items-baseline justify-between gap-4 p-6">
                <span className={`${t.cls} font-display font-semibold text-foreground`}>
                  Autonomous engineering
                </span>
                <span className="font-mono text-micro text-muted">{t.name}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Buttons */}
        <Section className="border-t border-border">
          <Eyebrow rule>Primitives</Eyebrow>
          <h2 className="mt-4 font-display text-heading font-semibold">Buttons</h2>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <span className="rounded-lg bg-surface-elevated p-3">
              <Button variant="glass">Glass</Button>
            </span>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
          </div>

          <h3 className="mt-14 font-display text-heading-sm font-semibold">Cards</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card variant="flat" className="p-6">
              <h4 className="text-[0.9375rem] font-semibold">Flat</h4>
              <p className="mt-2 text-label text-text-secondary">
                Hairline border on a translucent surface. The default.
              </p>
            </Card>
            <Card variant="elevated" className="p-6">
              <h4 className="text-[0.9375rem] font-semibold">Elevated</h4>
              <p className="mt-2 text-label text-text-secondary">
                Raised surface with the panel shadow, for floating chrome.
              </p>
            </Card>
            <Card variant="glass" interactive className="p-6">
              <h4 className="text-[0.9375rem] font-semibold">Glass, interactive</h4>
              <p className="mt-2 text-label text-text-secondary">
                Used sparingly — overlays only, never as a page-wide texture.
              </p>
            </Card>
          </div>

          <h3 className="mt-14 font-display text-heading-sm font-semibold">Badges &amp; inputs</h3>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
          </div>

          <div className="mt-6 max-w-sm space-y-3">
            <Input placeholder="Default input..." aria-label="Default input" />
            <Input placeholder="Invalid input..." error aria-label="Invalid input" />
          </div>
        </Section>

        {/* Motion */}
        <Section className="border-t border-border">
          <Eyebrow rule>Motion</Eyebrow>
          <h2 className="mt-4 font-display text-heading font-semibold">One curve, short durations</h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {[
              ['ease-cine', 'cubic-bezier(0.16, 1, 0.3, 1)', 'Every transition and reveal'],
              ['200ms', 'Interactive states', 'Hover, focus, colour changes'],
              ['reduced-motion', 'Fully honoured', 'Reveals resolve instantly'],
            ].map(([k, v, note]) => (
              <div key={k} className="bg-surface/45 p-6">
                <p className="font-mono text-micro text-primary">{k}</p>
                <p className="mt-2 text-[0.9375rem] font-medium text-foreground">{v}</p>
                <p className="mt-1.5 text-label text-text-secondary">{note}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
