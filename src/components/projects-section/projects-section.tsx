'use client';

import { useInView, useParallax } from '@/hooks/use-parallax';
import { projects } from '@/components/projects-section/projects-section.props';
import OtherProjects from './organisms/other-projects';
import FeaturedProjects from './organisms/featured-projects';

const ProjectsSection = () => {
  const { ref, isInView } = useInView(0.1);
  const scrollY = useParallax();

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-screen px-6 py-24 lg:px-24"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      >
        <div className="absolute left-1/3 top-1/2 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <FeaturedProjects
          projects={projects.filter((p) => p.featured)}
          isInView={isInView}
        />
        <OtherProjects
          projects={projects.filter((p) => !p.featured)}
          isInView={isInView}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
