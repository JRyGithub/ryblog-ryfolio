'use client';

import { SocialLinks } from '@/core/constants/social-links';
import { useParallax } from '@/hooks/use-parallax';
import { ChevronDown } from 'lucide-react';
import InternationalHellos from './molecules/international-hellos';

const HeroSection = () => {
  const scrollY = useParallax();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Parallax background elements */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      </div>
      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

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
            <span className="block text-balance">Joshua Ryland</span>
            <span className="block text-primary">Lead Developer</span>
          </h1>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            I build accessible, pixel-perfect digital experiences with a focus
            on performance and elegant design. Currently leading a development
            team at{' '}
            <span className="text-foreground">Bytes Software Services</span>.
          </p>
          {/* Social links */}
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
      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector('#about')
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-xs font-medium uppercase tracking-widest">
            Scroll
          </span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
