/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // class-based dark mode
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#6366F1', // Indigo-500
          secondary: '#8B5CF6', // Purple-600
          accent: '#EC4899',
          light: '#F3F4F6',
          dark: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(31, 38, 135, 0.37)',
      },
    },
  },
  plugins: [],
};
