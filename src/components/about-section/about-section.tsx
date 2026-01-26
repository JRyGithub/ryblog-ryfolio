'use client';

import { useInView } from '@/hooks/use-parallax';
import { cn } from '@/lib/utils/utils';
import ScrollIndicator from '../shared/scroll-indicator';
import CodeTerminal from './molecules/code-terminal';
import About from './molecules/about';
import AboutTechnologies from './molecules/about-technogies';
import AboutStats from './molecules/about-stats';

const AboutSection = () => {
  const { ref, isInView } = useInView(0.2);

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen px-6 py-24 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <div
          className={cn(
            'grid gap-12 transition-all duration-1000 lg:grid-cols-2 lg:gap-16',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0',
          )}
        >
          <About />
          <div className="lg:pl-8">
            <AboutTechnologies isInView={isInView} />
            <AboutStats isInView={isInView} />
          </div>
        </div>
        <CodeTerminal isInView={isInView} />
        <br />
        <ScrollIndicator scrollTo="experience" />
      </div>
    </section>
  );
};

export default AboutSection;
