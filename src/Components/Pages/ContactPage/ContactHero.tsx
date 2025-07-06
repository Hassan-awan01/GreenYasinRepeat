// import React from 'react';
// import './ContactHero.css'; // Removed import
import contactHeroImg from '../../Images/aboutusimg.png'; // Using an existing image as a placeholder for now
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SectionHeading from '../../Shared/SectionHeading';
// import OptimizedImage from '@/Components/Shared/OptimizedImage';

function HeroSection() {
  return (
    <div className="bg-gray-100 py-16 pt-40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <SectionHeading
              title="Let's Talk Business"
              highlightWord="Business"
              textAlignment="left"
              className="!mb-4 !text-left"
            />
            <p className="mb-8 text-lg text-gray-700">
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
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-emerald-500"
              >
                <FaFacebook className="text-3xl" />
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-emerald-500"
              >
                <FaTwitter className="text-3xl" />
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-emerald-500"
              >
                <FaInstagram className="text-3xl" />
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-emerald-500"
              >
                <FaLinkedin className="text-3xl" />
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-10 flex justify-center md:mt-0 md:flex"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            <img
              src={contactHeroImg}
              alt="24/7 Customer Support"
              className="w-3/4 max-w-md rounded-lg shadow-xl md:w-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
