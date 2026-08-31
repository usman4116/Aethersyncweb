'use client';

import { Terminal, Key, FolderOpen, Play, CheckCircle2, Copy } from 'lucide-react';
import { useState } from 'react';

export function DocsSection() {
  const [copied, setCopied] = useState(false);

  const copyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="docs" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-semibold mb-3">
          <Terminal size={12} />
          <span>Quickstart Documentation</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Get Started in <span className="neon-gradient-text">Under 60 Seconds</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base">
          From download to your first autonomous code refactor in four simple steps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Step 1 */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#0c0c12] p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500 text-white font-black text-sm flex items-center justify-center">
              1
            </div>
            <h3 className="font-bold text-base text-white">Install AetherSync Desktop</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
            Download the standalone installer and run it. The setup wizard automatically configures shortcuts and registers the deep-linking protocol.
          </p>
          <div className="p-3 rounded-xl bg-[#060608] border border-white/[0.06] font-mono text-xs text-slate-300 flex items-center justify-between">
            <code>AetherSync-Desktop-0.1.0-x64.exe</code>
            <span className="text-emerald-400 text-[11px] font-sans">Ready</span>
          </div>
        </div>

        {/* Step 2 */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#0c0c12] p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500 text-white font-black text-sm flex items-center justify-center">
              2
            </div>
            <h3 className="font-bold text-base text-white">Authenticate via Browser or Key</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
            Sign in with Google, GitHub, or Discord via the secure browser portal, or enter your API keys directly in the settings panel.
          </p>
          <div className="p-3 rounded-xl bg-[#060608] border border-white/[0.06] font-mono text-xs text-orange-400 flex items-center justify-between">
            <code>Settings → API Providers → Save Secret Key</code>
            <Key size={14} className="text-slate-500" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#0c0c12] p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500 text-white font-black text-sm flex items-center justify-center">
              3
            </div>
            <h3 className="font-bold text-base text-white">Open Any Project Folder</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
            Press <kbd className="font-mono bg-slate-800 px-1.5 py-0.5 rounded text-orange-400">Ctrl+O</kbd> to load your project directory. The local sandbox indexes file trees and prepares the integrated terminal.
          </p>
          <div className="p-3 rounded-xl bg-[#060608] border border-white/[0.06] font-mono text-xs text-slate-300 flex items-center justify-between">
            <code>File Explorer: frontend / backend / mobile</code>
            <FolderOpen size={14} className="text-slate-500" />
          </div>
        </div>

        {/* Step 4 */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#0c0c12] p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500 text-white font-black text-sm flex items-center justify-center">
              4
            </div>
            <h3 className="font-bold text-base text-white">Execute Autonomous Agent Tasks</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
            Switch to the <strong>Coding Agent</strong> tab and prompt the AI to inspect files, execute terminal tests, and apply multi-file edits.
          </p>
          <div className="p-3 rounded-xl bg-[#060608] border border-white/[0.06] font-mono text-xs text-orange-300 flex items-center justify-between">
            <code>&quot;Refactor Navbar to support dark mode &amp; run build&quot;</code>
            <Play size={14} className="text-orange-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
