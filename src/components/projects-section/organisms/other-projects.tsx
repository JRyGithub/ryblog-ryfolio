import { cn } from '@/lib/utils/utils';
import { Project } from '../projects-section.props';
import { ExternalLink, Github } from 'lucide-react';

type OtherProjectsProps = {
  projects: Project[];
  isInView: boolean;
};

const OtherProjects = ({ projects, isInView }: OtherProjectsProps) => {
  return (
    <>
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
    </>
  );
};

export default OtherProjects;
