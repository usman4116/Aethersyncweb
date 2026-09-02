'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Stagger in milliseconds, applied as a transition delay. */
  delay?: number;
  as?: 'div' | 'li' | 'section';
}

/**
 * Scroll-in reveal built on one IntersectionObserver per node. CSS in
 * `globals.css` owns the actual transition, and the reduced-motion block there
 * force-reveals every `[data-reveal]` node, so this degrades safely.
 */
function Reveal({ delay = 0, as = 'div', className, children, style, ...props }: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      node.dataset.reveal = 'shown';
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.reveal = 'shown';
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      data-reveal=""
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

export { Reveal };
