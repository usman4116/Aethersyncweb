import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AetherSync AI | The Autonomous AI IDE & Coding Agent',
  description:
    'AetherSync AI (AetherSync IDE) is a high-performance, local-first autonomous AI code editor and agent workspace. Powered by Claude 3.7, GPT-4o, DeepSeek R1 & Ollama.',
  keywords: [
    'aethersync ide',
    'aethersync AI',
    'aethersync',
    'aethersync desktop',
    'autonomous coding agent',
    'AI code editor',
    'local first AI IDE',
    'Claude 3.7 coding IDE',
    'DeepSeek R1 coding desktop',
    'AI developer tools',
  ],
  authors: [{ name: 'AetherSync Team', url: 'https://www.ai.theaethersync.com' }],
  creator: 'AetherSync',
  publisher: 'AetherSync',
  metadataBase: new URL('https://www.ai.theaethersync.com'),
  alternates: {
    canonical: 'https://www.ai.theaethersync.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ai.theaethersync.com',
    siteName: 'AetherSync AI',
    title: 'AetherSync AI | Autonomous AI Coding Agent & IDE',
    description:
      'Experience the future of autonomous software engineering. Local-first privacy, multi-model intelligence, and full-stack terminal agency.',
    images: [
      {
        url: 'https://www.ai.theaethersync.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AetherSync Desktop AI IDE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AetherSync AI | Autonomous AI Coding Agent & IDE',
    description:
      'Local-first autonomous AI code editor. Multi-file edits, terminal execution, and Claude 3.7 / GPT-4o / DeepSeek integration.',
    creator: '@aethersync',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AetherSync AI IDE',
    operatingSystem: 'Windows 10, Windows 11, macOS, Linux',
    applicationCategory: 'DeveloperApplication',
    description:
      'AetherSync AI is a next-generation autonomous AI coding agent and integrated development environment (IDE).',
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
    },
    url: 'https://www.ai.theaethersync.com',
    softwareVersion: '0.1.0',
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
