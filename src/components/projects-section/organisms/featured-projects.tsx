import { cn } from '@/lib/utils/utils';
import { Project } from '../projects-section.props';
import { ExternalLink, Github } from 'lucide-react';
import ArchitectureDiagram from '../molecules/architecture-diagram';

type FeaturedProjectsProps = {
  projects: Project[];
  isInView: boolean;
};

const FeaturedProjects = ({ projects, isInView }: FeaturedProjectsProps) => {
  return (
    <>
      <h2
        className={cn(
          'mb-16 text-sm font-medium uppercase tracking-widest text-primary transition-all duration-700',
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        )}
      >
        Projects
      </h2>
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
              <div
                className={cn(
                  'relative aspect-video overflow-hidden rounded-lg bg-secondary transition-transform duration-500 group-hover:scale-[1.02]',
                  index % 2 === 1 && 'lg:order-2',
                )}
              >
                <ArchitectureDiagram
                  projectTitle={project.title}
                  isInView={isInView}
                />
              </div>
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
    </>
  );
};

export default FeaturedProjects;
