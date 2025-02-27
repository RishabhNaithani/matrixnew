'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { TeamCard } from '../components';

const team = [
  {
    imgUrl: '/aman2.jpg',
    name: 'Aman Kumar',
    role: 'Founder & CEO',
    description: 'Visionary leader with expertise in robotics and automation.'
  },
  {
    imgUrl: '/arshad2.jpg',
    name: 'Arshad Khan',
    role: 'Co-Founder & CTO',
    description: 'Technical expert specializing in IoT and embedded systems.'
  },
  // Add more team members as needed
];

const TeamPage = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center mb-8">
        <h2 className={`${styles.sectionHeadText}`}>
          Our Team
        </h2>
      </div>

      <div className="mt-[50px] flex flex-wrap justify-center gap-[30px]">
        {team.map((member, index) => (
          <TeamCard 
            key={`team-member-${index}`}
            {...member}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default TeamPage; 