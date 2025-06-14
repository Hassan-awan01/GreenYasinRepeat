import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../../Shared/projectsData';
import { FaCheckCircle, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SectionHeading from '../../Shared/SectionHeading';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const SubServiceDetailPage = () => {
  const { categoryName, subServiceTitle } = useParams();
  const [currentSubService, setCurrentSubService] = useState(null);
  const [parentCategory, setParentCategory] = useState(null);

  useEffect(() => {
    const foundCategory = projectsData.find(
      (cat) => cat.category.toLowerCase().replace(/[^a-z0-9]+/g, '') === categoryName
    );

    if (foundCategory) {
      setParentCategory(foundCategory);
      const foundSubService = foundCategory.projects.find(
        (sub) => sub.title.toLowerCase().replace(/[^a-z0-9]+/g, '') === subServiceTitle
      );
      setCurrentSubService(foundSubService);
    }
    window.scrollTo(0, 0); // Scroll to top on page load
  }, [categoryName, subServiceTitle]);

  if (!currentSubService) {
    return <div className="global-container py-16 text-center text-gray-700">Sub-service not found.</div>;
  }

  return (
    <div className="sub-service-detail-page bg-gray-50 min-h-screen">
      {/* Sub-Service Hero Section */}
      <div
        className="relative h-[60vh] w-full bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${currentSubService.image})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.h1
          className="relative z-10 text-5xl md:text-6xl font-bold text-center drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {currentSubService.title}
        </motion.h1>
      </div>

      <div className="global-container py-16 space-y-12">
        {/* Breadcrumbs */}
        <div className="text-gray-600 mb-8">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          {parentCategory && (
            <>
              <Link to={parentCategory.link} className="hover:underline">{parentCategory.category}</Link>
              <span className="mx-2">/</span>
            </>
          )}
          <span className="font-semibold text-emerald-700">{currentSubService.title}</span>
        </div>

        {/* Full Description Section */}
        <motion.section
          className="bg-white p-8 rounded-lg shadow-md"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <SectionHeading title={`About ${currentSubService.title}`} highlightWord={currentSubService.title} className="!mb-6" />
          <p className="text-lg text-gray-700 leading-relaxed text-justify">{currentSubService.fullDescription}</p>
        </motion.section>

        {/* Features Section */}
        {currentSubService.features && currentSubService.features.length > 0 && (
          <motion.section
            className="bg-white p-8 rounded-lg shadow-md"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, ...sectionVariants.visible.transition }}
          >
            <SectionHeading title="Key Features" highlightWord="Features" className="!mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentSubService.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-200"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 + index * 0.1, ...itemVariants.visible.transition }}
                >
                  <FaCheckCircle className="text-emerald-500 text-2xl mr-4 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Sub-Service Specific Benefits Section */}
        {currentSubService.subServiceBenefits && currentSubService.subServiceBenefits.length > 0 && (
          <motion.section
            className="bg-white p-8 rounded-lg shadow-md"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4, ...sectionVariants.visible.transition }}
          >
            <SectionHeading title="Benefits of this Service" highlightWord="Service" className="!mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentSubService.subServiceBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-200"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 + index * 0.1, ...itemVariants.visible.transition }}
                >
                  <FaCheckCircle className="text-emerald-500 text-2xl mr-4 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* How Can We Help Section - Repositioned for Sub-Service Page */}
        <motion.section
          className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white p-8 rounded-lg shadow-xl text-center"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6, ...sectionVariants.visible.transition }}
        >
          <SectionHeading title="Need More Information?" highlightWord="Information?" className="!mb-4 !text-white" />
          <p className="text-lg mb-6">Reach out to our experts for a personalized consultation on this service.</p>
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
            Contact Us Now
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default SubServiceDetailPage; 