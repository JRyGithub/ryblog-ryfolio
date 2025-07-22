'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import HomeSection from './sections/HomeSection';
import PortfolioSection from './sections/PortfolioSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';

const sections = [
  { component: HomeSection, path: '/', id: 'home' },
  { component: PortfolioSection, path: '/portfolio', id: 'portfolio' },
  { component: AboutSection, path: '/about', id: 'about' },
  { component: ContactSection, path: '/contact', id: 'contact' },
];

export default function ScrollingPortfolio() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const isInitialMount = useRef(true);
  const [currentSection, setCurrentSection] = useState(() => {
    const sectionIndex = sections.findIndex(
      (section) => section.path === pathname,
    );
    return sectionIndex !== -1 ? sectionIndex : 0;
  });

  // Scroll to section using native smooth scroll
  const scrollToSection = (index: number) => {
    const section = sectionRefs.current[index];
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Handle initial mount - scroll to correct section based on URL
  useEffect(() => {
    if (isInitialMount.current && currentSection > 0) {
      // For initial mount, scroll immediately without animation
      setTimeout(() => {
        const section = sectionRefs.current[currentSection];
        if (section) {
          section.scrollIntoView({
            behavior: 'auto', // No animation on initial load
            block: 'start',
          });
        }
        isInitialMount.current = false;
      }, 0);
    } else {
      isInitialMount.current = false;
    }
  }, [currentSection]);

  // Handle pathname changes after initial mount
  useEffect(() => {
    if (!isInitialMount.current) {
      const sectionIndex = sections.findIndex(
        (section) => section.path === pathname,
      );
      if (sectionIndex !== -1 && sectionIndex !== currentSection) {
        setCurrentSection(sectionIndex);
        scrollToSection(sectionIndex);
      }
    }
  }, [pathname, currentSection]);

  // Add scroll recovery mechanism
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout | undefined;
    let lastScrollTop = 0;
    let scrollStuckCount = 0;

    const handleScroll = () => {
      const currentScrollTop = container.scrollTop;

      // Clear any existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Check if scroll position changed
      if (Math.abs(currentScrollTop - lastScrollTop) < 1) {
        scrollStuckCount++;
      } else {
        scrollStuckCount = 0;
      }

      lastScrollTop = currentScrollTop;

      // If scroll seems stuck, try to recover
      if (scrollStuckCount > 10) {
        container.style.scrollSnapType = 'none';
        setTimeout(() => {
          if (container) {
            container.style.scrollSnapType = 'y mandatory';
          }
        }, 100);
        scrollStuckCount = 0;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Ensure smooth scrolling continues to work
      if (e.deltaY !== 0) {
        container.style.scrollBehavior = 'smooth';
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    container.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <main
      ref={containerRef}
      className="overflow-y-auto snap-y snap-mandatory h-screen w-full scroll-smooth"
    >
      {sections.map((section, index) => {
        const SectionComponent = section.component;
        return (
          <div
            key={section.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            data-section={section.id}
            className="snap-start"
          >
            <SectionComponent />
          </div>
        );
      })}
    </main>
  );
}
