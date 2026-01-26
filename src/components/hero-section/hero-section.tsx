'use client';

import { SocialLinks } from '@/core/constants/social-links';
import { useParallax } from '@/hooks/use-parallax';
import InternationalHellos from './molecules/international-hellos';
import ScrollIndicator from '../shared/scroll-indicator';
import { HeroSectionCopy } from './hero-section.props';
import GridPattern from '../shared/grid-pattern';
import ParallaxBackgroundElements from '../shared/parrallax-background-elements';

const HeroSection = () => {
  const scrollY = useParallax();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <ParallaxBackgroundElements scrollY={scrollY} />
      <GridPattern scrollY={scrollY} />
      <div className="relative z-10 max-w-4xl">
        <div
          className="animate-fade-in"
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
            opacity: Math.max(0, 1 - scrollY / 600),
          }}
        >
          <p className="mb-4 font-mono text-sm tracking-wider text-primary">
            <InternationalHellos />
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
            <span className="block text-balance">{HeroSectionCopy.title}</span>
            <span className="block text-primary">
              {HeroSectionCopy.subtitle}
            </span>
          </h1>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {HeroSectionCopy.blurb} at{' '}
            <span className="text-foreground">{HeroSectionCopy.company} </span>.
          </p>
          <div className="flex items-center gap-6">
            {SocialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-muted-foreground transition-colors hover:text-primary"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs opacity-0 transition-opacity group-hover:opacity-100">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <ScrollIndicator scrollTo="about" />
    </section>
  );
};

export default HeroSection;
