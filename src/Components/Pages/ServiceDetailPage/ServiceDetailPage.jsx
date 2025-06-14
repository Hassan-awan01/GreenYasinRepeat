import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../../Shared/projectsData';
import { FaCheckCircle, FaPhoneAlt, FaEnvelope, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SubServiceDropdown from '../../Shared/SubServiceDropdown';
import SectionHeading from '../../Shared/SectionHeading';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const ServiceDetailPage = () => {
  const { categoryName } = useParams();
  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    const foundCategory = projectsData.find(
      (cat) => cat.category.toLowerCase().replace(/[^a-z0-9]+/g, '') === categoryName
    );
    setCurrentCategory(foundCategory);
    window.scrollTo(0, 0); // Scroll to top on page load
  }, [categoryName]);

  if (!currentCategory) {
    return <div className="global-container py-16 text-center text-gray-700">Service not found.</div>;
  }

  return (
    <div className="service-detail-page bg-gray-50 min-h-screen">
      {/* Hero Section for Service Detail Page */}
      <div
        className="relative h-[60vh] w-full bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${currentCategory.mainImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.h1
          className="relative z-10 text-5xl md:text-6xl font-bold text-center drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {currentCategory.category}
        </motion.h1>
      </div>

      <div className="global-container py-16 space-y-12">
        {/* Main Description Section */}
        <motion.section
          className="bg-white p-8 rounded-lg shadow-md"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <SectionHeading title="Overview" highlightWord="Overview" className="!mb-6"/>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">{currentCategory.mainDescription}</p>
        </motion.section>

        {/* Subservices (Projects) Section - Moved Here */}
        {currentCategory.projects && currentCategory.projects.length > 0 && (
          <motion.section
            className="bg-white p-8 rounded-lg shadow-md"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, ...sectionVariants.visible.transition }}
          >
            <SectionHeading title="Our Related Services" highlightWord="Services" className="!mb-6"/>
            <div className="grid grid-cols-1 gap-4">
              {currentCategory.projects.map((subProject, index) => (
                <SubServiceDropdown key={index} subProject={subProject} />
              ))}
            </div>
          </motion.section>
        )}

        {/* Examples of Services Section - Moved Down */}
        <motion.section
          className="bg-white p-8 rounded-lg shadow-md"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: currentCategory.projects && currentCategory.projects.length > 0 ? 0.4 : 0.2, ...sectionVariants.visible.transition }}
        >
          <SectionHeading title={currentCategory.examplesHeader} highlightWord={currentCategory.examplesHeader.split(' ').pop()} className="!mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCategory.examples.map((example, index) => (
              <motion.div
                key={index}
                className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-200"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: (currentCategory.projects && currentCategory.projects.length > 0 ? 0.4 : 0.2) + index * 0.1, ...itemVariants.visible.transition }}
              >
                <FaCheckCircle className="text-emerald-500 text-2xl mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{example.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* More Benefits Section - Moved Down */}
        <motion.section
          className="bg-white p-8 rounded-lg shadow-md"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: currentCategory.projects && currentCategory.projects.length > 0 ? 0.6 : 0.4, ...sectionVariants.visible.transition }}
        >
          <SectionHeading title={currentCategory.benefitsHeader} highlightWord={currentCategory.benefitsHeader.split(' ').pop()} className="!mb-6"/>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCategory.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-200"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: (currentCategory.projects && currentCategory.projects.length > 0 ? 0.6 : 0.4) + index * 0.1, ...itemVariants.visible.transition }}
              >
                <FaCheckCircle className="text-emerald-500 text-2xl mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* How Can We Help Section - Adjusted Delay */}
        <motion.section
          className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white p-8 rounded-lg shadow-xl text-center"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: currentCategory.projects && currentCategory.projects.length > 0 ? 0.8 : 0.6, ...sectionVariants.visible.transition }}
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-lg mb-6">Contact us today for expert assessment and advisory services tailored to your environmental needs.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center">
              <FaPhoneAlt className="text-emerald-200 text-2xl mr-3" />
              <span className="text-xl">+42 019 001 221</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-emerald-200 text-2xl mr-3" />
              <span className="text-xl">info@greenyasin.com</span>
            </div>
          </div>
          <Link
            to="/contact"
            className="mt-8 inline-block bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all hover:bg-gray-100 hover:scale-105"
          >
            Get In Touch Now
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default ServiceDetailPage; 