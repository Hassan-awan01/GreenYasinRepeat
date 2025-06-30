import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCheckCircle, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import projectsData from '../../Shared/projectsData';
import SubServiceDropdown from '../../Shared/SubServiceDropdown';
import SectionHeading from '../../Shared/SectionHeading';

const BASE_PATH = '/GreenYasin';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

interface ExampleItem {
  text: string;
}

interface BenefitItem {
  text: string;
}

interface SubProject {
  title: string;
  link: string;
  image: string;
  description: string;
  fullDescription: string;
  features: string[];
  subServiceBenefits: string[];
  details: string[];
}

interface CategoryType {
  category: string;
  icon: string;
  link: string;
  mainImage: string;
  mainDescription: string;
  examplesHeader: string;
  examples: ExampleItem[];
  benefitsHeader: string;
  benefits: BenefitItem[];
  projects: SubProject[];
}

const ServiceDetailPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [currentCategory, setCurrentCategory] = useState<CategoryType | null>(
    null,
  );

  useEffect(() => {
    const foundCategory = projectsData.find(
      (cat) =>
        cat.category.toLowerCase().replace(/[^a-z0-9]+/g, '') === categoryName,
    );
    setCurrentCategory(foundCategory || null);
    window.scrollTo(0, 0);
  }, [categoryName]);

  if (!currentCategory) {
    return (
      <div className="global-container py-16 text-center text-gray-700">
        Service not found.
      </div>
    );
  }

  return (
    <div className="service-detail-page min-h-screen bg-gray-50">
      <div
        className="relative flex h-[60vh] w-full items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${currentCategory.mainImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.h1
          className="relative z-10 text-center text-5xl font-bold drop-shadow-lg md:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {currentCategory.category}
        </motion.h1>
      </div>

      <div className="global-container space-y-12 py-16">
        <motion.section
          className="rounded-lg bg-white p-8 shadow-md"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <SectionHeading
            title="Overview"
            highlightWord="Overview"
            className="!mb-6"
          />
          <p className="text-justify text-lg leading-relaxed text-gray-700">
            {currentCategory.mainDescription}
          </p>
        </motion.section>

        {currentCategory.projects && currentCategory.projects.length > 0 && (
          <motion.section
            className="rounded-lg bg-white p-8 shadow-md"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, ...sectionVariants.visible.transition }}
          >
            <SectionHeading
              title="Our Related Services"
              highlightWord="Services"
              className="!mb-6"
            />
            <div className="grid grid-cols-1 gap-4">
              {currentCategory.projects.map((subProject, index) => (
                <SubServiceDropdown key={index} subProject={subProject} />
              ))}
            </div>
          </motion.section>
        )}

        <motion.section
          className="rounded-lg bg-white p-8 shadow-md"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: currentCategory.projects.length > 0 ? 0.4 : 0.2,
            ...sectionVariants.visible.transition,
          }}
        >
          <SectionHeading
            title={currentCategory.examplesHeader}
            highlightWord={
              currentCategory.examplesHeader.split(' ').pop() || ''
            }
            className="!mb-6"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {currentCategory.examples.map((example, index) => (
              <motion.div
                key={index}
                className="flex items-start rounded-lg border border-gray-200 bg-gray-50 p-4"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay:
                    (currentCategory.projects.length > 0 ? 0.4 : 0.2) +
                    index * 0.1,
                  ...itemVariants.visible.transition,
                }}
              >
                <FaCheckCircle className="mr-4 mt-1 flex-shrink-0 text-2xl text-emerald-500" />
                <p className="text-gray-700">{example.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="rounded-lg bg-white p-8 shadow-md"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: currentCategory.projects.length > 0 ? 0.6 : 0.4,
            ...sectionVariants.visible.transition,
          }}
        >
          <SectionHeading
            title={currentCategory.benefitsHeader}
            highlightWord={
              currentCategory.benefitsHeader.split(' ').pop() || ''
            }
            className="!mb-6"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {currentCategory.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start rounded-lg border border-gray-200 bg-gray-50 p-4"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay:
                    (currentCategory.projects.length > 0 ? 0.6 : 0.4) +
                    index * 0.1,
                  ...itemVariants.visible.transition,
                }}
              >
                <FaCheckCircle className="mr-4 mt-1 flex-shrink-0 text-2xl text-emerald-500" />
                <p className="text-gray-700">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-800 p-8 text-center text-white shadow-xl"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: currentCategory.projects.length > 0 ? 0.8 : 0.6,
            ...sectionVariants.visible.transition,
          }}
        >
          <h3 className="mb-4 text-3xl font-bold">
            Ready to Transform Your Business?
          </h3>
          <p className="mb-6 text-lg">
            Contact us today for expert assessment and advisory services
            tailored to your environmental needs.
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
            to={`${BASE_PATH}/contact`}
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-emerald-700 shadow-lg transition-all hover:scale-105 hover:bg-gray-100"
          >
            Get In Touch Now
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
