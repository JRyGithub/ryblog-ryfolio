import { NumberAndSkillsCopy } from '../about-section.props';
import { cn } from '@/lib/utils/utils';

type AboutStatsProps = {
  isInView: boolean;
};

const AboutStats = ({ isInView }: AboutStatsProps) => {
  return (
    <div className="mt-12 grid grid-cols-2 gap-6">
      {NumberAndSkillsCopy.map((stat, index) => (
        <div
          key={stat.label}
          className={cn(
            'border-l border-border pl-4 transition-all duration-500',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
          )}
          style={{ transitionDelay: `${(index + 4) * 100}ms` }}
        >
          <p className="text-3xl font-bold text-foreground">{stat.value}</p>
          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutStats;
