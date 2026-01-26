import { cn } from '@/lib/utils/utils';
import { SkillsCopy } from '../about-section.props';
type AboutTechnologiesProps = {
  isInView: boolean;
};

const AboutTechnologies = ({ isInView }: AboutTechnologiesProps) => {
  return (
    <>
      <h3 className="mb-8 text-sm font-medium uppercase tracking-widest text-primary">
        Technologies
      </h3>
      <ul className="grid grid-cols-2 gap-4">
        {SkillsCopy.map((skill, index) => (
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
    </>
  );
};

export default AboutTechnologies;
