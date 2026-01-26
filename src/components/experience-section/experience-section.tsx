'use client';

import { useInView } from '@/hooks/use-parallax';
import { cn } from '@/lib/utils/utils';
import { ExternalLink } from 'lucide-react';
import ScrollIndicator from '../shared/scroll-indicator';
import { experiences } from './experience-section.props';

export function ExperienceSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative min-h-screen bg-secondary/30 px-6 py-24 lg:px-24"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          className={cn(
            'mb-16 text-sm font-medium uppercase tracking-widest text-primary transition-all duration-700',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          )}
        >
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.title + exp.company}
              className={cn(
                'group grid gap-4 transition-all duration-700 md:grid-cols-[200px_1fr]',
                isInView
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-12 opacity-0',
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-sm text-muted-foreground">{exp.period}</div>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-foreground transition-colors group-hover:text-primary">
                  {exp.title} ·{' '}
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-foreground hover:text-primary"
                  >
                    {exp.company}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollIndicator scrollTo="projects" />
    </section>
  );
}
