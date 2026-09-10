import * as React from 'react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { cn } from '@/lib/utils';

export interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Buttons or links rendered under the description. */
  actions?: React.ReactNode;
  /**
   * Current route. Supplying it renders the breadcrumb trail and its
   * `BreadcrumbList` structured data — every inner page should pass one.
   */
  path?: string;
  className?: string;
}

/**
 * The shared route header. Every inner page opens with this, so page-level
 * rhythm, bloom, breadcrumbs and type sizes stay identical across the site.
 *
 * The `<h1>` lives here and nowhere else on an inner page, which is what keeps
 * the heading outline to exactly one top-level heading per route.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  path,
  className,
}: PageHeaderProps) {
  return (
    <header className={cn('relative overflow-hidden border-b border-border', className)}>
      <div
        className="aether-bloom left-1/2 top-[-16rem] h-[30rem] w-[52rem] -translate-x-1/2"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-shell px-5 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        {path && <Breadcrumbs path={path} />}
        <div className="max-w-3xl">
          <Eyebrow rule>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-display font-bold text-foreground">{title}</h1>
          {description && (
            <p className="mt-5 max-w-prose text-body-lg text-text-secondary">{description}</p>
          )}
          {actions && <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>}
        </div>
      </div>
    </header>
  );
}
