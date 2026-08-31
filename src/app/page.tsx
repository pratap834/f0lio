import Hero from '@/components/Hero/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import ContactCTA from '@/components/ContactCTA';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-primary">
      {/* Subtle Top Ambient Gradient */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.08),rgba(255,255,255,0))]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 space-y-24 sm:space-y-32 pt-6 pb-20">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <ContactCTA />
        <ScrollIndicator />
      </div>
    </div>
  );
}
