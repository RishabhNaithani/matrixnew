'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';

const achievements = [
  {
    id: 1,
    image: '/achieve.jpg',
    title: 'Achievement 1',
  },
  {
    id: 2,
    image: '/hack-n-win.jpg',
    title: 'hack-n-win',
  },
  {
    id: 3,
    image: '/ideathon.jpg',
    title: 'CGC Landran',
  },
  {
    id: 3,
    image: '/opju nif.jpg',
    title: 'OPJU NIF',
  },
];

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) => 
        prevIndex === achievements.length - 1 ? 0 : prevIndex + 1
      ),
      3000
    );

    return () => resetTimeout();
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === achievements.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? achievements.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-highlight mb-6 tracking-tight">
            Our Achievements
          </h2>
          <p className="text-text-dim text-lg md:text-xl max-w-3xl mx-auto">
            Celebrating our milestones and successes
          </p>
          <motion.div 
            className="h-1 w-24 bg-accent mx-auto rounded-full mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <div className="relative">
          <div className="absolute -inset-4 z-0">
            <div className="absolute top-0 left-0 w-24 h-24">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-transparent" />
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-accent to-transparent" />
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 transform rotate-90">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-transparent" />
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-accent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 w-24 h-24 transform -rotate-90">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-transparent" />
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-accent to-transparent" />
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24 transform rotate-180">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-transparent" />
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-accent to-transparent" />
            </div>

            <motion.div 
              className="absolute top-0 left-12 right-12 h-[2px]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="h-full bg-gradient-to-r from-transparent via-accent to-transparent" />
            </motion.div>
            <motion.div 
              className="absolute bottom-0 left-12 right-12 h-[2px]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="h-full bg-gradient-to-r from-transparent via-accent to-transparent" />
            </motion.div>
          </div>

          <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] rounded-xl overflow-hidden bg-secondary/20 backdrop-blur-sm">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundSize: '30px 30px'
              }} />
            </div>

            <div 
              className="absolute w-full h-full transition-transform duration-700 ease-out flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  className="min-w-full h-full relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      y: ['0%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      background: 'linear-gradient(to bottom, transparent, rgba(var(--accent-rgb), 0.2), transparent)',
                    }}
                  />

                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {achievement.title}
                      </h3>
                      <div className="h-1 w-24 bg-accent/70 rounded-full" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-accent/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-accent/40 transition-all z-20 group"
            >
              <motion.span whileHover={{ x: -4 }}>←</motion.span>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-accent/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-accent/40 transition-all z-20 group"
            >
              <motion.span whileHover={{ x: 4 }}>→</motion.span>
            </button>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
              {achievements.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative h-3 transition-all duration-300 ${
                    index === currentIndex ? 'w-12 bg-accent' : 'w-3 bg-white/50'
                  } rounded-full overflow-hidden`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements; 