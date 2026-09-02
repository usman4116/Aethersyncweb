import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'success' | 'warning';
}

/** Small status pill. Every variant is contrast-checked in both themes. */
function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-micro font-semibold',
        variant === 'default' && 'border-border bg-surface-elevated/70 text-text-secondary',
        variant === 'primary' && 'border-primary/30 bg-primary/12 text-primary',
        variant === 'secondary' && 'border-border-strong bg-foreground/5 text-foreground',
        variant === 'outline' && 'border-border-strong bg-transparent text-text-secondary',
        variant === 'success' && 'border-success/30 bg-success/12 text-success',
        variant === 'warning' && 'border-warning/30 bg-warning/12 text-warning',
        className
      )}
      {...props}
    />
  );
}

export { Badge };
