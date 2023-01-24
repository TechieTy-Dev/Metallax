'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav variants={navVariants} initial="hidden" whileInView="show" className={`${styles.xPaddings} py-8 relative z-10`}>
    <div className="absolute w-[50%] inset-0 gradient-01"/>
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <img src="/menu.svg" alt="menu icon" className=" object-contain rotate-180 transform -scale-y-100 cursor-pointer"/>
        <h2 className="font-extrabold text-[2rem] text-white leading-[30px] z-10">
          Metallax
        </h2>
      <img src="/search.svg" alt="Search" className="w-[18px] h-[18px] object-contain cursor-pointer"/>
    </div>
  </motion.nav>
);

export default Navbar;
