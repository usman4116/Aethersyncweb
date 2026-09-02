import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * One button language for the whole site: flat ember fill for the primary
 * action, hairline surface for everything else. No gradients, no glow
 * shadows, no shimmer sweeps — motion is limited to colour and a 1px press.
 */
const base =
  'inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold ' +
  'transition-[background-color,border-color,color,transform] duration-300 ease-cine ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ' +
  'focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-45 active:translate-y-px';

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-primary text-primary-fg hover:bg-primary-hover',
  secondary: 'bg-foreground text-background hover:bg-foreground/85',
  outline:
    'border border-border-strong bg-transparent text-foreground hover:border-primary/50 hover:bg-surface-hover/60',
  ghost: 'text-text-secondary hover:bg-surface-hover/60 hover:text-foreground',
  glass: 'aether-glass border border-border text-foreground hover:border-primary/40',
};

const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-8 px-3 text-label',
  md: 'h-10 px-4 text-[0.875rem]',
  lg: 'h-12 px-6 text-[0.9375rem]',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => (
    <button
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  )
);
Button.displayName = 'Button';

export { Button };
