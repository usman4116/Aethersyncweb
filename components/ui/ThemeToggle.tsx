'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Reads/writes `aether-theme`. The blocking script in `app/layout.tsx` applies
 * the stored value before first paint; this only keeps the icon in sync and
 * flips the `.light` class on click.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.classList.contains('light'));
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle('light', next);
    try {
      localStorage.setItem('aether-theme', next ? 'light' : 'dark');
    } catch {
      /* storage unavailable — theme still applies for this session */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'}
      aria-pressed={light}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border',
        'text-text-secondary transition-colors duration-300 ease-cine',
        'hover:border-border-strong hover:text-foreground',
        className
      )}
    >
      {light ? <Moon size={15} /> : <Sun size={15} />}
    </button>
  );
}
