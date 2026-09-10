import type { MetadataRoute } from 'next';
import { absoluteUrl, SITE_URL } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        /**
         * Nothing is disallowed on purpose. `/design-system` is kept out of the
         * index by its `noindex` meta tag instead — a `Disallow` here would
         * stop crawlers fetching the page at all, so they would never see that
         * tag, and the URL could still surface as a bare, description-less
         * result. Crawlable-but-noindex is the directive that actually works.
         */
        disallow: [],
      },
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: SITE_URL,
  };
}
