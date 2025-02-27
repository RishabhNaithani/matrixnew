'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| About Matrixhive Innovations"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-[#183282]"
      >
        At <span className="font-extrabold"> Matrixhive Innovations </span> we are passionate about pushing the boundaries of technology. Specializing in robotics, IoT, AI, and cutting-edge automation, we develop innovative solutions that bridge the gap between hardware and software. Our mission is to create intelligent systems that enhance efficiency, improve daily life, and drive the future of technology. With a focus on  <span className="font-extrabold">research and development</span>, we turn ambitious ideas into reality, empowering businesses and individuals with smart, scalable solutions.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px] animate-bounce"
      />
    </motion.div>
  </section>
);

export default About;
