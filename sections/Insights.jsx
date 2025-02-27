'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';

const teamMembers = [
  {
    imgUrl: '/aman2.jpg',
    title: 'Aman Kumar Sahu',
    subtitle: 'Founder & CEO',
    bio: 'Passionate tech innovator and entrepreneur. Leading MatrixHive with a vision to revolutionize robotics and automation solutions. Expertise in robotics, IoT, and AI.'
  },
  {
    imgUrl: '/arshad2.jpg',
    title: 'Arshad Khan',
    subtitle: 'Co-Founder & CTO',
    bio: 'Technical expert with deep knowledge in software architecture and robotics. Driving innovation through cutting-edge technology solutions and system design.'
  },
  {
    imgUrl: '/prem2.png',
    title: 'Prem Kumar',
    subtitle: 'Technical Lead',
    bio: 'Skilled developer and technical strategist. Specializes in implementing complex robotics solutions and leading technical development teams.'
  },
  {
    imgUrl: '/people-01.png', // Replace with actual image path for Rishabh
    title: 'Rishabh',
    subtitle: 'Technical Team Member',
    bio: 'Expert in robotics development and automation systems. Contributing to innovative solutions in mechanical and electronic design.'
  },
  {
    imgUrl: '/people-02.png', // Replace with actual image path for Pardeep
    title: 'Pardeep',
    subtitle: 'Technical Team Member',
    bio: 'Specialized in software development and system integration. Bringing expertise in creating efficient and scalable technical solutions.'
  }
];

const InsightCard = ({ imgUrl, title, subtitle, bio, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex flex-col gap-4 bg-white/10 rounded-[24px] p-4 hover:bg-white/20 transition-all duration-500"
  >
    <div 
      className="relative w-full h-[280px] sm:h-[300px] md:h-[320px] overflow-hidden rounded-[20px] group 
      cursor-pointer touch-manipulation"
    >
      <img 
        src={imgUrl} 
        alt={title}
        className="absolute w-full h-full object-cover object-top rounded-[20px] transition-all duration-700 ease-in-out group-hover:scale-110 
        group-active:scale-110 sm:group-hover:scale-110"
      />
      {/* Mobile-friendly overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/90 
        translate-y-full transition-all duration-700 ease-in-out rounded-[20px]
        group-hover:translate-y-0 group-active:translate-y-0 sm:group-hover:translate-y-0
        [@media(hover:none)]:group-active:translate-y-0"
      >
        <div 
          className="absolute inset-0 p-6 flex items-center justify-center
          transform translate-y-[50px] group-hover:translate-y-0 group-active:translate-y-0
          sm:group-hover:translate-y-0 transition-transform duration-700 ease-in-out"
        >
          <div className="text-center">
            <p className="text-white text-[14px] sm:text-[16px] font-medium leading-relaxed">
              {bio}
            </p>
            <div className="w-20 h-1 bg-white/60 mx-auto mt-4 rounded-full" />
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center text-center">
      <h4 className="font-bold text-[20px] sm:text-[24px] md:text-[28px] text-[#183282]
        transition-all duration-500 ease-in-out group-hover:text-[#183282]/80">
        {title}
      </h4>
      <p className="mt-[8px] font-medium text-[14px] sm:text-[16px] text-[#183282]/70">
        {subtitle}
      </p>
    </div>
  </motion.div>
);

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <h2 className="text-center font-bold text-[32px] md:text-[40px] text-[#183282] mb-8">
        Our Team
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {teamMembers.map((item, index) => (
          <InsightCard key={index} {...item} index={index} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
