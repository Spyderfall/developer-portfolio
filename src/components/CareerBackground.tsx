'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function CareerBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId: number;
    const container = containerRef.current;
    if (!container) return;

    const icons = Array.from(container.querySelectorAll<HTMLDivElement>('.orbiting-icon'));

    let angle = 0;
    const radius = 100; // orbit radius

    const animate = () => {
      angle += 0.002; // rotation speed
      icons.forEach((icon, i) => {
        const theta = angle + (i * (2 * Math.PI)) / icons.length;
        const x = Math.cos(theta) * radius;
        const y = Math.sin(theta) * radius;
        icon.style.transform = `translate(${x}px, ${y}px)`;
      });
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center z-0">
      {/* Globe wireframe */}
      <svg
        viewBox="0 0 200 200"
        className="w-[400px] h-[400px] opacity-10 dark:opacity-20"
      >
        <circle cx="100" cy="100" r="80" stroke="url(#grad)" strokeWidth="1" fill="none" />
        <circle cx="100" cy="100" r="60" stroke="url(#grad)" strokeWidth="1" fill="none" />
        <circle cx="100" cy="100" r="40" stroke="url(#grad)" strokeWidth="1" fill="none" />
        <line x1="20" y1="100" x2="180" y2="100" stroke="url(#grad)" strokeWidth="1" />
        <line x1="100" y1="20" x2="100" y2="180" stroke="url(#grad)" strokeWidth="1" />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Orbiting icons */}
      <div ref={containerRef} className="absolute">
        {[
          '/icons/react.svg',
          '/icons/nextjs.svg',
          '/icons/java.svg',
          '/icons/spring.svg',
          '/icons/sql.svg',
        ].map((src, i) => (
          <div
            key={i}
            className="orbiting-icon absolute w-8 h-8"
          >
            <Image
              src={src}
              alt="Tech"
              className="w-full h-full object-contain opacity-70 dark:opacity-80"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
