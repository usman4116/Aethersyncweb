import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { LivePreview } from '@/components/LivePreview';
import { Features } from '@/components/Features';
import { ProvidersSection } from '@/components/ProvidersSection';
import { DocsSection } from '@/components/DocsSection';
import { AboutSection } from '@/components/AboutSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <LivePreview />
        <Features />
        <ProvidersSection />
        <DocsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
