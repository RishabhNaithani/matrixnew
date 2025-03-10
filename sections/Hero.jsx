'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      {/* Background Video or Image */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.6)' }}
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-wider">
            MATRIX HIVE
          </h1>
          <p className="text-xl md:text-2xl tracking-wide max-w-2xl mx-auto">
            Innovating the future through technology and creativity
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <button className="tesla-button text-lg">
              Discover More
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
