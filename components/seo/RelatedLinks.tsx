import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { relatedRoutes, type SiteRoute } from '@/lib/site';
import { cn } from '@/lib/utils';

export interface RelatedLinksProps {
  /** Current route — excluded from its own rail. */
  path: string;
  /** Override the automatic selection when a page has obvious neighbours. */
  routes?: SiteRoute[];
  title?: string;
  className?: string;
}

/**
 * The internal link rail closing every page.
 *
 * Its job is crawl depth: without it each route is a leaf reachable only from
 * the header, and link equity pools on the home page. With it every indexable
 * page links to every other in at most two hops, which is also the shape
 * Google reads when deciding whether a site earns sitelinks.
 */
export function RelatedLinks({
  path,
  routes,
  title = 'Continue exploring AetherSync',
  className,
}: RelatedLinksProps) {
  const items = routes ?? relatedRoutes(path, 3);
  if (items.length === 0) return null;

  return (
    <nav
      aria-labelledby="related-links-heading"
      className={cn('border-t border-border', className)}
    >
      <div className="mx-auto w-full max-w-shell px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <h2 id="related-links-heading" className="kicker">
          {title}
        </h2>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className="group flex h-full items-start justify-between gap-4 rounded-xl border border-border bg-surface/60 p-5 transition-colors duration-300 ease-cine hover:border-border-strong hover:bg-surface-hover/60"
              >
                <span className="min-w-0">
                  <span className="block font-display text-[0.9375rem] font-semibold text-foreground">
                    {route.name}
                  </span>
                  <span className="mt-1.5 block text-label leading-relaxed text-text-secondary">
                    {route.blurb}
                  </span>
                </span>
                <ArrowUpRight
                  size={15}
                  aria-hidden
                  className="mt-0.5 shrink-0 text-muted transition-colors duration-300 ease-cine group-hover:text-primary"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
