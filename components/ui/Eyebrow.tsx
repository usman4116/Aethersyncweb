import * as React from 'react';
import { cn } from '@/lib/utils';

export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional leading rule, used when the eyebrow sits above a left-aligned heading. */
  rule?: boolean;
}

/**
 * The single kicker/eyebrow label. Replaces the ~8 hand-duplicated
 * `rounded-full bg-primary/10 border border-primary/25` pills.
 */
function Eyebrow({ className, rule = false, children, ...props }: EyebrowProps) {
  return (
    <div className={cn('flex items-center gap-3', className)} {...props}>
      {rule && <span className="h-px w-8 bg-primary/50" aria-hidden />}
      <span className="kicker">{children}</span>
    </div>
  );
}

export { Eyebrow };
