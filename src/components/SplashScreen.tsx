'use client';

import { motion } from 'framer-motion';
import Logo from './Logo';
import BrandTitle from './BrandTitle';

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-70" />

      {/* Main content */}
      <motion.div
        className="relative flex flex-col items-center gap-4 text-white"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Add subtle motion or glow if you want */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <Logo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        >
          <Logo/>
          <BrandTitle />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
