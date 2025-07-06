'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences } from '@/infrastructure/data/StaticExperienceRepository';

export default function ExperienceSection() {
  const [active, setActive] = useState(0);

  return (
    <motion.section
      className="max-w-6xl mx-auto px-4 py-20 text-gray-800 dark:text-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Title + Line */}
      <motion.div
        className="flex items-center gap-4 mb-16"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="flex-1 h-[2px] bg-indigo-500"></div>
        <h2 className="text-4xl font-bold">My Work Timeline</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row relative">
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 left-6 w-px bg-gray-300 dark:bg-gray-700">
          <div className="absolute w-px h-full bg-indigo-500 opacity-20 blur-sm"></div>
        </div>

        {/* Highlight bar */}
        <motion.div
          className="absolute left-6 w-px bg-indigo-500"
          initial={false}
          animate={{ top: `${active * 80}px` }}
          style={{ height: '40px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />

        {/* Timeline steps */}
        <div className="md:w-1/3 flex flex-col gap-16 ml-12 relative z-10">
          {experiences.map((exp, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActive(idx)}
              className={`text-left transition-colors duration-300 ${
                active === idx
                  ? 'text-indigo-500 font-semibold'
                  : 'text-gray-500 dark:text-gray-400 hover:text-indigo-400'
              }`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                {exp.title}
              </motion.span>
            </motion.button>
          ))}
        </div>

        {/* Right content */}
        <div className="md:w-3/4 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              layout
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h3 className="text-2xl font-bold">{experiences[active].title}</h3>
                <span className="text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full">
                  {experiences[active].dates}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {experiences[active].company}
              </p>

              <ul className="space-y-3">
                {experiences[active].highlights.map((point, i) => (
                  <li
                    key={i}
                    className="
                      relative pl-6 
                      before:absolute before:left-0 before:top-2 before:w-2 before:h-2 
                      before:rounded-full before:bg-indigo-400 
                      text-gray-700 dark:text-gray-300
                    "
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
