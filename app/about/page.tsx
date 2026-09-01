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
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Header */}
      <section className="relative pt-36 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="glow-orb top-24 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-primary/15" />
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold mb-4">
          <Info size={13} />
          <span>Company &amp; Vision</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-foreground leading-tight">
          About <span className="aether-gradient-text">AetherSync Technology</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Pioneering autonomous developer platforms that automate complex workflows and scale engineering speed.
        </p>
      </section>

      {/* Mission Component */}
      <div className="pb-16">
        <AboutSection />
      </div>

      {/* Team Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold mb-4">
            <Users size={13} />
            <span>The People Behind AetherSync</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-foreground">Meet the Founders</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* CEO & Founder */}
          <div className="aether-card rounded-2xl p-8 border border-primary/30 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center font-black text-foreground text-2xl shadow-lg shadow-primary/30">
              U
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Muhammad Usman Farhan</h3>
              <p className="text-xs font-semibold text-primary mt-1 tracking-wider uppercase">CEO &amp; Founder</p>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Visionary engineer and entrepreneur driving the AetherSync mission to build the world&apos;s most powerful autonomous AI developer platform.
            </p>
          </div>

          {/* Co-Founder */}
          <div className="aether-card rounded-2xl p-8 border border-border flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-surface-elevated border border-primary/40 flex items-center justify-center font-black text-primary text-2xl shadow-lg">
              A
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Muhammad Abdullah Bhatti</h3>
              <p className="text-xs font-semibold text-primary mt-1 tracking-wider uppercase">Co-Founder</p>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Core architect and product strategist shaping the AetherSync ecosystem — from infrastructure to user experience across every platform.
            </p>
          </div>
        </div>
      </section>

      {/* Parent Organization Reference */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="aether-card rounded-2xl p-8 border border-border text-center">
          <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4 font-bold text-lg">
            A
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">Part of the Aethersync Ecosystem</h3>
          <p className="text-xs sm:text-sm text-text-secondary max-w-xl mx-auto leading-relaxed">
            Aethersync builds AI and enterprise SaaS platforms — Purple AI, Open ERP, Corpflow, Finraze, and AetherSync AI IDE — that power modern digital operations.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="https://theaethersync.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-elevated border border-primary/30 text-primary font-semibold text-xs hover:bg-surface transition-colors"
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
