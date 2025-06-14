import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaWater, FaSeedling, FaRecycle, FaIndustry } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SectionHeading from '../../Shared/SectionHeading'; // Import SectionHeading

// Import project images
import img1 from '../../Images/ourworkimgs/IMG-20250613-WA0041.jpg';
import img2 from '../../Images/ourworkimgs/IMG-20250613-WA0040.jpg';
import img3 from '../../Images/ourworkimgs/IMG-20250613-WA0036.jpg';
import img4 from '../../Images/ourworkimgs/IMG-20250613-WA0030.jpg';
import img5 from '../../Images/ourworkimgs/IMG-20250613-WA0025.jpg';
import img6 from '../../Images/ourworkimgs/IMG-20250613-WA0023.jpg';
import img7 from '../../Images/ourworkimgs/IMG-20250613-WA0024.jpg';
import img8 from '../../Images/ourworkimgs/IMG-20250613-WA0022.jpg';
import img9 from '../../Images/ourworkimgs/IMG-20250613-WA0016.jpg';

export const categories = [
  { id: 'all', name: 'All Projects', icon: <FaLeaf className="text-2xl" /> },
  { id: 'environment', name: 'Environment', icon: <FaLeaf className="text-2xl" /> },
  { id: 'water', name: 'Water Management', icon: <FaWater className="text-2xl" /> },
  { id: 'soil', name: 'Soil Conservation', icon: <FaSeedling className="text-2xl" /> },
  { id: 'waste', name: 'Waste Management', icon: <FaRecycle className="text-2xl" /> },
  { id: 'industrial', name: 'Industrial Solutions', icon: <FaIndustry className="text-2xl" /> },
];

export const projects = [
  {
    id: 1,
    title: 'Water Conservation Project',
    category: 'water',
    image: img1,
    description: 'Implementing advanced water conservation techniques in agricultural lands.',
  },
  {
    id: 2,
    title: 'Soil Erosion Control',
    category: 'soil',
    image: img2,
    description: 'Innovative solutions for preventing soil erosion in vulnerable areas.',
  },
  {
    id: 3,
    title: 'Waste Management System',
    category: 'waste',
    image: img3,
    description: 'Comprehensive waste management solutions for industrial facilities.',
  },
  {
    id: 4,
    title: 'Environmental Impact Assessment',
    category: 'environment',
    image: img4,
    description: 'Detailed environmental impact studies for new development projects.',
  },
  {
    id: 5,
    title: 'Industrial Waste Treatment',
    category: 'industrial',
    image: img5,
    description: 'Advanced treatment systems for industrial waste management.',
  },
  {
    id: 6,
    title: 'Sustainable Agriculture',
    category: 'soil',
    image: img6,
    description: 'Promoting sustainable agricultural practices in local communities.',
  },
  {
    id: 7,
    title: 'Water Quality Monitoring',
    category: 'water',
    image: img7,
    description: 'State-of-the-art water quality monitoring systems.',
  },
  {
    id: 8,
    title: 'Recycling Initiative',
    category: 'waste',
    image: img8,
    description: 'Community-wide recycling and waste reduction programs.',
  },
  {
    id: 9,
    title: 'Green Industrial Solutions',
    category: 'industrial',
    image: img9,
    description: 'Implementing eco-friendly solutions in industrial processes.',
  },
];

const OurWorkPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 py-16 pt-40">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionHeading title="Our Projects" highlightWord="Projects" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our diverse range of environmental projects and sustainable solutions
            that are making a positive impact on our planet.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-emerald-50'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Link to={`/our-work/${project.id}`} className="block">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm opacity-90">{project.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {categories.find(cat => cat.id === project.category)?.icon}
                  <span className="text-emerald-600 font-medium">
                    {categories.find(cat => cat.id === project.category)?.name}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurWorkPage; 