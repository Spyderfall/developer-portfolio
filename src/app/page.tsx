'use client';

import { useEffect, useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import Header from '@/components/Header';
import TypingTitle from '@/components/TypingTitle';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
      setShowHeader(true);
    }, 3000); // show splash for 3 seconds

    return () => clearTimeout(splashTimeout);
  }, []);

  const handleLogoClick = () => {
    // If you want to skip splash next time, save flag in localStorage
    localStorage.setItem('splashSeen', 'true');
    setShowSplash(false);
    setShowHeader(true);
  };

  useEffect(() => {
    // Check if splash already seen
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
        <main
          className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth"
          style={{ scrollSnapType: 'y mandatory' }}
        >
          <section
            id="home"
            className="h-screen snap-start flex items-center justify-center px-8"
          >
            <div className="flex items-center gap-x-20">
              {/* Intro Text */}
              <div className="text-left transform -translate-x-4">
                <p className="text-lg">Hello, I'm</p>
                <TypingTitle fullText="Sagar Adulkar" />
                <p className="text-lg">An enthusiastic full stack developer</p>
                <p className="text-sm mt-2 text-gray-500">Based in Earth 🌍</p>
              </div>

              {/* Profile Image */}
              <div className="transform translate-x-4">
                <img
                  src="/profile.jpg"
                  alt="John Doe"
                  className="w-48 h-48 object-cover rounded-full shadow-lg"
                />
              </div>
            </div>
          </section>


          <section
            id="about"
            className="snap-start h-screen flex items-center justify-center bg-gray-50"
          >
            <h2 className="text-3xl font-bold">About Section</h2>
          </section>

          <section
            id="projects"
            className="snap-start h-screen flex items-center justify-center"
          >
            <h2 className="text-3xl font-bold">Projects Section</h2>
          </section>

          <section
            id="contact"
            className="snap-start h-screen flex items-center justify-center bg-gray-50"
          >
            <h2 className="text-3xl font-bold">Contact Section</h2>
          </section>

        </main>
      )}
    </>
  );
}
