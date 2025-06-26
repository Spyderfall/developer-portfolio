'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TypingTitleProps {
  fullText: string;
  className?: string;
  delay?: number; // optional animation delay
}

export default function TypingTitle({
  fullText,
  className = '',
  delay = 0.2,
}: TypingTitleProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <motion.h1
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={`text-5xl font-bold mb-4 text-gray-900 ${className}`}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.h1>
  );
}