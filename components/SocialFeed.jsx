'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SocialFeed = () => {
  const [sectionRef, inView] = useInView({
    threshold: 0.2,
  });

  const linkedinPosts = [
    {
      text: 'We are excited to showcase our latest progress in robotics!',
      date: 'Feb 28, 2025',
      url: 'https://www.linkedin.com/company/matrixhive.in/posts/?feedView=all',
      media: {
        type: 'video',
        src: '/linkedinVideo.mp4',
        alt: 'MatrixHive Project Sneak Peek',
      },
    },
  ];

  const slideVariants = (direction) => ({
    hidden: {
      x: direction === 'left' ? -100 : 100,
      opacity: 0,
      filter: 'blur(5px)',
    },
    visible: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  });

  return (
    <section ref={sectionRef} className="relative z-10 overflow-hidden">
      <div className="flex flex-col lg:flex-row">

        {/* LinkedIn Section */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={slideVariants('left')}
          className="w-full lg:w-1/2 min-h-screen bg-secondary/30 p-6 md:p-12 lg:p-20 flex items-center"
        >
          <div className="max-w-xl mx-auto w-full">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-4xl font-bold text-highlight mb-4">LinkedIn</h3>
              <motion.div
                className="h-1 bg-accent rounded-full"
                initial={{ width: 0 }}
                animate={inView ? { width: '80px' } : { width: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
            </motion.div>

            <div className="space-y-6">
              {linkedinPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: 0.2 * (index + 1) }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-300"
                >
                  <p className="text-text-light text-lg mb-4">{post.text}</p>

                  {post.media?.type === 'video' && (
                    <div className="mb-4 rounded-xl overflow-hidden">
                      <video controls className="w-full h-auto rounded-xl">
                        <source src={post.media.src} type="video/mp4" />
                        <track
                          kind="captions"
                          srcLang="en"
                          src="/path/to/captions.vtt"
                          label="English captions"
                        />
                        Your browser does not support the video tag.
                      </video>

                    </div>
                  )}

                  <div className="flex justify-between items-center mt-4">
                    <p className="text-text-dim text-sm">{post.date}</p>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-accent hover:text-highlight transition-colors duration-300 group"
                    >
                      <span>View Post</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Instagram Section */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={slideVariants('right')}
          className="w-full lg:w-1/2 min-h-screen bg-primary/50 p-6 md:p-12 lg:p-20 flex items-center"
        >
          <div className="max-w-xl mx-auto w-full">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-4xl font-bold text-highlight mb-4">Instagram</h3>
              <motion.div
                className="h-1 bg-accent rounded-full"
                initial={{ width: 0 }}
                animate={inView ? { width: '80px' } : { width: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-accent/30 transition-all duration-300"
            >
              <iframe
                src="https://www.instagram.com/matrixhive.innovations/embed"
                height="600"
                width="100%"
                frameBorder="0"
                scrolling="no"
                title="Instagram Feed"
                className="rounded-xl"
                style={{ backgroundColor: 'transparent' }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialFeed;
