'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { fadeIn } from '../utils/motion';

const OfferingCard = ({ imgUrl, title, description, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4 bg-[#1E1E1E] rounded-[20px] p-6 min-h-[250px]"
  >
    <div className="relative md:w-[270px] w-full h-[250px] rounded-[20px] overflow-hidden">
      <Image
        src={imgUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-[20px]"
        loading="lazy"
      />
    </div>

    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

OfferingCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default OfferingCard;
