'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import background from "@/images/BG1.jpg";
import background2 from "@/images/ServiceBG1.jpg";
import background3 from "@/images/serviceBG2.jpg";
import background4 from "@/images/serviceBG3.jpg";
import Image from 'next/image';
import ContactCard from '@/components/ServiceContact';

const Page = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "start end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Parent variant with staggerChildren
  const staggerVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  // Child variant for individual text elements
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-[100vh] snap-y snap-mandatory overflow-y-scroll" ref={targetRef}>
      <section className="relative h-[100vh] flex items-center justify-center text-white  snap-start">
        <Image src={background} alt="Background Image for services" className="absolute w-[100vw] h-[100vh] z-0 " />
        <motion.div
          className="text-4xl items-center text-center justify-center absolute z-10 space-y-6"
          variants={staggerVariants}
          initial="initial"
          whileInView="animate"
        >
          <motion.div variants={textVariants}>
            <h1>Welcome To Our Services</h1>
          </motion.div>
          <motion.div variants={textVariants} className="text-lg text-center">
            <h3>High End is a general trading company based in the UAE. We specialize in importing high-quality products from around the world and distributing them to retailers within the UAE.</h3>
            
          </motion.div>
        </motion.div>
        
        
        
      </section>

      <section className="h-[100vh] flex items-center justify-center text-white bg-my_blue2 snap-start">
        <motion.div
          className="text-4xl flex justify-between space-x-10 mt-10"
          variants={staggerVariants}
          initial="initial"
          whileInView="animate"
        >
          <div className='flex-col flex space-y-10 items-center '>
          <motion.div  variants={textVariants}><h2 className='underline'>Global Product Importation</h2></motion.div>
          <motion.div  variants={textVariants}><h3 className='text-sm w-[45vw] text-my_gold'>We specialize in sourcing and importing a diverse range of high-quality products from international markets. Our extensive global network ensures that we bring the best products from around the world directly to the UAE, catering to the unique preferences and needs of our local market.</h3></motion.div>
          <motion.div variants={textVariants}>
             <ContactCard  />
          </motion.div>
          </div>
          <motion.div variants={textVariants}><Image src={background3} alt="Background Image for services" className=" w-[25vw] h-[73vh] rounded-md" /></motion.div>
        </motion.div>
      </section>

      <section className="h-[100vh] bg-black relative flex items-center justify-center text-white snap-start">
      <Image src={background2} alt="Background Image for services" className="absolute w-[100vw] h-[100vh] z-0 opacity-60" />
        <motion.div
          className="text-4xl items-center text-center justify-center absolute z-10 space-y-6"
          variants={staggerVariants}
          initial="initial"
          whileInView="animate"
        >
          <motion.div variants={textVariants}>
            <h1>Comprehensive Distribution Services</h1>
          </motion.div>
          <motion.div variants={textVariants} className="text-lg text-center px-6">
            <h3>Our expert team efficiently manages the distribution of imported goods across the UAE. We work closely with retailers to ensure that our products are readily available, maintaining a seamless supply chain that supports the growth and success of our retail partners."</h3>
            
          </motion.div>
        </motion.div>
      </section>

      <section className="h-[100vh] flex items-center justify-center text-white bg-black snap-start">
      <motion.div
          className="text-4xl flex justify-between space-x-10 mt-10"
          variants={staggerVariants}
          initial="initial"
          whileInView="animate"
        >
          <div className='flex-col flex space-y-10 items-center '>
          <motion.div  variants={textVariants}><h2 className='underline'>Reliable and Timely Delivery</h2></motion.div>
          <motion.div  variants={textVariants}><h3 className='text-sm w-[45vw] text-my_gold'>Meeting the demands of our retail partners is our top priority. We provide reliable and timely delivery services, ensuring that products arrive on schedule and in perfect condition. Our commitment to punctuality and efficiency helps our partners stay ahead in the competitive retail market.</h3></motion.div>
          <motion.div variants={textVariants}>
             <ContactCard  />
          </motion.div>
          </div>
          <motion.div variants={textVariants}><Image src={background4} alt="Background Image for services" className=" w-[25vw] h-[73vh] rounded-md" /></motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Page;
