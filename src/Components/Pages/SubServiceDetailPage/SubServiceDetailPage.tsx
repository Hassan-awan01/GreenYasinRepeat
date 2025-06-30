import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCheckCircle, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

import SectionHeading from '../../Shared/SectionHeading';
import projectsData from '../../Shared/projectsData';
import type { ProjectCategory, SubService } from '../../../types'; // if separated

interface RouteParams {
  categoryName?: string;
  subServiceTitle?: string;
  [key: string]: string | undefined;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const SubServiceDetailPage: React.FC = () => {
  const { categoryName = '', subServiceTitle = '' } = useParams<RouteParams>();
  const [currentSubService, setCurrentSubService] = useState<SubService | null>(
    null,
  );
  const [parentCategory, setParentCategory] = useState<ProjectCategory | null>(
    null,
  );

  useEffect(() => {
    const normalizedCategory = categoryName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '');
    const normalizedTitle = subServiceTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '');

    const foundCategory = projectsData.find(
      (cat) =>
        cat.category.toLowerCase().replace(/[^a-z0-9]+/g, '') ===
        normalizedCategory,
    );

    if (foundCategory) {
      setParentCategory(foundCategory);
      const foundSubService = foundCategory.projects.find(
        (sub) =>
          sub.title.toLowerCase().replace(/[^a-z0-9]+/g, '') ===
          normalizedTitle,
      );
      setCurrentSubService(foundSubService ?? null);
    } else {
      setCurrentSubService(null);
      setParentCategory(null);
    }

    window.scrollTo(0, 0);
  }, [categoryName, subServiceTitle]);

  if (!currentSubService) {
    return (
      <div className="global-container py-16 text-center text-gray-700">
        Sub-service not found.
      </div>
    );
  }

  return (
    <div className="sub-service-detail-page min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="relative flex h-[60vh] w-full items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${currentSubService.image})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.h1
          className="relative z-10 text-center text-5xl font-bold drop-shadow-lg md:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {currentSubService.title}
        </motion.h1>
      </div>

      <div className="global-container space-y-12 py-16">
        {/* Breadcrumbs */}
        <div className="mb-8 text-gray-600">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          {parentCategory && (
            <>
              <Link to={parentCategory.link} className="hover:underline">
                {parentCategory.category}
              </Link>
              <span className="mx-2">/</span>
            </>
          )}
          <span className="font-semibold text-emerald-700">
            {currentSubService.title}
          </span>
        </div>

        {/* Full Description */}
        <motion.section
          className="rounded-lg bg-white p-8 shadow-md"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <SectionHeading
            title={`About ${currentSubService.title}`}
            highlightWord={currentSubService.title}
            className="!mb-6"
          />
          <p className="text-justify text-lg leading-relaxed text-gray-700">
            {currentSubService.fullDescription}
          </p>
        </motion.section>

        {/* Features */}
        {currentSubService.features?.length > 0 && (
          <motion.section
            className="rounded-lg bg-white p-8 shadow-md"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, ...sectionVariants.visible.transition }}
          >
            <SectionHeading
              title="Key Features"
              highlightWord="Features"
              className="!mb-6"
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {currentSubService.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start rounded-lg border border-gray-200 bg-gray-50 p-4"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: 0.2 + index * 0.1,
                    ...itemVariants.visible.transition,
                  }}
                >
                  <FaCheckCircle className="mr-4 mt-1 text-2xl text-emerald-500" />
                  <p className="text-gray-700">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Benefits */}
        {currentSubService.subServiceBenefits?.length > 0 && (
          <motion.section
            className="rounded-lg bg-white p-8 shadow-md"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4, ...sectionVariants.visible.transition }}
          >
            <SectionHeading
              title="Benefits of this Service"
              highlightWord="Service"
              className="!mb-6"
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {currentSubService.subServiceBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start rounded-lg border border-gray-200 bg-gray-50 p-4"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: 0.4 + index * 0.1,
                    ...itemVariants.visible.transition,
                  }}
                >
                  <FaCheckCircle className="mr-4 mt-1 text-2xl text-emerald-500" />
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* CTA */}
        <motion.section
          className="rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-800 p-8 text-center text-white shadow-xl"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6, ...sectionVariants.visible.transition }}
        >
          <SectionHeading
            title="Need More Information?"
            highlightWord="Information?"
            className="!mb-4 !text-white"
          />
          <p className="mb-6 text-lg">
            Reach out to our experts for a personalized consultation on this
            service.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
            <div className="flex items-center">
              <FaPhoneAlt className="mr-3 text-2xl text-emerald-200" />
              <span className="text-xl">04235167290</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-3 text-2xl text-emerald-200" />
              <span className="text-xl">info@greenyasin.pk</span>
            </div>
          </div>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-emerald-700 shadow-lg transition-all hover:scale-105 hover:bg-gray-100"
          >
            Contact Us Now
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default SubServiceDetailPage;
