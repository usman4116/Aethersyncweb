import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { DocsSection } from '@/components/DocsSection';
import { Terminal, BookOpen, Code2, ShieldAlert, Cpu } from 'lucide-react';

export const metadata = {
  title: 'Documentation & Quickstart | AetherSync AI IDE',
  description: 'Complete documentation for installing, configuring, and leveraging autonomous coding workflows with AetherSync Desktop.',
};

export default function DocsPage() {
  return (
    <div className="relative min-h-screen bg-[#070810] text-white">
      <Navbar />

      {/* Header */}
      <section className="relative pt-36 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="glow-orb top-24 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-purple-600/15" />
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-4">
          <BookOpen size={13} />
          <span>User &amp; Developer Guides</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
          AetherSync <span className="aether-gradient-text">Documentation</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Step-by-step setup guides, keyboard shortcuts, and agent prompt best practices.
        </p>
      </section>

      {/* Quickstart Component */}
      <div className="pb-16">
        <DocsSection />
      </div>

      {/* Keyboard Shortcuts Reference */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="aether-card rounded-2xl p-8 border border-white/[0.08]">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Terminal size={18} className="text-purple-400" />
            <span>Essential Keyboard Shortcuts</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#0a0a14] border border-white/[0.05]">
              <span className="text-slate-300">Open Command Palette</span>
              <kbd className="px-2 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Ctrl + P
              </kbd>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#0a0a14] border border-white/[0.05]">
              <span className="text-slate-300">Toggle Integrated Terminal</span>
              <kbd className="px-2 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Ctrl + `
              </kbd>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#0a0a14] border border-white/[0.05]">
              <span className="text-slate-300">Open Project Workspace</span>
              <kbd className="px-2 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Ctrl + O
              </kbd>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#0a0a14] border border-white/[0.05]">
              <span className="text-slate-300">New Agent Chat Session</span>
              <kbd className="px-2 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Ctrl + K
              </kbd>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#0a0a14] border border-white/[0.05]">
              <span className="text-slate-300">Save Active File</span>
              <kbd className="px-2 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Ctrl + S
              </kbd>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#0a0a14] border border-white/[0.05]">
              <span className="text-slate-300">Interrupt Running Agent Task</span>
              <kbd className="px-2 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Escape
              </kbd>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
