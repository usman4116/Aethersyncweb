import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation — Install, Configure & Prompt',
  description:
    'Official AetherSync IDE documentation: quickstart, advanced Linux CLI installation, agent prompting practices, keyboard shortcuts and FAQs for AetherSync AI.',
  keywords: [
    'AetherSync IDE documentation',
    'AetherSync AI docs',
    'AetherSync install guide',
    'AI agent prompting guide',
    'AetherSync keyboard shortcuts',
  ],
  openGraph: {
    title: 'AetherSync IDE Documentation — Install, Configure & Prompt',
    description:
      'Everything required to run the AetherSync AI autonomous coding environment locally, from a first install to advanced agent prompting.',
    url: '/docs',
    type: 'article',
  },
  alternates: { canonical: '/docs' },
};

/**
 * FAQPage structured data mirrors the accordion in `page.tsx`. Kept here (a
 * server component) so the markup is in the static HTML for crawlers.
 */
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where are my API keys stored?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "AetherSync is entirely local-first. Your API keys are encrypted and stored exclusively in your operating system's native keychain (Windows Credential Manager, macOS Keychain, or libsecret). They are never transmitted to our servers.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does AetherSync collect telemetry or my code data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. AetherSync has a strict zero telemetry on code policy. We do not track keystrokes, upload source code, or train models on your proprietary data. Your code only reaches the LLM provider you explicitly select.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use local models completely offline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Selecting the Ollama or LM Studio provider routes all agent logic to your localhost port, allowing fully air-gapped autonomous coding with no API cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AetherSync just a wrapper around GPT-4?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. AetherSync runs a continuous feedback loop: the agent executes terminal commands such as npm run build or cargo test, reads the console output, and corrects its own code before presenting a diff.',
      },
    },
  ],
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
