'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';

const Contact = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto`}
    >
      <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
        {/* Contact Information */}
        <div className="flex-1 w-full">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-[32px] md:text-[40px] text-[#183282] mb-8"
          >
            Get in Touch
          </motion.h2>
          
          <div className="space-y-6">
            {/* Email */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#183282]/10 flex items-center justify-center group-hover:bg-[#183282]/20 transition-all duration-300">
                <img src="/email-icon.svg" alt="email" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[#183282] font-semibold text-xl">Email</h3>
                <a href="mailto:contact@matrixhive.com" className="text-[#183282]/70 hover:text-[#183282] transition-colors">
                  contact@matrixhive.com
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#183282]/10 flex items-center justify-center group-hover:bg-[#183282]/20 transition-all duration-300">
                <img src="/phone-icon.svg" alt="phone" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[#183282] font-semibold text-xl">Phone</h3>
                <a href="tel:+1234567890" className="text-[#183282]/70 hover:text-[#183282] transition-colors">
                  +91 1234567890
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#183282]/10 flex items-center justify-center group-hover:bg-[#183282]/20 transition-all duration-300">
                <img src="/location-icon.svg" alt="location" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[#183282] font-semibold text-xl">Location</h3>
                <p className="text-[#183282]/70">Raipur, Chhattisgarh, India</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 w-full bg-white/10 rounded-[24px] p-8 backdrop-blur-sm"
        >
          <form className="space-y-6">
            <div>
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#183282]/20 focus:border-[#183282] outline-none text-[#183282] placeholder:text-[#183282]/50 transition-all duration-300"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#183282]/20 focus:border-[#183282] outline-none text-[#183282] placeholder:text-[#183282]/50 transition-all duration-300"
              />
            </div>
            <div>
              <textarea 
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#183282]/20 focus:border-[#183282] outline-none text-[#183282] placeholder:text-[#183282]/50 transition-all duration-300 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-[#183282] text-white rounded-lg hover:bg-[#183282]/90 transition-all duration-300 font-medium"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Contact; 