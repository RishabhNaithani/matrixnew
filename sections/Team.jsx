'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const teamData = [
  {
    id: 1,
    name: "Arshad Mew",
    role: "CTO",
    description: "Technical expert specializing in cloud architecture and system design.",
    image: "/image-31@2x.png",
    linkedin: "https://www.linkedin.com/in/mohd-arshad-mew-4120a1209/"
  },
  {
    id: 2,
    name: "Arshad Mew",
    role: "CTO",
    description: "Technical expert specializing in cloud architecture and system design.",
    image: "/image-31@2x.png",
    linkedin: "https://www.linkedin.com/in/mohd-arshad-mew-4120a1209/"
  },
  {
    id: 3,
    name: "amandeep",
    role: "Lead Developer",
    description: "Full-stack developer with expertise in modern web technologies.",
    image: "/aman2.jpg",
    linkedin: "https://www.linkedin.com/in/aman-deep-0b76a821b/"
  },
  {
    id: 4,
    name: "Dr. Pardeep Jindal",
    role: "Director and Mentor",
    description: "Creative designer crafting intuitive and engaging user experiences.",
    image: "/team/sai-krishna.jpg",
    linkedin: "https://www.linkedin.com/in/dr-pardeep-kumar-jindal-1bb1b1217/"
  },
 
];

const Team = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-primary animate-gradient opacity-70" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-highlight mb-6 tracking-tight">
            Meet Our Team
          </h2>
          <p className="text-text-dim text-lg md:text-xl max-w-3xl mx-auto">
            The innovative minds behind MatrixHive's success
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto"
        >
          {teamData.map((member, index) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(member.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group max-w-sm mx-auto w-full"
            >
              <div className="absolute inset-0 bg-accent rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative bg-secondary/30 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10">
                {/* Member Image */}
                <motion.div
                  className="relative h-96 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
                  
                  {/* Member Info Overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredCard === member.id ? 1 : 0,
                      y: hoveredCard === member.id ? 0 : 20
                    }}
                    className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary/90"
                  >
                    <h3 className="text-3xl font-bold text-highlight">
                      {member.name}
                    </h3>
                    <p className="text-text-light font-medium mt-2 text-lg">
                      {member.role}
                    </p>
                  </motion.div>
                </motion.div>

                {/* Member Description */}
                <div className="p-8">
                  <p className="text-text-dim text-base leading-relaxed mb-8">
                    {member.description}
                  </p>

                  {/* Connect Button */}
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-accent hover:bg-highlight text-white w-full py-4 rounded-lg text-sm uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors duration-300"
                  >
                    <span>Connect</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button 
            onClick={scrollToContact}
            className="tesla-button inline-flex items-center space-x-2 text-lg cursor-pointer"
          >
            <span>Join Our Team</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Team; 