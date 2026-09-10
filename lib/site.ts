/**
 * Single source of truth for anything that has to agree across the site:
 * the canonical origin, the navigation hierarchy, breadcrumb trails and the
 * copy reused by nav menus, footer columns and related-link cards.
 *
 * Search engines reward consistency — the same label for the same page in the
 * header, the footer, the breadcrumb and the structured data — so every one of
 * those surfaces reads from `ROUTES` below rather than keeping its own list.
 */

/** Canonical origin. No trailing slash, no `www` — this is the served host. */
export const SITE_URL = 'https://ai.theaethersync.com';

export const SITE_NAME = 'AetherSync AI';
export const PRODUCT_NAME = 'AetherSync IDE';
export const ORG_NAME = 'AetherSync Technology';

/** The parent group site and the sign-in portal, linked from header + footer. */
export const GROUP_URL = 'https://theaethersync.com';
export const LOGIN_URL = 'https://login.theaethersync.com/login';
export const GITHUB_URL = 'https://github.com/usman4116';
export const RELEASES_URL = 'https://github.com/usman4116/Async-Login/releases';

/** Resolve a site-relative path to an absolute URL for canonicals and JSON-LD. */
export function absoluteUrl(path = '/'): string {
  if (path === '/') return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

type ChangeFrequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

export interface SiteRoute {
  path: string;
  /** Breadcrumb + nav label. Kept short so trails stay one line on mobile. */
  label: string;
  /** Longer, keyword-bearing name used in link cards and JSON-LD. */
  name: string;
  /** One line of supporting copy, reused by nav menus and link cards. */
  blurb: string;
  priority: number;
  changeFrequency: ChangeFrequency;
  /** Internal reference pages: crawlable, deliberately not indexed. */
  noindex?: boolean;
}

/**
 * Every route under `app/`. Adding a page here wires it into the sitemap, the
 * footer, the related-links rail and the breadcrumb resolver at once.
 */
export const ROUTES: SiteRoute[] = [
  {
    path: '/',
    label: 'Home',
    name: 'AetherSync IDE — Autonomous AI Code Editor',
    blurb: 'The local-first autonomous AI IDE and coding agent.',
    priority: 1,
    changeFrequency: 'weekly',
  },
  {
    path: '/features',
    label: 'Features',
    name: 'AetherSync IDE Features',
    blurb: 'The autonomous agent, the sandboxed terminal and the Monaco editor.',
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  {
    path: '/preview',
    label: 'Live preview',
    name: 'AetherSync IDE Live Preview',
    blurb: 'Drive the AetherSync workspace in your browser — no install.',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: '/providers',
    label: 'Model providers',
    name: 'AetherSync AI Model Providers',
    blurb: 'Claude, GPT-4o, DeepSeek R1, Groq, Mistral and local Ollama.',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: '/download',
    label: 'Download',
    name: 'Download AetherSync IDE',
    blurb: 'Free builds for Windows 10/11 and Linux x64.',
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  {
    path: '/docs',
    label: 'Documentation',
    name: 'AetherSync IDE Documentation',
    blurb: 'Install, configure and prompt the autonomous agent.',
    priority: 0.8,
    changeFrequency: 'weekly',
  },
  {
    path: '/about',
    label: 'About',
    name: 'About AetherSync Technology',
    blurb: 'The team and the thesis behind AetherSync AI.',
    priority: 0.6,
    changeFrequency: 'monthly',
  },
  {
    path: '/design-system',
    label: 'Design system',
    name: 'AetherSync Design System',
    blurb: 'Tokens, type scale and the shared UI primitives.',
    priority: 0.1,
    changeFrequency: 'yearly',
    noindex: true,
  },
];

const ROUTE_BY_PATH = new Map(ROUTES.map((r) => [r.path, r]));

export function getRoute(path: string): SiteRoute | undefined {
  return ROUTE_BY_PATH.get(path);
}

/** Routes that belong in the sitemap and in crawlable link surfaces. */
export const INDEXABLE_ROUTES = ROUTES.filter((r) => !r.noindex);

/**
 * The header navigation, mirrored by the footer columns and emitted as
 * `SiteNavigationElement` structured data. One hierarchy, three surfaces —
 * which is what gives Google a stable shape to build sitelinks from.
 */
export interface NavItem {
  path: string;
  label: string;
  desc: string;
  external?: boolean;
}

export interface NavGroup {
  title: string;
  /** The group heading is itself a page, so the column head can link. */
  path: string;
  items: NavItem[];
}

export const NAV_GROUPS: NavGroup[] = [
  {
    title: 'Product',
    path: '/features',
    items: [
      {
        path: '/features',
        label: 'Features',
        desc: 'Autonomous multi-file edits with reviewable diffs.',
      },
      {
        path: '/preview',
        label: 'Live preview',
        desc: 'Editor, explorer and agent panel in one shell.',
      },
      {
        path: '/features#terminal',
        label: 'Sandboxed terminal',
        desc: 'Native PTY shells behind permission guards.',
      },
      {
        path: '/providers',
        label: 'Model providers',
        desc: 'Bring your own keys, or run fully offline.',
      },
    ],
  },
  {
    title: 'Developers',
    path: '/docs',
    items: [
      {
        path: '/docs',
        label: 'Documentation',
        desc: 'Install, configure and prompt the agent.',
      },
      {
        path: '/docs#quickstart',
        label: 'Quickstart',
        desc: 'From download to first agent run.',
      },
      {
        path: '/docs#shortcuts',
        label: 'Keyboard shortcuts',
        desc: 'Command palette and editor bindings.',
      },
      {
        path: '/design-system',
        label: 'Design system',
        desc: 'Tokens, type scale and UI primitives.',
      },
    ],
  },
  {
    title: 'Company',
    path: '/about',
    items: [
      { path: '/about', label: 'About', desc: 'The team behind AetherSync AI.' },
      { path: '/download', label: 'Download', desc: 'Windows and Linux builds.' },
      {
        path: GROUP_URL,
        label: 'AetherSync group',
        desc: 'The parent company.',
        external: true,
      },
      {
        path: RELEASES_URL,
        label: 'GitHub releases',
        desc: 'Changelogs and binaries.',
        external: true,
      },
    ],
  },
];

/** Top-level links rendered flat in the header bar. */
export const PRIMARY_NAV: Array<{ path: string; label: string }> = [
  { path: '/features', label: 'Features' },
  { path: '/preview', label: 'Live preview' },
  { path: '/providers', label: 'Providers' },
  { path: '/docs', label: 'Docs' },
  { path: '/download', label: 'Download' },
  { path: '/about', label: 'About' },
];

export interface Crumb {
  label: string;
  path: string;
}

/**
 * Breadcrumb trail for a route. The site is deliberately two levels deep, so
 * every trail is `Home › Page` — shallow, and every page one click from root.
 */
export function breadcrumbTrail(path: string): Crumb[] {
  const home: Crumb = { label: 'Home', path: '/' };
  if (path === '/') return [home];

  const route = getRoute(path);
  return [home, { label: route?.label ?? path.replace(/^\//, ''), path }];
}

/**
 * Sibling pages to surface at the foot of `path`, so no page is a dead end and
 * link equity keeps circulating instead of pooling on the home page.
 */
export function relatedRoutes(path: string, count = 3): SiteRoute[] {
  return INDEXABLE_ROUTES.filter((r) => r.path !== path && r.path !== '/').slice(0, count);
}
