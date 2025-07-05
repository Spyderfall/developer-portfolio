'use client';

import { motion, AnimatePresence } from 'framer-motion';
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

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
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

        {/* Right: Resume CTA + Theme Toggle */}
        <motion.div className="basis-1/3 flex justify-end items-center gap-4" variants={itemVariants}>
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

          {/* Theme Toggle with AnimatePresence */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
              relative inline-block p-[2px] rounded-full 
              bg-gradient-to-r from-indigo-500 to-purple-600
              transition-all duration-300 hover:from-purple-600 hover:to-indigo-500
            "
          >
            <span
              className="
                flex items-center justify-center
                w-10 h-10
                rounded-full
                bg-[#f0f0f0] dark:bg-gray-200
              "
            >
              <AnimatePresence mode="wait">
                <motion.svg
                  key={isDark ? 'sun' : 'moon'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth={2}
                  stroke={isDark ? 'url(#darkGrad)' : '#FBBF24'}
                >
                  {isDark ? (
                    <>
                      <defs>
                        <linearGradient id="darkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#6366F1" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                      </defs>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M17.95 17.95l1.414 1.414M6.05 6.05L4.636 7.464M12 8a4 4 0 100 8 4 4 0 000-8z"
                      />
                    </>
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                    />
                  )}
                </motion.svg>
              </AnimatePresence>
            </span>
          </button>
        </motion.div>
      </div>
    </motion.header>
  );
}
