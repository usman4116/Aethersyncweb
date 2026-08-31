import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AboutSection } from '@/components/AboutSection';
import { Info, Rocket, Heart, Globe, Users, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'About AetherSync | Autonomous AI Engineering',
  description: 'Learn about AetherSync Technology and our mission to create the world’s most performant autonomous software engineering platforms.',
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#070810] text-white">
      <Navbar />

      {/* Header */}
      <section className="relative pt-36 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="glow-orb top-24 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-purple-600/15" />
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-4">
          <Info size={13} />
          <span>Company &amp; Vision</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
          About <span className="aether-gradient-text">AetherSync Technology</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Pioneering autonomous developer platforms that automate complex workflows and scale engineering speed.
        </p>
      </section>

      {/* Mission Component */}
      <div className="pb-16">
        <AboutSection />
      </div>

      {/* Parent Organization Reference */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="aether-card rounded-2xl p-8 border border-white/[0.08] text-center">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
            A
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Part of the Aethersync Ecosystem</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Aethersync builds AI and enterprise SaaS platforms — Purple AI, Open ERP, Corpflow, Finraze, and AetherSync AI IDE — that power modern digital operations.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="https://theaethersync.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#121324] border border-purple-500/30 text-purple-300 font-semibold text-xs hover:bg-[#181a30] transition-colors"
            >
              <Globe size={13} /> Visit Corporate Website (theaethersync.com)
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
