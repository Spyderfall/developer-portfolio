'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  animate?: boolean;
}

export default function Logo({ className = '', animate = true }: LogoProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="#a1a1aa"
      strokeWidth="2"
      className={className}
      aria-label="Spyderfall logo"
      role="img"
      initial={animate ? { rotate: 0, opacity: 0, scale: 0.8 } : {}}
      animate={animate ? { rotate: 360, opacity: 1, scale: 1 } : {}}
      transition={animate ? { duration: 2.5, ease: 'easeInOut' } : undefined}
    >
      <circle cx="32" cy="32" r="10" />
      <line x1="32" y1="2" x2="32" y2="14" />
      <line x1="32" y1="50" x2="32" y2="62" />
      <line x1="2" y1="32" x2="14" y2="32" />
      <line x1="50" y1="32" x2="62" y2="32" />
      <line x1="15" y1="15" x2="23" y2="23" />
      <line x1="41" y1="41" x2="49" y2="49" />
      <line x1="15" y1="49" x2="23" y2="41" />
      <line x1="41" y1="23" x2="49" y2="15" />
    </motion.svg>
  );
}
