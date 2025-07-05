'use client';

import { useEffect, useState } from 'react';
import {
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

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

  // Color map
  const sectionColors: Record<string, string> = {
    home: 'text-indigo-500',
    about: 'text-green-500',
    experience: 'text-yellow-500',
    contact: 'text-pink-500',
  };

  // Shared icon class with color & transition
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
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <FaGithub size={22} className={iconClass} />
      </a>
      <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={22} className={iconClass} />
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={22} className={iconClass} />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={22} className={iconClass} />
      </a>
      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={22} className={iconClass} />
      </a>

      <div className="w-px h-24 bg-gray-600 opacity-50 mt-4"></div>
    </div>
  );
}
