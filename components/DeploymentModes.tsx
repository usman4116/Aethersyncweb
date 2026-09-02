import { Cloud, KeyRound, Laptop } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';

const modes = [
  {
    icon: Laptop,
    name: 'Local-first',
    tagline: 'The default',
    desc: 'The editor, the agent runtime and the terminal all execute on your machine. Workspace state is written to disk, not to a server.',
    facts: ['No code upload', 'No account required to edit', 'Works on a plane'],
  },
  {
    icon: KeyRound,
    name: 'Bring your own keys',
    tagline: 'Frontier models',
    desc: 'Provider credentials are stored in the OS keyring and used to call the provider directly. Requests are not proxied, rate-limited or logged by us.',
    facts: ['Direct provider calls', 'Keys encrypted at rest', 'No per-seat markup'],
  },
  {
    icon: Cloud,
    name: 'Fully offline',
    tagline: 'Air-gapped',
    desc: 'Point AetherSync at Ollama or Jan and it runs with no outbound network at all — the same agent loop against a model on your own GPU.',
    facts: ['Ollama & Jan endpoints', 'Zero egress', 'Regulated-environment ready'],
  },
];

/** Privacy expressed as three concrete deployment modes rather than a slogan. */
export function DeploymentModes() {
  return (
    <Section id="deployment" className="border-b border-border">
      <SectionHeader
        eyebrow="Deployment"
        title="Three ways to run it. All of them yours."
        description="Privacy is an architecture decision, not a setting. Pick the mode that matches your threat model — the product behaves the same in each."
      />

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {modes.map((m, i) => (
          <Reveal key={m.name} delay={i * 70}>
            <div className="flex h-full flex-col rounded-xl border border-border bg-surface/45 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-primary">
                  <m.icon size={16} />
                </span>
                <div>
                  <h3 className="font-display text-[1rem] font-semibold text-foreground">
                    {m.name}
                  </h3>
                  <p className="text-micro uppercase tracking-[0.18em] text-muted">{m.tagline}</p>
                </div>
              </div>

              <p className="mt-5 text-[0.875rem] leading-relaxed text-text-secondary">{m.desc}</p>

              <ul className="mt-6 flex flex-col gap-2 border-t border-border pt-5">
                {m.facts.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-label text-muted">
                    <span className="h-1 w-1 rounded-full bg-primary" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
