import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type ScrollIndicatorProps = {
  scrollTo: string;
};

const ScrollIndicator = ({ scrollTo }: ScrollIndicatorProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const section = ref.current.closest('section');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate how far the section top has scrolled past the viewport top
      // When section is fully in view (top at 0), opacity is 1
      // As user scrolls down within the section, fade out
      const scrolledWithinSection = Math.max(0, -rect.top);
      const fadeDistance = viewportHeight * 0.3; // Fade over 30% of viewport height

      setOpacity(Math.max(0, 1 - scrolledWithinSection / fadeDistance));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
      style={{ opacity }}
    >
      <a
        href={`#${scrollTo}`}
        className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        onClick={(e) => {
          e.preventDefault();
          document
            .querySelector(`#${scrollTo}`)
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-xs font-medium uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </div>
  );
};

export default ScrollIndicator;
