'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-4 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-4`}>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h4 className="font-bold md:text-[48px] text-[32px] text-[#183282]">
          Thank you!
        </h4>
      </div>

      <div className="flex flex-col">
        <div className="mb-[30px] h-[1px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-3">
          <h4 className="font-extrabold text-[20px] text-[#183282]">
            Company name 
          </h4>
          <p className="font-normal text-[12px] text-[#183282] opacity-50">
            Copyright © 2024 - 2025 Company name Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex gap-4 p-2 border border-[#183282] rounded-full bg-[#183282] shadow-lg">
            {socials.map((social) => (
              <a key={social.name} href={social.link}>
                <img
                  src={social.url}
                  alt={social.name}
                  className="w-[20px] h-[20px] object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
