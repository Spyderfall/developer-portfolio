'use client';

import { useEffect, useState } from 'react';

export default function HackerShuffleText() {
  const prefix = 'Enthusiastic ';
  const roles = ['Front End Developer', 'Back End Developer', 'Full Stack Developer'];
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+{}[]<>?/|';

  const [displayText, setDisplayText] = useState(prefix + roles[0]);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const target = roles[roleIndex];
    let iterations = 0;
    const maxIterations = 25; // slower shuffle
    const shuffleInterval = 50; // slower speed

    const interval = setInterval(() => {
      let output = '';

      for (let i = 0; i < target.length; i++) {
        if (iterations < maxIterations) {
          output += chars[Math.floor(Math.random() * chars.length)];
        } else {
          output += target[i];
        }
      }

      setDisplayText(prefix + output);

      if (iterations >= maxIterations) {
        clearInterval(interval);
        if (roleIndex < roles.length - 1) {
          setTimeout(() => {
            setRoleIndex(roleIndex + 1);
          }, 1500);
        }
      }

      iterations++;
    }, shuffleInterval);

    return () => clearInterval(interval);
  }, [roleIndex]);

  return (
    <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 font-mono tracking-wide">
      {displayText}
      <span className="animate-pulse">|</span>
    </p>
  );
}
