'use client';

import { useState } from 'react';
import { Download, Globe, Github, Heart, Shield } from 'lucide-react';
import { TermsModal } from './TermsModal';

const DOWNLOAD_LINK =
  'https://github.com/usman4116/Async-Login/releases/latest/download/AetherSync-Desktop-0.1.0-x64.exe';

export function Footer() {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <footer className="border-t border-white/[0.08] bg-[#040406] pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center font-black text-white text-sm">
                A
              </div>
              <span className="font-extrabold text-base text-white tracking-tight">
                Aether<span className="text-orange-500">Sync</span> AI
              </span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Autonomous AI IDE & Coding Agent workspace designed for speed, privacy, and precision.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider mb-3">Product</h4>
            <ul className="space-y-2 text-[11.5px]">
              <li><a href="#features" className="hover:text-orange-400 transition-colors">Features</a></li>
              <li><a href="#live-preview" className="hover:text-orange-400 transition-colors">Live Desktop Preview</a></li>
              <li><a href="#providers" className="hover:text-orange-400 transition-colors">API Providers</a></li>
              <li><a href="#docs" className="hover:text-orange-400 transition-colors">Quickstart Docs</a></li>
            </ul>
          </div>

          {/* Downloads & Cloud */}
          <div>
            <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider mb-3">Downloads &amp; Cloud</h4>
            <ul className="space-y-2 text-[11.5px]">
              <li>
                <a href={DOWNLOAD_LINK} download className="text-orange-400 hover:underline flex items-center gap-1">
                  <Download size={11} /> Windows Installer (.exe)
                </a>
              </li>
              <li>
                <a href="https://login.theaethersync.com/login" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <Globe size={11} /> Web Login Portal
                </a>
              </li>
              <li>
                <a href="https://github.com/usman4116/Async-Login/releases" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <Github size={11} /> GitHub Releases
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider mb-3">Legal &amp; Trust</h4>
            <ul className="space-y-2 text-[11.5px]">
              <li>
                <button onClick={() => setShowTerms(true)} className="hover:text-orange-400 transition-colors text-left">
                  Terms of Service &amp; Privacy Policy
                </button>
              </li>
              <li className="flex items-center gap-1 text-slate-500">
                <Shield size={11} className="text-emerald-500" /> Local-First Architecture
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>&copy; {new Date().getFullYear()} AetherSync. All rights reserved.</div>
          <div className="flex items-center gap-1">
            Built with Next.js for <span className="text-slate-300 font-mono font-medium">www.ai.theaethersync.com</span>
          </div>
        </div>
      </div>

      {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}
    </footer>
  );
}
