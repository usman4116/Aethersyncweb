import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      aria-invalid={error || undefined}
      className={cn(
        'flex h-10 w-full rounded-lg border bg-background-secondary px-3 py-2 text-[0.875rem]',
        'text-foreground placeholder:text-muted transition-colors duration-300 ease-cine',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        'focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
        error ? 'border-error focus-visible:ring-error' : 'border-border hover:border-border-strong',
        className
      )}
      {...props}
    />
  )
);
Input.displayName = 'Input';

export { Input };
