import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { absoluteUrl, breadcrumbTrail } from '@/lib/site';
import { cn } from '@/lib/utils';
import { JsonLd } from './JsonLd';

export interface BreadcrumbsProps {
  /** The current route, e.g. `/features`. */
  path: string;
  className?: string;
}

/**
 * The visible breadcrumb trail plus its `BreadcrumbList` structured data.
 *
 * Both come from the same `breadcrumbTrail()` call, so the markup a reader sees
 * and the graph Google parses cannot drift — a mismatch between them is a
 * structured-data violation, not merely an inconsistency.
 *
 * Renders bare: the caller owns the container and gutters. `PageHeader` places
 * it above the eyebrow on every route.
 */
export function Breadcrumbs({ path, className }: BreadcrumbsProps) {
  const trail = breadcrumbTrail(path);
  if (trail.length < 2) return null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.label,
      item: absoluteUrl(crumb.path),
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <nav aria-label="Breadcrumb" className={cn('mb-6', className)}>
        <ol className="flex flex-wrap items-center gap-1.5 text-micro text-muted">
          {trail.map((crumb, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={12} aria-hidden className="shrink-0 text-muted/60" />}
                {last ? (
                  <span aria-current="page" className="font-medium text-text-secondary">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.path}
                    className="inline-flex items-center gap-1.5 transition-colors duration-300 ease-cine hover:text-foreground"
                  >
                    {i === 0 && <Home size={12} aria-hidden />}
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
