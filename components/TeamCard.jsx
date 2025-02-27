'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const TeamCard = ({ imgUrl, name, role, description }) => (
  <motion.div
    variants={fadeIn('up', 'spring', 0.5, 1)}
    className="flex flex-col gap-4 bg-[#1E1E1E] rounded-[20px] p-6 w-[300px]"
  >
    <img
      src={imgUrl}
      alt={name}
      className="w-full h-[300px] rounded-[20px] object-cover"
    />
    <div className="flex flex-col">
      <h4 className="font-bold text-[24px] text-white">
        {name}
      </h4>
      <p className="text-[18px] text-secondary-white">
        {role}
      </p>
      <p className="mt-[8px] font-normal text-[14px] text-secondary-white">
        {description}
      </p>
    </div>
  </motion.div>
);

export default TeamCard; 