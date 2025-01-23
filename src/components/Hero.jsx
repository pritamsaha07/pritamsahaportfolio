import React from 'react';
import { motion } from 'framer-motion';
import profilepic from "../assets/WhatsApp Image 2025-01-24 at 01.05.18_b279a798.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React.js, Next.js, React Native and Typescript, as well as back-end technologies like Express.js, MySQL, and Firebase. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:p-20">
            <motion.img
              src={profilepic}
              alt="Pritam Saha"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="border border-stone-900 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pb-2 text-4xl tracking-tight lg:text-8xl"
            >
              Pritam Saha
            </motion.h2>
            
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              href="https://drive.google.com/file/d/1eWti9jAUbuigUOCy4bmn6Al7IALSw_XS/view?usp=drive_link"
              
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 shadow-md hover:shadow-lg transition-shadow"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;