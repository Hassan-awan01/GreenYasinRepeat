import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SectionHeading from '../../Shared/SectionHeading';

// Placeholder images - you'll replace these with your actual image paths
import aboutUsHeroImage from '../../Images/img1.jpg'; // Example placeholder
import greenerFutureImage from '../../Images/img2.jpg'; // Example placeholder
import agricultureStep1 from '../../Images/img3.jpg'; // Example placeholder
import agricultureStep2 from '../../Images/img4.jpg'; // Example placeholder
import agricultureStep3 from '../../Images/img5.jpg'; // Example placeholder
import agricultureStep4 from '../../Images/img6.jpg'; // Example placeholder
import faqImage from '../../Images/img7.jpg'; // Example placeholder

const agricultureSteps = [
  {
    image: agricultureStep1,
    title: 'Planting',
    description: 'Agricultural production is the process that transforms a seed or other cultivated matter into a plant.'
  },
  {
    image: agricultureStep2,
    title: 'Growing',
    description: 'Growing refers to the process of cultivation, which includes watering, weeding, and providing nutrients.'
  },
  {
    image: agricultureStep3,
    title: 'Harvesting',
    description: 'Harvesting is the process of gathering a ripe crop from the fields.'
  },
  {
    image: agricultureStep4,
    title: 'Processing',
    description: 'Processing involves converting raw agricultural products into marketable food or other products.'
  },
];

const faqs = [
  {
    question: 'What is the importance of eco-aviation?',
    answer: 'Eco-aviation focuses on reducing the environmental impact of air travel through sustainable practices.'
  },
  {
    question: 'What are the advantages of green roofs?',
    answer: 'Green roofs provide insulation, reduce stormwater runoff, and improve air quality in urban areas.'
  },
  {
    question: 'How to improve the sustainability of plastic use?',
    answer: 'Reducing, reusing, and recycling plastic are key steps to improving sustainability.'
  },
  {
    question: 'What are the advantages of solar energy?',
    answer: 'Solar energy is a clean, renewable resource that reduces reliance on fossil fuels.'
  },
  {
    question: 'What are the benefits of organic farming?',
    answer: 'Organic farming promotes biodiversity, healthy soil, and avoids synthetic pesticides and fertilizers.'
  },
  {
    question: 'What is the importance of eco-tourism?',
    answer: 'Eco-tourism supports conservation efforts and empowers local communities while promoting sustainable travel.'
  },
];

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 md:pt-40 pt-5 pb-16">
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
            className="md:w-1/2 w-full text-center md:text-left flex flex-col items-center md:items-start px-4 mr-20"
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
              to="/#our-aim-section"
              className="inline-block mt-8 px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300 mx-auto"
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Steps In The Agriculture Process Section */}
      <section className="container mx-auto px-4 py-16 bg-white shadow-sm rounded-lg mt-8">
        <h2 className="text-sm font-semibold text-green-600 uppercase mb-2 text-center">
          Our Process
        </h2>
        <SectionHeading title="Steps In The Agriculture Process" highlightWord="Process" className="!mb-12"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agricultureSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 p-6 rounded-lg text-center"
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                {step.title}
              </h4>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
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
            className="md:w-1/2 w-full text-center md:text-left px-4 mr-20"
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