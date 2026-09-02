'use client';

import { useEffect, useRef } from 'react';
import { FileText, ShieldCheck, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const sections = [
  {
    title: 'Acceptance of terms',
    body: 'By accessing, installing or using AetherSync Desktop you agree to comply with, and be legally bound by, these Terms of Service.',
  },
  {
    title: 'Local-first data privacy',
    body: 'AetherSync Desktop runs on your workstation. Project files, terminal logs and workspace state are stored on your own disk, and are never sold or harvested by AetherSync.',
  },
  {
    title: 'Third-party AI services',
    body: 'Code suggestions are processed by whichever provider you configure (OpenAI, Anthropic, a local model or a custom endpoint). Your interaction with those models is governed by that provider’s policies.',
  },
  {
    title: 'Code ownership',
    body: 'You retain full intellectual-property ownership of all source code, repositories and materials generated, edited or built with AetherSync Desktop.',
  },
  {
    title: 'Acceptable use',
    body: 'You agree not to use the software to create malicious software, conduct unauthorised penetration testing, or violate applicable laws and regulations.',
  },
];

/** Accessible dialog: Escape closes, backdrop closes, focus moves in on open. */
export function TermsModal({ onClose }: { onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);

    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <div
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="terms-title"
        tabIndex={-1}
        className="flex max-h-[85vh] w-full max-w-xl flex-col rounded-xl border border-border bg-background-secondary shadow-panel focus:outline-none"
      >
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
          <h2 id="terms-title" className="flex items-center gap-2 text-[0.875rem] font-semibold text-foreground">
            <FileText size={16} className="text-primary" aria-hidden />
            Terms of Service &amp; Privacy Policy
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-md p-1 text-muted transition-colors duration-300 ease-cine hover:bg-surface-hover hover:text-foreground"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex-1 space-y-5 overflow-y-auto px-6 py-5">
          {sections.map((s, i) => (
            <section key={s.title}>
              <h3 className="text-[0.8125rem] font-semibold text-foreground">
                <span className="mr-2 font-mono text-micro text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {s.title}
              </h3>
              <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-text-secondary">
                {s.body}
              </p>
            </section>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-border px-5 py-3.5">
          <span className="inline-flex items-center gap-1.5 text-micro text-muted">
            <ShieldCheck size={12} className="text-success" aria-hidden /> Credentials encrypted in
            the OS keyring
          </span>
          <Button size="sm" onClick={onClose}>
            I agree
          </Button>
        </div>
      </div>
    </div>
  );
}
