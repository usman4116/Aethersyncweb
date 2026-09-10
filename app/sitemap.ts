import type { MetadataRoute } from 'next';
import { absoluteUrl, INDEXABLE_ROUTES } from '@/lib/site';

/**
 * Generated from `INDEXABLE_ROUTES`, so a new page under `app/` is listed the
 * moment it is registered in `lib/site.ts` — and pages marked `noindex` there
 * (the internal design system) are excluded automatically rather than by hand.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return INDEXABLE_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
