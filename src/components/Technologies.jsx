import React from 'react';
import { motion } from 'framer-motion';
import {
  RiReactjsLine,
  RiNextjsLine
} from "react-icons/ri";
import {
  SiExpress,
  SiMysql,
  SiFirebase,
  SiTypescript,
  SiTailwindcss
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Technologies = () => {
  const technologies = [
    { icon: RiReactjsLine, color: 'text-cyan-400', name: 'React.js' },
    { icon: RiNextjsLine, color: 'text-white', name: 'Next.js' },
    { icon: TbBrandReactNative, color: 'text-blue-500', name: 'React Native' },
    { icon: SiTypescript, color: 'text-blue-600', name: 'TypeScript' },
    { icon: SiExpress, color: 'text-gray-500', name: 'Express.js' },
    { icon: SiMysql, color: 'text-blue-700', name: 'MySQL' },
    { icon: SiFirebase, color: 'text-yellow-500', name: 'Firebase' },
    { icon: SiTailwindcss,  color: 'text-teal-400', name: 'Tailwind CSS' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className='pb-24 mx-4 md:mx-10 lg:mx-20'>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-stone-200 to-stone-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent text-center mb-12"
      >
        Technologies
      </motion.div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className='flex flex-wrap items-center justify-center gap-8 px-4'
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            className='flex flex-col items-center p-4 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-white/10 transition-all duration-300'
            title={tech.name}
          >
            <div className='mb-2 p-3 bg-white/10 rounded-full'>
              <tech.icon className={`text-6xl ${tech.color}`} />
            </div>
            <span className='text-sm text-white/80 font-medium'>{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Technologies;