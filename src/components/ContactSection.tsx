'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // X is only in `fa6`


export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <motion.section
      className="w-full pl-10 pr-6 md:pl-20 md:pr-16 py-24 flex flex-col md:flex-row items-start justify-center md:gap-x-10 gap-y-16 text-gray-800 dark:text-gray-200"

      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >

      {/* LEFT SIDE */}
      {/* LEFT SIDE */}
      <motion.div
        initial={{ y: 30, opacity: 0.95 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col basis-1/2 max-w-lg gap-10"
      >
        {/* Title + Line */}
        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="flex-1 h-[2px] bg-indigo-500"></div>
          <h2 className="text-4xl font-bold text-indigo-500 whitespace-nowrap">Let's Connect</h2>
          <div className="flex-1 h-[2px] bg-indigo-500"></div>
        </motion.div>

        {/* Vertical Contact Info Stack */}
        <div className="flex flex-col gap-6 text-lg text-gray-800 dark:text-gray-200">
          <a
            href="mailto:sagaradulkarwork@gmail.com"
            className="flex items-center gap-4 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <FaEnvelope className="text-indigo-500 text-xl" />
            <span>sagaradulkarwork@gmail.com</span>
          </a>

          <a
            href="https://linkedin.com/in/sagar-adulkar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <FaLinkedin className="text-indigo-500 text-xl" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/Spyderfall"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <FaGithub className="text-indigo-500 text-xl" />
            <span>GitHub</span>
          </a>

          <a
            href="https://x.com/spyderfall"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <FaXTwitter className="text-indigo-500 text-xl" />
            <span>X</span>
          </a>
        </div>

      </motion.div>


      {/* RIGHT FORM CARD */}
      <motion.div
        className="basis-1/2 max-w-xl mt-0"
        initial={{ y: 30, opacity: 0.95 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-xl border border-gray-300 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
            Get in Touch
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:from-purple-600 hover:to-indigo-500 transition-colors"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {status === 'sent' && (
              <p className="text-green-600 dark:text-green-400 text-sm">
                Message sent! Thank you.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 dark:text-red-400 text-sm">
                Oops! Something went wrong.
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </motion.section>
  );
}
