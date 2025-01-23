import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectImage1 from '../assets/projects/project-1.webp';
import projectImage2 from '../assets/projects/project-2.webp';
import projectImage3 from "../assets/projects/project-3.webp";
const Projects = () => {
  const projects = [
    {
      title: 'TripTactix - AI Trip Planner',
      technologies: ['React Native', 'Firebase', 'Google Gemini AI', 'Zustand'],
      description: 'A mobile application that provides personalized trip planning with seamless authentication, over 1,000 location suggestions, and dynamic visual experiences.',
      githubLink: 'https://github.com/pritamsaha07/ai-travel-planner',
      liveLink: 'https://drive.google.com/file/d/1pG7Hz5pZmjCBkRJMU5tmL7RGDpglwjeQ/view?usp=drivesdk',
      image: projectImage1,
      keyFeatures: [
        'Firebase authentication',
        'Google Maps and Gemini AI integration',
        'Zustand state management',
        'AdMob monetization'
      ]
    },
    {
      title: 'Automated Data Extraction & Invoice Management',
      technologies: ['Google Gemini AI', 'Firebase', 'Zustand', 'Express.Js','React.js'],
      description: 'An intelligent data extraction platform that processes Excel, PDF, and image files, organizing information into structured tabs with AI-powered accuracy.',
      githubLink: 'https://github.com/pritamsaha07/document-extractor',
      liveLink: 'https://document-extractor-web-application-9mxd.onrender.com/',
      image: projectImage2,
      keyFeatures: [
        'Multi-format file extraction',
        'Real-time data synchronization',
        'AI-powered data processing',
        'Secure Firebase storage'
      ]
    },
    {
      title: 'Automated Invoice Companion',
      technologies: ['Zapier', 'Express.Js','React.js'],
      description: 'A streamlined solution for managing invoices with Google OAuth integration, allowing users to upload, transform, and view Excel files as JSON data, while automating reminders and leveraging Zapier for enhanced workflow efficiency.',
      githubLink: 'https://github.com/pritamsaha07/email_auto_reminder_',
      
      image: projectImage3,
      keyFeatures: [
        'Google Login',
        'Auto Email Reminders using Zapier',
        'Excel to JSON',
        'Intuitive Dashboard',
        
      ]
    }
  ];

  // ... rest of the existing component code remains the same
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      x: (index) => (index % 2 === 0 ? -50 : 50)
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
      transition: {
        type: "tween",
        duration: 0.3
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
        Projects
      </motion.div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className='flex flex-col items-center space-y-8'
      >
        <AnimatePresence>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover="hover"
              className='w-full max-w-4xl bg-white/10 backdrop-blur-lg border border-white/15 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row'
            >
              {/* Image Section */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  delay: 0.2 
                }}
                className='w-full md:w-1/3 h-48 md:h-auto overflow-hidden'
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className='w-full h-full object-cover'
                />
              </motion.div>

              {/* Project Details Section */}
              <div className='w-full md:w-2/3 p-6 flex flex-col justify-between'>
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className='text-2xl font-bold text-white mb-3'
                  >
                    {project.title}
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className='flex flex-wrap gap-2 mb-4'
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className='bg-white/20 text-white px-2 py-1 rounded-md text-xs font-medium'
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className='text-white/90 mb-4 leading-relaxed'
                  >
                    {project.description}
                  </motion.p>

                  {project.keyFeatures && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.3 }}
                      className='mb-4'
                    >
                      <h4 className='text-white/80 font-semibold mb-2'>Key Features:</h4>
                      <ul className='list-disc list-inside text-white/70 text-sm'>
                        {project.keyFeatures.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className='flex space-x-4'
                >
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center text-white/80 hover:text-white transition-colors'
                  >
                    <FaGithub className='mr-2 text-xl' /> GitHub
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='flex items-center text-white/80 hover:text-white transition-colors'
                    >
                      <FaExternalLinkAlt className='mr-2 text-lg' /> Demo
                    </a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Projects;