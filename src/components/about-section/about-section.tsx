'use client';

import { Skills } from '@/core/constants/skills';
import { useInView } from '@/hooks/use-parallax';
import { cn } from '@/lib/utils/utils';

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
          {/* Left column */}
          <div>
            <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-primary">
              About
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                {
                  "I'm a passionate developer with over 8 years of experience crafting "
                }
                digital products that blend thoughtful design with robust
                engineering. My focus lies at the intersection of design and
                development, creating experiences that are both beautiful and
                performant.
              </p>
              <p>
                Currently, I lead a team of talented engineers building
                innovative solutions that scale. I specialize in frontend
                architecture while maintaining strong full-stack capabilities.
              </p>
              <p>
                When {"I'm"} not coding, {"you'll"} find me exploring new
                technologies, contributing to open source, or mentoring aspiring
                developers.
              </p>
            </div>
          </div>
          {/* Right column - Skills */}
          <div className="lg:pl-8">
            <h3 className="mb-8 text-sm font-medium uppercase tracking-widest text-primary">
              Technologies
            </h3>
            <ul className="grid grid-cols-2 gap-4">
              {Skills.map((skill, index) => (
                <li
                  key={skill}
                  className={cn(
                    'flex items-center gap-3 text-muted-foreground transition-all duration-500',
                    isInView
                      ? 'translate-x-0 opacity-100'
                      : '-translate-x-4 opacity-0',
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="font-mono text-sm">{skill}</span>
                </li>
              ))}
            </ul>
            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              {[
                { label: 'Years Experience', value: '8+' },
                { label: 'Projects Completed', value: '50+' },
                { label: 'Engineers Led', value: '12' },
                { label: 'Open Source', value: '20+' },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={cn(
                    'border-l border-border pl-4 transition-all duration-500',
                    isInView
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-4 opacity-0',
                  )}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  <p className="text-3xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
