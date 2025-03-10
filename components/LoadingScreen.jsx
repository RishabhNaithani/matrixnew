'use client';

import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <div className="relative w-[300px] h-[300px] flex items-center justify-center">
        {/* Outer rotating circle */}
        <div className="absolute w-full h-full border border-white/20 rounded-full animate-spin-slow">
          <div className="absolute top-0 left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Inner rotating circle */}
        <div className="absolute w-2/3 h-2/3 border border-white/40 rounded-full animate-spin-reverse">
          <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-white rounded-full transform -translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Center content */}
        <div className="relative text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <img
              src="/your-logo.png" // Add your logo path
              alt="Logo"
              className="w-16 h-16 mx-auto invert"
            />
          </motion.div>
          
          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="text-white text-xl font-bold mb-2">Loading</div>
            {/* Loading bar */}
            <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "linear"
                }}
                className="w-full h-full bg-white"
              />
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              transform: `rotate(${i * 30}deg) translateY(-140px)`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 