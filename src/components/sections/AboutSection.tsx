import React from 'react';

export default function AboutSection() {
  return (
    <section className="h-screen w-full flex snap-start items-center justify-center bg-green-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-xl text-gray-600">Learn more about my background</p>
      </div>
    </section>
  );
}
