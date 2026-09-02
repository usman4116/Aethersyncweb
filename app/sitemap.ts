import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.ai.aethersync.com';

/** Static route map — update alongside any new route under `app/`. */
const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/download', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/features', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/preview', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/providers', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/docs', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.5, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
