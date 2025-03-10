'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Footer } from '../components';
import { About, Explore, Hero, Team, Achievements } from '../sections';
import SocialFeed from '../components/SocialFeed';
import LoadingScreen from '../components/LoadingScreen';

const darkTechGradient = `
  bg-gradient-to-br 
  from-[#0A192F] 
  via-[#112240] 
  to-[#233554]
  opacity-90
`;

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="bg-primary min-h-screen">
          <div className="fixed inset-0 bg-[#0A192F]" />
          <div className="relative z-10">
            <Hero />
            <About />
            <Explore />
            <Team />
            <SocialFeed />
            <Achievements />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
