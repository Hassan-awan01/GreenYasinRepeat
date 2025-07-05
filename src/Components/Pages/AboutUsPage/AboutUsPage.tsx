import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SectionHeading from '../../Shared/SectionHeading';
import OptimizedImage from '../../Shared/OptimizedImage';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BASE_PATH = '/GreenYasin';

// Placeholder images - you'll replace these with your actual image paths
import aboutUsHeroImage from '../../Images/img1.jpg'; // Example placeholder
import greenerFutureImage from '../../Images/img2.jpg'; // Example placeholder
import agricultureStep1 from '../../Images/img3.jpg'; // Example placeholder
import agricultureStep2 from '../../Images/img8.jpg'; // Example placeholder
import agricultureStep3 from '../../Images/img5.jpg'; // Example placeholder
import agricultureStep4 from '../../Images/img6.jpg'; // Example placeholder
import faqImage from '../../Images/img4.jpg'; // Example placeholder

const faqs = [
  {
    question: 'What is the mission of Green Yasin?',
    answer:
      'Green Yasin is committed to sustainable development through innovative water management, renewable energy, and community-focused solutions.',
  },
  {
    question: 'How does Green Yasin promote eco-friendly water practices?',
    answer:
      'By implementing advanced wastewater treatment, water recycling, and sustainable water resource management.',
  },
  {
    question:
      'What are the benefits of renewable energy promoted by Green Yasin?',
    answer:
      'Renewable energy reduces carbon emissions, lowers energy costs, and supports a cleaner environment.',
  },
  {
    question: 'How does Green Yasin engage local communities?',
    answer:
      'Through education, collaboration, and sustainable projects that empower communities to adopt greener lifestyles.',
  },
  {
    question: 'Why is wastewater treatment important?',
    answer:
      'It protects water resources, prevents pollution, and supports a healthier ecosystem and community.',
  },
  {
    question: "How can I stay informed about Green Yasin's projects?",
    answer:
      'Subscribe to our newsletter for the latest updates and green innovations.',
  },
];

const AboutUsPage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16 pt-[50px] md:pt-40">
      {/* Hero Section
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-white hidden md:flex"
        style={{ backgroundImage: `url(${aboutUsHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-6xl md:text-7xl font-bold text-center drop-shadow-lg pt-16"
        >
          About Us
        </motion.h1>
      </section> */}

      {/* Building A Greener Future Together Forever Section */}
      <section className="container mx-auto px-4 py-16 pt-24 md:pt-16">
        <div className="flex w-full flex-col items-center justify-center gap-12 md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden justify-center md:flex md:w-1/2"
          >
            <OptimizedImage
              src={greenerFutureImage}
              alt="Building a Greener Future"
              className="w-full max-w-md rounded-lg object-cover shadow-lg"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mr-[100px] flex w-full flex-col items-center px-4 text-center md:w-1/2 md:items-start md:text-left"
          >
            <SectionHeading
              title="About Us"
              highlightWord="Us"
              textAlignment="center"
              className="!mb-6 w-full"
            />
            <p className="mb-6 w-full text-center leading-relaxed text-gray-600 md:text-left">
              Thoughtfully provide real-time empowerment for future-proof growth
              strategies. Completely provide access to business e-commerce
              rather than one-to-one models.
            </p>
            <ul className="mx-auto flex w-full flex-col items-center space-y-3 text-center md:mx-0 md:items-start md:text-left">
              <li className="flex w-full items-start justify-center text-gray-700 md:justify-start">
                <FaCheckCircle className="mr-3 mt-1 flex-shrink-0 text-green-500" />
                <span className="text-center md:text-left">
                  Membership in the community, mentorship from experts.
                </span>
              </li>
              <li className="flex w-full items-start justify-center text-gray-700 md:justify-start">
                <FaCheckCircle className="mr-3 mt-1 flex-shrink-0 text-green-500" />
                <span className="text-center md:text-left">
                  The best digital marketing services to help your business.
                </span>
              </li>
              <li className="flex w-full items-start justify-center text-gray-700 md:justify-start">
                <FaCheckCircle className="mr-3 mt-1 flex-shrink-0 text-green-500" />
                <span className="text-center md:text-left">
                  Support and maintenance for your system.
                </span>
              </li>
            </ul>
            <Link
              to={`${BASE_PATH}/#our-aim-section`}
              className="mx-auto mt-8 inline-block rounded-full bg-green-600 px-8 py-3 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-green-700"
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Do You Have Any Question Please? Section */}
      <section className="container mx-auto mt-8 px-4 py-16">
        <div className="flex w-full flex-col items-center justify-center gap-12 md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden justify-center md:flex md:w-1/2"
          >
            <OptimizedImage
              src={faqImage}
              alt="Have a Question?"
              className="w-full max-w-md rounded-lg object-cover shadow-lg"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mr-[90px] w-full px-4 text-center md:w-1/2 md:text-left"
          >
            <h2 className="mb-2 text-center text-sm font-semibold uppercase text-green-600 md:text-left">
              FAQs
            </h2>
            <SectionHeading
              title="Do You Have Any Question Please?"
              highlightWord="Question"
              textAlignment="center"
              className="!mb-8 w-full"
            />
            <div className="flex w-full flex-col items-center space-y-4 text-center md:items-start md:text-left">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group mx-auto w-full max-w-md cursor-pointer rounded-lg bg-white p-4 shadow-sm"
                >
                  <summary className="flex items-center justify-between text-center font-semibold text-gray-700 focus:outline-none md:text-left">
                    {faq.question}
                    <FaQuestionCircle className="mt-1 flex-shrink-0 text-green-500" />
                  </summary>
                  <p className="mt-2 border-t border-gray-200 pt-2 text-center text-gray-600 md:text-left">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
