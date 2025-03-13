'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-4 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01 bg-[#FDD20D]" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between items-center`}>
      <div className="relative flex items-center">
        <motion.img
          src="/logobg.png"
          alt="MatrixHive Logo"
          className="w-[300px] h-[100px] object-contain object-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain cursor-pointer"
      />
    </div>
  </motion.nav>
);

export default Navbar;
