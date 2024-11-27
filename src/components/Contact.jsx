import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="py-24 px-4 md:px-10 lg:px-20 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-stone-200 to-stone-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent text-center mb-12"
      >
        Get in Touch
      </motion.div>

      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/15 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center text-white/80">
              <FaEnvelope className="mr-4 text-xl" />
              <span>sahapritam2002@gmail.com</span>
            </div>
            <div className="flex items-center justify-center text-white/80">
              <FaPhone className="mr-4 text-xl" />
              <span>+91 8967360947</span>
            </div>
            <div className="flex items-center justify-center text-white/80">
              <FaMapMarkerAlt className="mr-4 text-xl" />
              <span>Purulia, West Bengal, India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;