import * as React from 'react';
import { cn } from '@/lib/utils';

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  /** Rendered box in px. The mark is a square, so one number is enough. */
  size?: number;
}

/**
 * The AetherSync brand mark from theaethersync.com — the ember plate with the
 * white `A` — vectorised from the official raster so it stays crisp at every
 * size and needs no network request.
 *
 * Decorative by default: every place it appears is paired with the wordmark or
 * an accessible label on the surrounding link.
 */
export function Logo({ size = 32, className, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 188 188"
      width={size}
      height={size}
      role="img"
      aria-hidden
      focusable="false"
      className={cn('shrink-0', className)}
      {...props}
    >
      <rect x="0.5" y="0" width="187" height="188" rx="12.5" fill="rgb(var(--color-primary))" />
      {/* Subtle top light so the plate reads as a physical object, not a swatch */}
      <rect
        x="0.5"
        y="0"
        width="187"
        height="188"
        rx="12.5"
        fill="url(#aether-logo-sheen)"
        opacity="0.55"
      />
      <path
        fill="#ffffff"
        fillRule="evenodd"
        d="M81 40 H105 L145 146 H123 L115 123.5 H71 L63 146 H41 Z M93 63.5 L108.4 104.5 H77.6 Z"
      />
      <defs>
        <linearGradient id="aether-logo-sheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="0.45" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
