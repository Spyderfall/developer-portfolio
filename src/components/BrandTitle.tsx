'use client';

import { motion } from 'framer-motion';

interface BrandTitleProps {
  className?: string;
}

export default function BrandTitle({ className = '' }: BrandTitleProps) {
  return (
    <motion.h1
      className={`text-3xl font-semibold tracking-wide ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      SpyderFall
    </motion.h1>
  );
}
