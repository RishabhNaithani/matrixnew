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
        <h2 className="text-center font-bold text-[32px] md:text-[40px] text-[#183282] mb-8">
          Our Achievements
        </h2>

        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl">
          <div 
            className="absolute w-full h-full transition-transform duration-500 ease-out flex"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className="min-w-full h-full relative"
              >
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {achievement.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
          >
            →
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements; 