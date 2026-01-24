'use client';

import { cn } from '@/lib/utils/utils';
import { useState, useEffect } from 'react';
import { NavItems } from './navigation.props';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NavItems.map((item) => item.href.slice(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed left-8 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-4 lg:flex',
        'transition-opacity duration-500',
        scrolled ? 'opacity-100' : 'opacity-0',
      )}
    >
      {NavItems.map((item) => (
        <button
          key={item.href}
          onClick={() => scrollToSection(item.href)}
          className="group flex items-center gap-3"
        >
          <span
            className={cn(
              'h-px w-8 transition-all duration-300',
              activeSection === item.href.slice(1)
                ? 'w-16 bg-primary'
                : 'bg-muted-foreground group-hover:w-12 group-hover:bg-foreground',
            )}
          />
          <span
            className={cn(
              'text-xs font-medium uppercase tracking-widest transition-colors duration-300',
              activeSection === item.href.slice(1)
                ? 'text-primary'
                : 'text-muted-foreground group-hover:text-foreground',
            )}
          >
            {item.title}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
