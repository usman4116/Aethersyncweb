import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Download, CheckCircle2, ShieldCheck, Terminal, Layers, Globe, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Download AetherSync Desktop | Windows & Linux (x64)',
  description: 'Download the official AetherSync AI Desktop application for Windows and Linux. Local-first autonomous coding agent and IDE.',
};

const WIN_DOWNLOAD =
  'https://github.com/usman4116/Async-Login/releases/latest/download/AetherSync-Desktop-0.1.0-x64.exe';
const LINUX_TAR_DOWNLOAD =
  'https://github.com/usman4116/Async-Login/releases/latest/download/AetherSync-Desktop-0.1.0-linux-x64.tar.gz';
const LINUX_ZIP_DOWNLOAD =
  'https://github.com/usman4116/Async-Login/releases/latest/download/AetherSync-Desktop-0.1.0-linux-x64.zip';

export default function DownloadPage() {
  return (
    <div className="relative min-h-screen bg-[#070810] text-white">
      <Navbar />

      <section className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="glow-orb top-24 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-purple-600/15" />
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-4">
          <Download size={13} />
          <span>Official Distribution Builds (v0.1.0)</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
          Download <span className="aether-gradient-text">AetherSync Desktop</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Get the autonomous AI IDE on your workstation. Choose your operating system below.
        </p>
      </section>

      {/* Platform Download Cards */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Windows Card */}
        <div className="aether-card rounded-3xl p-8 sm:p-10 border border-purple-500/40 relative overflow-hidden flex flex-col justify-between shadow-2xl">
          <div className="glow-orb -top-10 -right-10 w-60 h-60 bg-purple-600/20" />
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                {/* Windows SVG */}
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-300 flex items-center justify-center">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 88 88">
                    <path d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48.016 45.728zm4.326-39.027L87.914 0v41.525l-47.918.278zm47.918 39.566l-.004 41.53-47.918-6.743V45.728z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Windows</h3>
                  <p className="text-xs text-slate-400">Windows 10, 11 (64-bit)</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
                Installer (.exe)
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
              Standalone NSIS setup executable. Automatically configures desktop shortcuts and registers the deep-linking protocol.
            </p>

            <div className="space-y-2 mb-8 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-purple-400" />
                <span>One-click setup wizard with EULA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-purple-400" />
                <span>Integrated Windows PowerShell &amp; CMD</span>
              </div>
            </div>
          </div>

          <a
            href={WIN_DOWNLOAD}
            download
            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Download size={15} />
            <span>Download for Windows (.exe)</span>
            <span className="text-xs font-normal opacity-80">(95 MB)</span>
          </a>
        </div>

        {/* Linux Card */}
        <div className="aether-card rounded-3xl p-8 sm:p-10 border border-white/[0.1] relative overflow-hidden flex flex-col justify-between shadow-2xl">
          <div className="glow-orb -top-10 -right-10 w-60 h-60 bg-indigo-600/20" />
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                {/* Linux Penguin / Terminal Icon */}
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
                  <Terminal size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Linux</h3>
                  <p className="text-xs text-slate-400">Ubuntu, Debian, Fedora, Arch (64-bit)</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 text-xs font-semibold">
                tar.gz / zip
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
              Portable standalone distribution archive. Extract and launch the executable directly on any modern Linux distribution.
            </p>

            <div className="space-y-2 mb-8 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-indigo-400" />
                <span>Works on all system glibc distributions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-indigo-400" />
                <span>Native Bash &amp; Zsh terminal integration</span>
              </div>
            </div>
          </div>

          <div className="space-y-2.5">
            <a
              href={LINUX_TAR_DOWNLOAD}
              download
              className="w-full py-3.5 rounded-xl bg-[#141628] border border-indigo-500/30 text-indigo-200 font-bold text-sm text-center flex items-center justify-center gap-2 hover:bg-[#1a1d35] transition-all"
            >
              <Download size={15} />
              <span>Download Linux (.tar.gz)</span>
              <span className="text-xs font-normal opacity-80">(115 MB)</span>
            </a>
            <a
              href={LINUX_ZIP_DOWNLOAD}
              download
              className="w-full py-2.5 rounded-xl text-slate-400 hover:text-white text-xs font-medium text-center flex items-center justify-center gap-1.5 transition-colors"
            >
              <Download size={13} />
              <span>Download as .zip (Alternative)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Linux Quick Launch instructions */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="aether-card rounded-2xl p-6 border border-white/[0.08]">
          <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
            <Terminal size={14} className="text-purple-400" /> Linux Quick Launch:
          </h4>
          <div className="p-3.5 rounded-xl bg-[#06070c] border border-white/[0.06] font-mono text-xs text-slate-300 space-y-1">
            <p className="text-slate-500"># Extract archive</p>
            <p className="text-orange-300">tar -xzf AetherSync-Desktop-0.1.0-linux-x64.tar.gz</p>
            <p className="text-slate-500 mt-2"># Run executable</p>
            <p className="text-orange-300">cd linux-unpacked && ./aethersync-desktop</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
