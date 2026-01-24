'use client';

import { projects } from '@/core/constants/projects';
import { useInView, useParallax } from '@/hooks/use-parallax';
import { cn } from '@/lib/utils/utils';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const { ref, isInView } = useInView(0.1);
  const scrollY = useParallax();

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-screen px-6 py-24 lg:px-24"
    >
      {/* Parallax background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      >
        <div className="absolute left-1/3 top-1/2 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <h2
          className={cn(
            'mb-16 text-sm font-medium uppercase tracking-widest text-primary transition-all duration-700',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          )}
        >
          Projects
        </h2>
        {/* Featured Projects */}
        <div className="mb-16 space-y-24">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={project.title}
                className={cn(
                  'group grid gap-8 transition-all duration-700 lg:grid-cols-2 lg:gap-12',
                  index % 2 === 1 && 'lg:direction-rtl',
                  isInView
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-16 opacity-0',
                )}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Project Image Placeholder */}
                <div
                  className={cn(
                    'relative aspect-video overflow-hidden rounded-lg bg-secondary transition-transform duration-500 group-hover:scale-[1.02]',
                    index % 2 === 1 && 'lg:order-2',
                  )}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-4 h-16 w-16 mx-auto rounded-lg bg-primary/20 flex items-center justify-center">
                        <span className="font-mono text-2xl text-primary">
                          {'{}'}
                        </span>
                      </div>
                      <p className="font-mono text-sm text-muted-foreground">
                        Project Preview
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div
                  className={cn(
                    'flex flex-col justify-center',
                    index % 2 === 1 && 'lg:order-1 lg:text-right',
                  )}
                >
                  <p className="mb-2 font-mono text-sm text-primary">
                    Featured Project
                  </p>
                  <h3 className="mb-4 text-2xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div
                    className={cn(
                      'mb-6 flex flex-wrap gap-3',
                      index % 2 === 1 && 'lg:justify-end',
                    )}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-sm text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div
                    className={cn(
                      'flex gap-4',
                      index % 2 === 1 && 'lg:justify-end',
                    )}
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary"
                        aria-label="GitHub repository"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary"
                        aria-label="Live site"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects Grid */}
        <h3
          className={cn(
            'mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground transition-all duration-700',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          )}
        >
          Other Projects
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <div
                key={project.title}
                className={cn(
                  'group rounded-lg bg-secondary/50 p-6 transition-all duration-500 hover:bg-secondary',
                  isInView
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0',
                )}
                style={{ transitionDelay: `${(index + 3) * 150}ms` }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-3xl text-primary/50">
                    {'</>'}
                  </span>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary"
                        aria-label="GitHub repository"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary"
                        aria-label="Live site"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="mb-2 text-lg font-medium text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h4>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
