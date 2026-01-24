'use client';

import { greetings } from '@/core/constants/hellos';
import { useState, useEffect, useCallback } from 'react';

type InternationalHellosProps = {
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
};

const InternationalHellos = ({
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: InternationalHellosProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const currentGreeting = greetings[currentIndex];

  const tick = useCallback(() => {
    if (isDeleting) {
      // Delete one character
      setDisplayedText((prev) => prev.slice(0, -1));
    } else {
      // Add one character
      setDisplayedText((prev) => currentGreeting.slice(0, prev.length + 1));
    }
  }, [isDeleting, currentGreeting]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentGreeting) {
      // Finished typing, pause then start deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayedText === '') {
      // Finished deleting, move to next greeting
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % greetings.length);
    } else {
      // Continue typing or deleting
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(tick, speed);
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    currentGreeting,
    tick,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className={`inline-block ${className}`}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default InternationalHellos;
