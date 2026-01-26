import React from 'react';

type ParallaxBackgroundElementsProps = {
  scrollY: number;
};

const ParallaxBackgroundElements = ({
  scrollY,
}: ParallaxBackgroundElementsProps) => {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{ transform: `translateY(${scrollY * 0.3}px)` }}
    >
      <div className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
    </div>
  );
};

export default ParallaxBackgroundElements;
