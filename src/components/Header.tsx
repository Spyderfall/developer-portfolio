'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { Variants } from 'framer-motion';
import Logo from './Logo';
import BrandTitle from './BrandTitle';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  onClick: () => void;
}

function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Normalize: treat all project sections as "project"
            const normalizedId = id.startsWith('project') ? 'project' : id;
            setActiveSection(normalizedId);
          }
        },
        { threshold: 0.6 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sectionIds]);

  return activeSection;
}

// Nav items - Projects points to #project-1 (first project)
const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#project-1' }, // Updated to match your sections
  { label: 'Contact', href: '#contact' },
];

// Animations
const containerVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
      ease: 'easeOut',
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export default function Header({ onClick }: HeaderProps) {
  const router = useRouter();

  // Track all project sections as active 'project'
  const activeSection = useActiveSection([
    'home',
    'about',
    'project-1',
    'project-2',
    'project-3',
    'project-4',
    'contact',
  ]);

  const handleClick = () => {
    onClick();
    router.push('/');
  };

  return (
    <motion.header
      className="fixed top-4 left-0 right-0 flex items-center justify-between px-6 z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left: Logo + Title */}
      <motion.div
        layoutId="logo-header"
        className="flex items-center gap-2 basis-1/3 cursor-pointer"
        onClick={handleClick}
      >
        <Logo className="w-10 h-10" animate={false} />
        <BrandTitle className="text-base sm:text-lg" />
      </motion.div>

      {/* Center: Navigation */}
      <nav className="flex justify-center space-x-16 basis-1/3" aria-label="Primary navigation">
        {navItems.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className={`text-sm font-medium relative pb-1 transition-colors duration-200
              after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:bg-indigo-600 after:transition-all after:duration-300 after:origin-center
              ${
                // Highlight Projects if any project section is active
                (href === '#project-1' && activeSection === 'project') ||
                activeSection === href.replace('#', '')
                  ? 'text-indigo-600 after:w-full after:translate-x-[-50%]'
                  : 'text-gray-600 hover:text-indigo-600 hover:after:w-full hover:after:translate-x-[-50%] after:w-0'
              }
            `}
            onClick={(e) => {
              e.preventDefault();
              const id = href.replace('#', '');
              document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Right: Empty for symmetry */}
      <div className="basis-1/3" />
    </motion.header>
  );
}
