import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProductShots } from '@/components/ProductShots';
import { LiveWorkspace } from '@/components/LiveWorkspace';
import { CapabilityTrack } from '@/components/CapabilityTrack';
import { ProvidersSection } from '@/components/ProvidersSection';
import { DeploymentModes } from '@/components/DeploymentModes';
import { DocsSection } from '@/components/DocsSection';
import { AboutSection } from '@/components/AboutSection';
import { Testimonials } from '@/components/Testimonials';
import { CtaBand } from '@/components/CtaBand';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <Navbar />
      <main>
        <Hero />
        <ProductShots />
        <LiveWorkspace />
        <CapabilityTrack />
        <ProvidersSection />
        <DeploymentModes />
        <DocsSection />
        <AboutSection />
        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
