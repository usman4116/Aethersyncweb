import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
  /** `tight` for stacked bands, `default` for standalone sections. */
  spacing?: 'tight' | 'default' | 'loose';
}

const spacings = {
  tight: 'py-14 sm:py-16',
  default: 'py-20 sm:py-24 lg:py-28',
  loose: 'py-24 sm:py-32 lg:py-40',
};

/** The single source of vertical rhythm and horizontal gutters. */
const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, container = true, spacing = 'default', children, ...props }, ref) => (
    <section ref={ref} className={cn('relative', spacings[spacing], className)} {...props}>
      {container ? (
        <div className="mx-auto w-full max-w-shell px-5 sm:px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </section>
  )
);
Section.displayName = 'Section';

export { Section };
