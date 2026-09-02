'use client';

import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { LiveIDEApp } from './LiveIDEApp';

export interface ShotFrameProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  eager?: boolean;
  glow?: boolean;
  lift?: boolean;
  sizes?: string;
  className?: string;
  frameClassName?: string;
  children?: React.ReactNode;
}

export function ShotFrame({
  src,
  alt,
  width = 1600,
  height = 875,
  caption,
  eager = false,
  glow = false,
  lift = false,
  sizes = '(min-width: 1024px) 60vw, 100vw',
  className,
  frameClassName,
  children,
}: ShotFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    
    const obs = new ResizeObserver((entries) => {
      setScale(entries[0].contentRect.width / 1250);
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <figure className={cn('relative', className)}>
      {glow && (
        <div
          className="cine-field absolute -inset-x-10 -bottom-10 -top-16 hidden sm:block"
          aria-hidden
        />
      )}

      <div className={cn('shot-frame relative w-full overflow-hidden', lift && 'shot-frame--lift', frameClassName)} ref={containerRef}>
         <div style={{ height: `${750 * scale}px`, width: '100%', position: 'relative' }}>
           <div 
             className="absolute top-0 left-0 origin-top-left pointer-events-auto" 
             style={{ transform: `scale(${scale})`, width: '1250px', height: '750px' }}
           >
             {children || <LiveIDEApp />}
           </div>
         </div>
      </div>

      {caption && (
        <figcaption className="mt-3 font-mono text-micro text-muted">{caption}</figcaption>
      )}
    </figure>
  );
}

export interface ThemedShotProps extends Omit<ShotFrameProps, 'src' | 'alt'> {
  darkSrc: string;
  lightSrc: string;
  alt: string;
}

export function ThemedShot({ darkSrc, lightSrc, alt, className, children, ...rest }: ThemedShotProps) {
  return (
    <div className={cn('relative', className)}>
      <ShotFrame {...rest} alt={alt}>
        {children}
      </ShotFrame>
    </div>
  );
}
