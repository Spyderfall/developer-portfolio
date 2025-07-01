'use client';

import { useEffect, useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import Header from '@/components/Header';
import TypingTitle from '@/components/TypingTitle';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
      setShowHeader(true);
    }, 3000);
    return () => clearTimeout(splashTimeout);
  }, []);

  const handleLogoClick = () => {
    localStorage.setItem('splashSeen', 'true');
    setShowSplash(false);
    setShowHeader(true);
  };

  useEffect(() => {
    if (localStorage.getItem('splashSeen') === 'true') {
      setShowSplash(false);
      setShowHeader(true);
    }
  }, []);

  return (
    <>
      {showSplash && <SplashScreen />}
      {showHeader && <Header onClick={handleLogoClick} />}
      {!showSplash && (
        <main className="h-screen overflow-y-scroll scroll-smooth">
          <section id="home" className="min-h-screen flex items-center justify-center px-8">
            <div className="flex items-center gap-x-20">
              <div className="text-left transform -translate-x-4">
                <p className="text-lg">Hello, I'm</p>
                <TypingTitle fullText="Sagar Adulkar" />
                <p className="text-lg">An enthusiastic full stack developer</p>
                <p className="text-sm mt-2 text-gray-500">Based in Earth 🌍</p>
              </div>
              <div className="transform translate-x-4">
                <img
                  src="/profile.jpg"
                  alt="Sagar Adulkar"
                  className="w-48 h-48 object-cover rounded-full shadow-lg"
                />
              </div>
            </div>
          </section>

          <section id="about" className="min-h-screen flex items-center justify-center bg-gray-50">
            <AboutSection />
          </section>

          {[0, 1, 2, 3].map((idx) => (
            <section
              key={idx}
              id={`project-${idx + 1}`}
              className="flex items-center justify-center bg-gray-50 py-6"
            >
              <ProjectsSection projectIndex={idx} />
            </section>
          ))}

          <section
            id="contact"
            className="
    min-h-screen flex items-center justify-center 
    px-8 
    relative overflow-hidden
    bg-gradient-to-br 
    from-gray-200 via-white to-gray-300 
    dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
  "
          >
            {/* White glowing dot */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white rounded-full blur-3xl opacity-10 dark:opacity-20 pointer-events-none"></div>

            {/* Pattern overlay */}
            <div
              className="absolute inset-0 bg-[url('/background-pattern.svg')] bg-repeat opacity-5 dark:opacity-10 pointer-events-none"
              aria-hidden="true"
            />

            <ContactSection />
          </section>
        </main>
      )}
    </>
  );
}
