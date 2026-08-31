'use client';

import { X, Shield, FileText } from 'lucide-react';

export function TermsModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <div className="flex max-h-[85vh] w-full max-w-xl flex-col rounded-2xl border border-white/[0.1] bg-[#0d0d14] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
          <div className="flex items-center gap-2">
            <FileText size={18} className="text-orange-500" />
            <h2 className="text-sm font-bold text-white">AetherSync Terms of Service & Privacy Policy</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-slate-400 hover:bg-[#1a1a24] hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 text-xs text-slate-300 space-y-4 leading-relaxed">
          <div>
            <h3 className="font-semibold text-white mb-1">1. Acceptance of Terms</h3>
            <p className="text-slate-400">
              By accessing, installing, or utilizing AetherSync Desktop, you agree to comply with and be legally bound by these Terms of Service.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-1">2. Local-First Data Privacy</h3>
            <p className="text-slate-400">
              AetherSync Desktop runs locally on your workstation. Your project files, terminal logs, and local workspace code are stored exclusively on your hard drive and are never sold or harvested by AetherSync.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-1">3. Third-Party AI Services</h3>
            <p className="text-slate-400">
              AI generations and code suggestions are processed through configured providers (e.g. OpenAI, Anthropic, or custom endpoints). Your interaction with AI models is subject to the respective provider policies.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-1">4. Code Ownership</h3>
            <p className="text-slate-400">
              You retain 100% intellectual property ownership of all source code, software, repositories, and materials generated, edited, or built using AetherSync Desktop.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-1">5. Acceptable Use</h3>
            <p className="text-slate-400">
              You agree not to use the software to create malicious software, conduct unauthorized penetration testing, or violate applicable laws and regulations.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.08] bg-[#09090e] px-6 py-3.5">
          <span className="flex items-center gap-1 text-[11px] text-slate-500">
            <Shield size={12} className="text-emerald-500" /> End-to-End Encrypted
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-orange-500 text-white text-xs font-semibold hover:bg-orange-600 transition-colors"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
}
