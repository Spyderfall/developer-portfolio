'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { Variants } from 'framer-motion';
import Logo from './Logo';
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
            setActiveSection(id);
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

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

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

  const activeSection = useActiveSection([
    'home',
    'about',
    'experience',
    'contact',
  ]);

  const handleClick = () => {
    onClick();
    router.push('/');
  };

  return (
    <motion.header
      className="
        fixed top-4 inset-x-0
        z-50
        max-w-[1200px]
        mx-auto
        px-8
      "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        className="
          flex items-center justify-between
          bg-white bg-opacity-60 dark:bg-gray-200 dark:bg-opacity-60
          backdrop-blur-md
          rounded-full
          shadow-lg
          px-8
          gap-8
          py-2
          border border-gray-200 dark:border-gray-700
          transition-colors duration-300
          hover:bg-opacity-80 dark:hover:bg-opacity-80
          cursor-default
        "
      >
        {/* Left: Logo */}
        <motion.div
          layoutId="logo-header"
          className="flex items-center gap-2 basis-1/3 cursor-pointer"
          onClick={handleClick}
          variants={itemVariants}
        >
          <Logo className="w-10 h-10" animate={false} />
        </motion.div>

        {/* Center: Nav */}
        <nav
          className="flex justify-center space-x-16 basis-1/3"
          aria-label="Primary navigation"
        >
          {navItems.map(({ label, href }) => (
            <motion.a
              key={label}
              href={href}
              className={`text-sm font-medium relative pb-1 transition-colors duration-200
                after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:bg-indigo-600 after:transition-all after:duration-300 after:origin-center
                ${activeSection === href.replace('#', '')
                  ? 'text-indigo-600 after:w-full after:translate-x-[-50%]'
                  : 'text-gray-600 hover:text-indigo-600 hover:after:w-full hover:after:translate-x-[-50%] after:w-0'
                }
              `}
              onClick={(e) => {
                e.preventDefault();
                const id = href.replace('#', '');
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              variants={itemVariants}
            >
              {label}
            </motion.a>
          ))}
        </nav>

        {/* Right: Resume CTA */}
        <motion.div className="basis-1/3 flex justify-end" variants={itemVariants}>
          <a
            href="/Sagar_Adulkar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
      relative inline-block p-[2px] rounded-full 
      bg-gradient-to-r from-indigo-500 to-purple-600
      transition-all duration-300 hover:from-purple-600 hover:to-indigo-500
    "
          >
            <span
              className="
        block rounded-full px-5 py-2
        bg-[#f0f0f0] dark:bg-gray-200
      "
            >
              <span className="
        text-sm font-medium 
        text-transparent bg-clip-text 
        bg-gradient-to-r from-indigo-500 to-purple-600
      ">
                Download Resume
              </span>
            </span>
          </a>
        </motion.div>
      </div>
    </motion.header>
  );
}
