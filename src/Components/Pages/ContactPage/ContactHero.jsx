import React from 'react';
// import './ContactHero.css'; // Removed import
import contactHeroImg from '../../Images/aboutusimg.png'; // Using an existing image as a placeholder for now
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SectionHeading from '../../Shared/SectionHeading';

function HeroSection() {
  return (
    <div className="bg-gray-100 py-16 pt-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <SectionHeading title="Let's Talk Business" highlightWord="Business" textAlignment="left" className="!text-left !mb-4"/>
            <p className="text-lg text-gray-700 mb-8">
              When you start working with Green Yasin, you will get a devoted
              team of talented individuals who are eager to get started on the
              project.
            </p>
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <a href="#" className="text-gray-600 hover:text-emerald-500 transition-colors duration-300"><FaFacebook className="text-3xl" /></a>
              <a href="#" className="text-gray-600 hover:text-emerald-500 transition-colors duration-300"><FaTwitter className="text-3xl" /></a>
              <a href="#" className="text-gray-600 hover:text-emerald-500 transition-colors duration-300"><FaInstagram className="text-3xl" /></a>
              <a href="#" className="text-gray-600 hover:text-emerald-500 transition-colors duration-300"><FaLinkedin className="text-3xl" /></a>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-10 md:mt-0 flex justify-center hidden md:flex"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            <img src={contactHeroImg} alt="24/7 Customer Support" className="w-3/4 md:w-full max-w-md rounded-lg shadow-xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
