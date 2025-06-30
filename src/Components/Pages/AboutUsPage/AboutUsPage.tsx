import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SectionHeading from '../../Shared/SectionHeading';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    question: "What is the mission of Green Yasin?",
    answer: "Green Yasin is committed to sustainable development through innovative water management, renewable energy, and community-focused solutions."
  },
  {
    question: "How does Green Yasin promote eco-friendly water practices?",
    answer: "By implementing advanced wastewater treatment, water recycling, and sustainable water resource management."
  },
  {
    question: "What are the benefits of renewable energy promoted by Green Yasin?",
    answer: "Renewable energy reduces carbon emissions, lowers energy costs, and supports a cleaner environment."
  },
  {
    question: "How does Green Yasin engage local communities?",
    answer: "Through education, collaboration, and sustainable projects that empower communities to adopt greener lifestyles."
  },
  {
    question: "Why is wastewater treatment important?",
    answer: "It protects water resources, prevents pollution, and supports a healthier ecosystem and community."
  },
  {
    question: "How can I stay informed about Green Yasin's projects?",
    answer: "Subscribe to our newsletter for the latest updates and green innovations."
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
    <div className="min-h-screen bg-gray-50 md:pt-40 pt-[50px] pb-16">
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 justify-center hidden md:flex"
          >
            <img
              src={greenerFutureImage}
              alt="Building a Greener Future"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 w-full text-center md:text-left flex flex-col items-center md:items-start px-4 mr-[100px]"
          >
            <SectionHeading title="About Us" highlightWord="Us" textAlignment="center" className="!mb-6 w-full"/>
            <p className="text-gray-600 leading-relaxed mb-6 text-center md:text-left w-full">
              Thoughtfully provide real-time empowerment for future-proof growth strategies.
              Completely provide access to business e-commerce rather than one-to-one models.
            </p>
            <ul className="space-y-3 mx-auto md:mx-0 text-center md:text-left flex flex-col items-center md:items-start w-full">
              <li className="flex items-start text-gray-700 justify-center md:justify-start w-full">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-center md:text-left">
                  Membership in the community, mentorship from experts.
                </span>
              </li>
              <li className="flex items-start text-gray-700 justify-center md:justify-start w-full">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-center md:text-left">
                  The best digital marketing services to help your business.
                </span>
              </li>
              <li className="flex items-start text-gray-700 justify-center md:justify-start w-full">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-center md:text-left">
                  Support and maintenance for your system.
                </span>
              </li>
            </ul>
            <Link
              to={`${BASE_PATH}/#our-aim-section`}
              className="inline-block mt-8 px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300 mx-auto"
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </section>

      

      {/* Do You Have Any Question Please? Section */}
      <section className="container mx-auto px-4 py-16 mt-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 justify-center hidden md:flex"
          >
            <img
              src={faqImage}
              alt="Have a Question?"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 w-full text-center md:text-left px-4 mr-[90px]"
          >
            <h2 className="text-sm font-semibold text-green-600 uppercase mb-2 text-center md:text-left">
              FAQs
            </h2>
            <SectionHeading title="Do You Have Any Question Please?" highlightWord="Question" textAlignment="center" className="!mb-8 w-full"/>
            <div className="space-y-4 text-center md:text-left flex flex-col items-center md:items-start w-full">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-white p-4 rounded-lg shadow-sm cursor-pointer w-full max-w-md mx-auto">
                  <summary className="flex justify-between items-center font-semibold text-gray-700 focus:outline-none text-center md:text-left">
                    {faq.question}
                    <FaQuestionCircle className="text-green-500 mt-1 flex-shrink-0" />
                  </summary>
                  <p className="mt-2 text-gray-600 border-t pt-2 border-gray-200 text-center md:text-left">
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