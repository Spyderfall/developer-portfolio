'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        px-4 py-2 rounded-full 
        bg-gray-200 dark:bg-gray-700 
        text-gray-800 dark:text-gray-100 
        shadow hover:shadow-lg transition
      "
    >
      {isDark ? 'Switch to Light' : 'Switch to Dark'}
    </button>
  );
}
