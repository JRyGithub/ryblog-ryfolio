import AboutSection from '@/components/about-section/about-section';
import { ContactSection } from '@/components/contact-section/contact-section';
import { ExperienceSection } from '@/components/experience-section/experience-section';
import { Footer } from '@/components/footer/footer';
import HeroSection from '@/components/hero-section/hero-section';
import Navigation from '@/components/navigation/navigation';
import ProjectsSection from '@/components/projects-section/projects-section';

export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
