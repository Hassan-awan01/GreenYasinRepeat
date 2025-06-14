import React from 'react';
import { motion } from 'framer-motion';
import { FaFlask, FaLeaf, FaAward, FaIndustry, FaFilter, FaHammer, FaHardHat, FaRecycle, FaBook, FaMapMarkedAlt } from 'react-icons/fa'; // Importing specific Font Awesome icons
import { servicesData } from './projectsData';

// Mapping icon names to actual icon components
const iconComponents = {
  FaFlask,
  FaLeaf,
  FaAward,
  FaIndustry,
  FaFilter,
  FaHammer,
  FaHardHat,
  FaRecycle,
  FaBook,
  FaMapMarkedAlt,
};

const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="global-container">
        <div className="flex flex-wrap justify-center gap-8 py-4">
          {servicesData.map((service, index) => {
            const IconComponent = iconComponents[service.icon];
            if (!IconComponent) {
              console.warn(`Icon component for ${service.icon} not found.`);
              return null;
            }
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center space-y-4 rounded-lg p-6 text-center transition-all duration-300 ease-in-out w-full sm:w-auto sm:max-w-[calc(50%-1rem)] md:max-w-[calc(33.33%-1rem)] lg:max-w-[calc(20%-1rem)]"
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <IconComponent className="mb-4 text-3xl text-green-600" />
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
