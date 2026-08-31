import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LivePreview } from '@/components/LivePreview';
import { Sparkles, Terminal, Bot, Layers, Download } from 'lucide-react';

export const metadata = {
  title: 'Interactive Live Desktop Preview | AetherSync AI IDE',
  description: 'Test drive AetherSync Desktop right inside your browser. Explore the editor, terminal shell, and AI copilot in real time.',
};

const DOWNLOAD_LINK =
  'https://github.com/usman4116/Async-Login/releases/latest/download/AetherSync-Desktop-0.1.0-x64.exe';

export default function PreviewPage() {
  return (
    <div className="relative min-h-screen bg-[#070810] text-white">
      <Navbar />

      {/* Header */}
      <section className="relative pt-36 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="glow-orb top-24 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-indigo-600/15" />
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-4">
          <Sparkles size={13} className="text-purple-400" />
          <span>Full Interactive Demo</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
          Test Drive the <span className="aether-gradient-text">AetherSync Workspace</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Interact with our Monaco code editor, terminal runner, and agent copilot directly in this live simulation.
        </p>
      </section>

      {/* Simulator Component */}
      <div className="pb-16">
        <LivePreview />
      </div>

      {/* Bottom Download CTA Card */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="aether-card rounded-3xl p-8 sm:p-12 border border-purple-500/30 shadow-2xl relative overflow-hidden">
          <div className="glow-orb -top-10 -right-10 w-72 h-72 bg-purple-500/20" />
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to experience the native desktop application?
          </h3>
          <p className="mt-3 text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
            Download the standalone Windows installer with zero configuration needed.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={DOWNLOAD_LINK}
              download
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-orange-500 text-white font-bold text-sm shadow-xl shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Download size={16} />
              <span>Download AetherSync Desktop (.exe)</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
