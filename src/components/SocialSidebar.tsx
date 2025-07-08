'use client';

import { useEffect, useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function SocialSidebar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.6 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Color map for sections in light mode
  const lightColors: Record<string, string> = {
    home: 'text-indigo-500',
    about: 'text-sky-500',
    experience: 'text-purple-500',
    contact: 'text-rose-500',
  };

  const darkColors: Record<string, string> = {
    home: 'text-indigo-400',
    about: 'text-sky-400',
    experience: 'text-purple-400',
    contact: 'text-rose-400',
  };

  // Use dark mode check
  const isDark = typeof window !== 'undefined'
    ? document.documentElement.classList.contains('dark')
    : false;

  const sectionColors = isDark ? darkColors : lightColors;

  const iconClass = `
    ${sectionColors[activeSection]}
    opacity-80
    hover:opacity-100
    transition-colors duration-500
    hover:scale-110
    transform
    transition-transform
  `;

  return (
    <div className="fixed bottom-8 left-10 pl-2 flex flex-col items-center space-y-4 z-50">
      <a href="https://linkedin.com/in/sagar-adulkar" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={22} className={iconClass} />
      </a>
      <a href="https://github.com/Spyderfall" target="_blank" rel="noopener noreferrer">
        <FaGithub size={22} className={iconClass} />
      </a>
      <a href="https://x.com/spyderfall" target="_blank" rel="noopener noreferrer">
        <FaXTwitter size={22} className={iconClass} />
      </a>
      <div className="w-px h-24 bg-gray-500 dark:bg-gray-600 opacity-50 mt-4"></div>
    </div>
  );
}
