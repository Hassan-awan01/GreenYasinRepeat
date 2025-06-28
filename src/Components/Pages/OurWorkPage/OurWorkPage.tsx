import React, { ReactElement, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaLeaf,
  FaWater,
  FaSeedling,
  FaRecycle,
  FaIndustry,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SectionHeading from '../../Shared/SectionHeading'; // Import SectionHeading

const BASE_PATH = '/GreenYasin';

// Import project images
import img1 from '../../Images/img10.jpg';
import img2 from '../../Images/img11.jpg';
import img3 from '../../Images/img12.jpg';
import img4 from '../../Images/img13.jpg';
import img5 from '../../Images/img14.jpg';
import img6 from '../../Images/img15.jpg';
import img7 from '../../Images/img16.jpg';
import img8 from '../../Images/img17.jpg';
import img9 from '../../Images/img18.jpg';

export const categories = [
  { id: 'all', name: 'All Projects', icon: <FaLeaf className="text-2xl" /> },
  {
    id: 'environment',
    name: 'Environment',
    icon: <FaLeaf className="text-2xl" />,
  },
  {
    id: 'water',
    name: 'Water Management',
    icon: <FaWater className="text-2xl" />,
  },
  {
    id: 'soil',
    name: 'Soil Conservation',
    icon: <FaSeedling className="text-2xl" />,
  },
  {
    id: 'waste',
    name: 'Waste Management',
    icon: <FaRecycle className="text-2xl" />,
  },
  {
    id: 'industrial',
    name: 'Industrial Solutions',
    icon: <FaIndustry className="text-2xl" />,
  },
];

export const projects = [
  {
    id: 1,
    title: 'Water Conservation Project',
    category: 'water',
    image: img1,
    description:
      'Implementing advanced water conservation techniques in agricultural lands.',
  },
  {
    id: 2,
    title: 'Soil Erosion Control',
    category: 'soil',
    image: img2,
    description:
      'Innovative solutions for preventing soil erosion in vulnerable areas.',
  },
  {
    id: 3,
    title: 'Waste Management System',
    category: 'waste',
    image: img3,
    description:
      'Comprehensive waste management solutions for industrial facilities.',
  },
  {
    id: 4,
    title: 'Environmental Impact Assessment',
    category: 'environment',
    image: img4,
    description:
      'Detailed environmental impact studies for new development projects.',
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
    description:
      'Promoting sustainable agricultural practices in local communities.',
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

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 pt-40">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <SectionHeading title="Our Projects" highlightWord="Projects" />
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover our diverse range of environmental projects and sustainable
            solutions that are making a positive impact on our planet.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* Dropdown for Mobile */}
          <div className="mb-8 px-4 sm:hidden">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="block w-full appearance-none rounded-lg border border-emerald-500 bg-white px-6 py-3 text-lg text-gray-800 shadow-sm transition-all duration-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              {categories.map((category) => (
                <option
                  key={category.id}
                  value={category.id}
                  className="bg-white px-4 py-2 text-gray-800 hover:bg-emerald-50"
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Buttons for Desktop */}
          <div className="mb-12 hidden flex-wrap justify-center gap-4 sm:flex">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 rounded-full px-6 py-3 transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-emerald-50'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <Link
                to={`${BASE_PATH}/our-work/${project.id}`}
                className="block"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full transform object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="mb-2 text-xl font-semibold">
                        {project.title}
                      </h3>
                      <p className="text-sm opacity-90">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  {categories.find((cat) => cat.id === project.category)?.icon}
                  <span className="font-medium text-emerald-600">
                    {
                      categories.find((cat) => cat.id === project.category)
                        ?.name
                    }
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
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
