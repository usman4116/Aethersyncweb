import * as React from 'react';
import { cn } from '@/lib/utils';
import { Eyebrow } from '@/components/ui/Eyebrow';

export interface SectionHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  /** Rendered to the right of the heading on wide screens (e.g. a CTA). */
  aside?: React.ReactNode;
}

/** Consistent section intro: kicker, display heading, one supporting line. */
function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  aside,
  className,
  ...props
}: SectionHeaderProps) {
  const centered = align === 'center';

  return (
    <div
      className={cn(
        'flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between',
        centered && 'lg:flex-col lg:items-center',
        className
      )}
      {...props}
    >
      <div className={cn('max-w-2xl', centered && 'mx-auto text-center')}>
        {eyebrow && (
          <Eyebrow rule={!centered} className={cn('mb-4', centered && 'justify-center')}>
            {eyebrow}
          </Eyebrow>
        )}
        <h2 className="text-display-sm font-bold text-foreground">{title}</h2>
        {description && (
          <p className={cn('mt-4 text-body text-text-secondary', centered && 'mx-auto')}>
            {description}
          </p>
        )}
      </div>
      {aside && <div className={cn('shrink-0', centered && 'lg:mt-2')}>{aside}</div>}
    </div>
  );
}

export { SectionHeader };
