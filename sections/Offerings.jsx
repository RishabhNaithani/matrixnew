'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { OfferingCard } from '../components';

const offerings = [
  {
    id: 'offering-1',
    imgUrl: '/IoT.webp',
    title: 'IoT Solutions',
    description: 'Smart solutions for connected devices and automation systems.'
  },
  {
    id: 'offering-2',
    imgUrl: '/robotImage.jpg',
    title: 'Robotics',
    description: 'Advanced robotics solutions for industrial automation.'
  },
  {
    id: 'offering-3',
    imgUrl: '/3dDesign.jpg',
    title: '3D Design',
    description: 'Professional 3D modeling and design services.'
  },
  {
    id: 'offering-4',
    imgUrl: '/stemKit.webp',
    title: 'STEM Education',
    description: 'Educational kits and programs for technology learning.'
  },
];

const Offerings = () => (
  <section className={`${styles.paddings}`} id="offerings">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="mt-[50px] flex flex-col gap-[30px]">
        <div className="flex justify-center">
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Our Offerings
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          {offerings.map((item, index) => (
            <OfferingCard
              key={`offering-${index}`}
              {...item}
              index={index + 1}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

export default Offerings; 