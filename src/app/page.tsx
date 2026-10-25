import Hero from '@/components/Hero/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import ContactCTA from '@/components/ContactCTA';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <ContactCTA />
      <ScrollIndicator />
    </div>
  );
}
