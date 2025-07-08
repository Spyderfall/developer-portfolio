'use client';

import { useEffect, useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import Header from '@/components/Header';
import TypingTitle from '@/components/TypingTitle';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SocialSidebar from '@/components/SocialSidebar';
import HeroBackground from '@/components/HeroBackground';

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
      {showHeader && (
        <>
          <Header onClick={handleLogoClick} />
          <SocialSidebar />
        </>
      )}
      {!showSplash && (
        <main className="h-screen overflow-y-scroll scroll-smooth">
          {/* Home */}
          <section
            id="home"
            className="
    relative overflow-hidden
    min-h-screen flex items-center justify-center px-8
    bg-[#F5F7FA] dark:bg-[#0f0f0f]
  "
          >
            <HeroBackground />

            <div className="flex flex-col md:flex-row items-center gap-x-20 relative z-10">
              <div className="text-left transform -translate-x-4 max-w-xl">
                <p className="text-lg text-gray-800 dark:text-gray-300 mb-2 tracking-wide">
                  Hello, I&apos;m
                </p>

                <TypingTitle
                  className="text-6xl sm:text-7xl leading-tight text-gray-900 dark:text-white"
                  fullText="Sagar Adulkar"
                />
                {/* <HackerTextCycler /> */}
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 font-medium tracking-wide">
                  Enthusiastic Full Stack Developer.
                </p>

                <p className="text-base text-gray-600 dark:text-gray-400 mb-8 max-w-md">
                  Engineering software that bridges ideas, people, and technology.
                </p>

                <div className="mt-6">
                  <button
                    onClick={() => {
                      const el = document.getElementById('contact');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="
    inline-block px-6 py-3 border border-indigo-600 rounded-full
    text-indigo-600 dark:text-indigo-400 font-medium
    hover:bg-indigo-600 hover:text-white
    dark:hover:bg-indigo-500 dark:hover:text-white
    transition-colors duration-300
  "
                  >
                    Let&apos;s Connect
                  </button>
                </div>
              </div>

              {/* <div className="transform translate-x-4 relative group">
                <img
                  src="/profile.jpg"
                  alt="Sagar Adulkar"
                  className="
          w-52 h-52 object-cover rounded-full shadow-2xl
          transform transition duration-500 group-hover:scale-105
        "
                />
              </div> */}
            </div>
          </section>



          {/* About */}
          <section
            id="about"
            className="min-h-screen flex items-center justify-center px-8
                       bg-[#F9FAFB] dark:bg-[#121212]"
          >
            <AboutSection />
          </section>

          {/* Experience */}
          <section id="experience" className=" px-8 py-32 bg-[#F9FAFB] dark:bg-[#121212]">
            <ExperienceSection />
          </section>

          {/* Projects (uncomment when ready) */}
          {/* {[0, 1, 2, 3].map((idx) => (
            <section
              key={idx}
              id={`project-${idx + 1}`}
              className="flex items-center justify-center py-6
                         bg-[#F4F4F5] dark:bg-[#181818]"
            >
              <ProjectsSection projectIndex={idx} />
            </section>
          ))} */}

          {/* Contact */}
          <section
            id="contact"
            className="
    py-48 flex items-center justify-center 
    px-8 
    relative overflow-hidden
    bg-gray-100 dark:bg-[#101010]
  "
          >
            {/* 👇 Blur BLOB REMOVED for test */}
            {/* <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white rounded-full blur-3xl opacity-10 dark:opacity-20 pointer-events-none"></div> */}

            <ContactSection />
          </section>

          <Footer />
        </main>
      )}
    </>
  );
}
