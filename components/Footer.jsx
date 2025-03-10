'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import Link from 'next/link';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => {
  const contactInfo = {
    email: "matrixhive.info@gmail.com",
    phones: ["+91 82786 96121", "+91 95011 38548"]
  };

  return (
    <footer className="bg-primary/30 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-highlight mb-2">MatrixHive Innovations</h3>
              <div className="h-1 w-20 bg-accent rounded-full"/>
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-xl font-semibold text-highlight mb-4">Contact Us</h4>
              
              {/* Email */}
              <motion.div 
                className="flex items-center mb-4 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <svg 
                  className="w-5 h-5 text-accent mr-3 group-hover:text-highlight transition-colors duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <Link 
                  href={`mailto:${contactInfo.email}`}
                  className="text-text-light hover:text-highlight transition-colors duration-300"
                >
                  {contactInfo.email}
                </Link>
              </motion.div>

              {/* Phone Numbers */}
              <div className="space-y-2">
                {contactInfo.phones.map((phone, index) => (
                  <motion.div 
                    key={phone}
                    className="flex items-center group"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <svg 
                      className="w-5 h-5 text-accent mr-3 group-hover:text-highlight transition-colors duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <Link 
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="text-text-light hover:text-highlight transition-colors duration-300"
                    >
                      {phone}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-text-light/60">
            © {new Date().getFullYear()} MatrixHive. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-primary to-transparent opacity-50"/>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"/>
    </footer>
  );
};

export default Footer;
