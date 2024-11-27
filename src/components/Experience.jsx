import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, Calendar, ArrowUpRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'BeatFantasy Technologies',
      role: 'Software Engineer Intern',
      duration: 'May 2024 - October 2024',
      description: 'Developed full-stack solutions for mobile and web platforms, focusing on AI-driven features and performance optimization.',
      achievements: [
        'Designed AI Teams flow using React Native with 30% increase in user engagement',
        'Developed APIs for match, player, and individual stats pages with Next.js server-side rendering',
        'Built Expert Teams flow with 20% improvement in user satisfaction scores',
        'Integrated REST APIs using Express.js and PostgreSQL with optimized data fetching'
      ]
    },
    
  ];

  return (
    <div className='pb-24 mx-4 md:mx-10 lg:mx-20'>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-stone-200 to-stone-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent text-center mb-12"
      >
        Professional Experience
      </motion.div>
      <div className='flex flex-col items-center space-y-6'>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className='w-full max-w-3xl bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden relative'
          >
            <div className='absolute top-0 right-0 p-4 opacity-20'>
              <BriefcaseBusiness size={80} strokeWidth={1} />
            </div>
            
            <div className='relative z-10'>
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h3 className='text-2xl font-bold text-white mb-1 tracking-tight flex items-center'>
                    {exp.role}
                    <ArrowUpRight className='ml-2 text-white/60' size={20} />
                  </h3>
                  <div className='text-white/70 flex items-center space-x-2'>
                    <BriefcaseBusiness size={16} className='text-white/50' />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className='flex items-center text-white/60'>
                  <Calendar size={16} className='mr-2' />
                  <span className='text-sm'>{exp.duration}</span>
                </div>
              </div>
              
              <p className='text-white/90 mb-4 leading-relaxed'>
                {exp.description}
              </p>
              
              <div className='mt-4'>
                <h4 className='text-lg font-semibold text-white/80 mb-2'>Key Achievements</h4>
                <ul className='space-y-1'>
                  {exp.achievements.map((achievement, achIndex) => (
                    <li 
                      key={achIndex} 
                      className='text-white/70 text-sm flex items-center'
                    >
                      <span className='mr-2 text-white/50'>•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;