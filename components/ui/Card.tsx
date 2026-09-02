import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'flat' | 'elevated' | 'glass';
  interactive?: boolean;
}

/** Hairline panel. `interactive` adds the shared card hover (lift + ember edge). */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'flat', interactive = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-xl border border-border text-foreground',
        variant === 'flat' && 'bg-surface/55',
        variant === 'elevated' && 'bg-surface-elevated/70 shadow-panel',
        variant === 'glass' && 'aether-glass shadow-lift',
        interactive &&
          'transition-[transform,border-color,background-color] duration-300 ease-cine hover:-translate-y-[3px] hover:border-primary/32 hover:bg-surface-elevated/70',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

export { Card };
