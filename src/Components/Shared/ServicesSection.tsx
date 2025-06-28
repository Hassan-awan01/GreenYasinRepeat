import React from 'react';
import { motion } from 'framer-motion';
import {
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
} from 'react-icons/fa'; // Importing specific Font Awesome icons
import { servicesData } from './projectsData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // No arrows on mobile slider
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <section id="our-services-section" className="py-16">
      <div className="global-container">
        {/* Mobile Slider */}
        <div className="sm:hidden">
          {/* @ts-ignore */}
          <Slider {...settings}>
            {servicesData.map((service, index) => {
              const IconComponent = iconComponents[service.icon];
              if (!IconComponent) {
                console.warn(`Icon component for ${service.icon} not found.`);
                return null;
              }
              return (
                <motion.div
                  key={index}
                  className="flex w-full flex-col items-center justify-center px-4 py-4 text-center"
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent className="mx-auto mb-4 text-3xl text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </motion.div>
              );
            })}
          </Slider>
        </div>

        {/* Desktop Grid */}
        <div className="hidden flex-wrap justify-center gap-8 py-4 sm:flex">
          {servicesData.map((service, index) => {
            const IconComponent = iconComponents[service.icon];
            if (!IconComponent) {
              console.warn(`Icon component for ${service.icon} not found.`);
              return null;
            }
            return (
              <motion.div
                key={index}
                className="flex w-full flex-col items-center justify-center space-y-4 rounded-lg p-6 text-center transition-all duration-300 ease-in-out sm:w-auto sm:max-w-[calc(50%-1rem)] md:max-w-[calc(33.33%-1rem)] lg:max-w-[calc(20%-1rem)]"
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
