'use client';

import { useInView } from '@/hooks/use-parallax';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils/utils';

export function ContactSection() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-[80vh] flex items-center justify-center px-6 py-24 lg:px-24"
    >
      <div className="text-center">
        <p
          className={cn(
            'mb-4 font-mono text-sm tracking-wider text-primary transition-all duration-700',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          )}
        >
          {"What's Next?"}
        </p>
        <h2
          className={cn(
            'mb-6 text-4xl font-bold text-foreground transition-all duration-700 delay-100 md:text-6xl',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          )}
        >
          {"Let's Work Together"}
        </h2>
        <p
          className={cn(
            'mx-auto mb-12 max-w-xl text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          )}
        >
          {"I'm"} currently open to new opportunities and interesting projects.
          Whether you have a question, a proposal, or just want to say hi, my
          inbox is always open.
        </p>
        <div
          className={cn(
            'transition-all duration-700 delay-300',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          )}
        >
          <Button
            asChild
            size="lg"
            className="group gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="mailto:hello@example.com">
              Get In Touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
