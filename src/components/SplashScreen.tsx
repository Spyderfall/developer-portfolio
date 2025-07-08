'use client';

import { motion } from 'framer-motion';
import Logo from './Logo';
import BrandTitle from './BrandTitle';

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Logo />
        <BrandTitle />
      </motion.div>
    </motion.div>
  );
}
