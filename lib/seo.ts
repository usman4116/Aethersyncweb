import type { Metadata } from 'next';
import { absoluteUrl, getRoute, SITE_NAME } from './site';

export interface PageSeoInput {
  /** Route this metadata belongs to, e.g. `/features`. */
  path: string;
  /** Goes through the `%s | AetherSync AI` template in the root layout. */
  title: string;
  description: string;
  keywords?: string[];
  /** Overrides `title` for social cards, where there is room for a fuller line. */
  ogTitle?: string;
  type?: 'website' | 'article';
}

/**
 * Builds a page's `Metadata` with the canonical, Open Graph and Twitter fields
 * derived from one path.
 *
 * Centralising this is the point: the previous per-page literals let the
 * canonical, the OG `url` and the sitemap drift apart, and a canonical pointing
 * somewhere the sitemap does not list is a self-inflicted deindexing.
 */
export function buildMetadata({
  path,
  title,
  description,
  keywords,
  ogTitle,
  type = 'website',
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path);
  const noindex = getRoute(path)?.noindex ?? false;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      title: ogTitle ?? `${title} | ${SITE_NAME}`,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle ?? `${title} | ${SITE_NAME}`,
      description,
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

/**
 * `WebPage` node tying a page to the site-wide `WebSite`, `Organization` and
 * its own `BreadcrumbList`, so the graph resolves as one connected entity
 * instead of a scatter of orphan nodes.
 */
export function webPageJsonLd({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}): Record<string, unknown> {
  const url = absoluteUrl(path);

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': `${absoluteUrl('/')}#website` },
    about: { '@id': `${absoluteUrl('/')}#software` },
    publisher: { '@id': `${absoluteUrl('/')}#organization` },
    breadcrumb: { '@id': `${url}#breadcrumb` },
    inLanguage: 'en-US',
  };
}
