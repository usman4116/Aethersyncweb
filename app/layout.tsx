import type { Metadata, Viewport } from 'next';
import './globals.css';
import { CinematicBackdrop } from '@/components/layout/CinematicBackdrop';
import { FilmGrain } from '@/components/layout/FilmGrain';
import {
  absoluteUrl,
  GITHUB_URL,
  GROUP_URL,
  INDEXABLE_ROUTES,
  ORG_NAME,
  PRODUCT_NAME,
  SITE_NAME,
  SITE_URL,
} from '@/lib/site';

export const metadata: Metadata = {
  title: {
    default: 'AetherSync IDE — Autonomous AI Code Editor | AetherSync AI',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'AetherSync IDE (AetherSync AI) is a local-first autonomous AI code editor and coding agent. Multi-file refactors, a sandboxed terminal, and Claude, GPT-4o, DeepSeek R1 or local Ollama models — your source code never leaves your machine.',
  applicationName: PRODUCT_NAME,
  keywords: [
    'AetherSync IDE',
    'AetherSync AI',
    'AetherSync',
    'Aethersync IDE',
    'Aethersync AI',
    'AetherSync AI IDE',
    'AetherSync Desktop',
    'AetherSync code editor',
    'AetherSync Technology',
    'autonomous AI coding agent',
    'AI code editor',
    'local first AI IDE',
    'AI IDE with terminal',
    'Claude coding IDE',
    'GPT-4o code editor',
    'DeepSeek R1 coding desktop',
    'Ollama local AI IDE',
    'offline AI coding assistant',
    'AI developer tools',
  ],
  category: 'technology',
  authors: [{ name: 'AetherSync Team', url: SITE_URL }],
  creator: ORG_NAME,
  publisher: ORG_NAME,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'AetherSync IDE — The Autonomous AI Code Editor',
    description:
      'AetherSync AI pairs an autonomous coding agent with a local-first IDE: multi-file edits, a sandboxed terminal, and your choice of frontier or local models.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aethersync',
    creator: '@aethersync',
    title: 'AetherSync IDE — The Autonomous AI Code Editor',
    description:
      'Local-first autonomous AI IDE. Multi-file refactors, sandboxed terminal execution, and Claude / GPT-4o / DeepSeek / Ollama support.',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#07080f' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

/**
 * Applied before first paint so a saved light theme never flashes dark.
 * Mirrors the toggle in `ThemeToggle` — both read `aether-theme`.
 */
const themeBootstrap = `(function(){try{var t=localStorage.getItem('aether-theme');if(t==='light'){document.documentElement.classList.add('light')}else if(!t&&window.matchMedia('(prefers-color-scheme: light)').matches){document.documentElement.classList.add('light')}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /**
   * Site-wide structured data. `@graph` keeps the entities cross-referenced so
   * Google resolves the app, the publisher and the site as one knowledge unit
   * rather than several unrelated blobs.
   *
   * `SiteNavigationElement` publishes the same hierarchy the header renders —
   * it is the machine-readable half of the signal that earns search sitelinks.
   */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${SITE_URL}/#software`,
        name: PRODUCT_NAME,
        alternateName: [
          'AetherSync AI',
          'AetherSync',
          'Aethersync IDE',
          'AetherSync AI IDE',
          'AetherSync Desktop',
        ],
        operatingSystem: 'Windows 10, Windows 11, Linux',
        applicationCategory: 'DeveloperApplication',
        applicationSubCategory: 'Integrated Development Environment',
        description:
          'AetherSync IDE is a local-first autonomous AI coding agent and integrated development environment with multi-file refactoring, a sandboxed terminal and multi-provider model support.',
        url: SITE_URL,
        downloadUrl: absoluteUrl('/download'),
        softwareVersion: '0.1.0',
        featureList: [
          'Autonomous multi-file refactoring agent',
          'Sandboxed PTY terminal execution',
          'Monaco-based code editor',
          'Multi-provider model switching',
          'Fully offline local inference via Ollama',
          'Zero telemetry on source code',
        ],
        offers: {
          '@type': 'Offer',
          price: '0.00',
          priceCurrency: 'USD',
        },
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'AetherSync',
        legalName: ORG_NAME,
        alternateName: ['AetherSync Technology', 'Aethersync', 'AetherSync AI'],
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          '@id': `${SITE_URL}/#logo`,
          url: absoluteUrl('/aethersync-mark.png'),
          contentUrl: absoluteUrl('/aethersync-mark.png'),
          caption: 'AetherSync',
        },
        image: { '@id': `${SITE_URL}/#logo` },
        description:
          'AetherSync Technology builds AetherSync IDE and AetherSync AI — local-first autonomous developer platforms.',
        founder: {
          '@type': 'Person',
          name: 'Muhammad Usman Farhan',
          jobTitle: 'Founder & CEO',
          url: absoluteUrl('/about'),
        },
        foundingLocation: {
          '@type': 'Place',
          address: { '@type': 'PostalAddress', addressCountry: 'PK' },
        },
        sameAs: [
          GITHUB_URL,
          GROUP_URL,
          'https://x.com/aethersync',
          'https://www.linkedin.com/company/aethersync',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: SITE_NAME,
        alternateName: ['AetherSync IDE', 'Aethersync AI'],
        url: SITE_URL,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-US',
      },
      ...INDEXABLE_ROUTES.filter((route) => route.path !== '/').map((route) => ({
        '@type': 'SiteNavigationElement',
        '@id': `${SITE_URL}/#nav-${route.path.replace(/\//g, '')}`,
        name: route.label,
        description: route.blurb,
        url: absoluteUrl(route.path),
        isPartOf: { '@id': `${SITE_URL}/#website` },
      })),
    ],
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
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {/* The photographed space every route sits inside */}
        <CinematicBackdrop />
        {children}
        <FilmGrain />
      </body>
    </html>
  );
}
