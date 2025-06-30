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
import img1 from '../../Images/Projects/water.jpg';
import img2 from '../../Images/Projects/Waste Water.jpg';
import img3 from '../../Images/Projects/water sampling.jpg';
import img4 from '../../Images/Projects/water1.jpg';
import img5 from '../../Images/Projects/stock emission.jpg';
import img6 from '../../Images/Projects/vehicel emission.jpg';
import img7 from '../../Images/Projects/noise.jpg';
import img8 from '../../Images/Projects/air3.jpg';
import img9 from '../../Images/Projects/lux.jpg';
import img10 from '../../Images/Projects/Soil1.jpg';

export const categories = [
  { id: 'all', name: 'All Projects', icon: <FaLeaf className="text-2xl" /> },
 
  {
    id: 'water',
    name: 'Water Management',
    icon: <FaWater className="text-2xl" />,
  },
  {
    id: 'air',
    name: 'Air Section',
    icon: <FaSeedling className="text-2xl" />,
  },
  {
    id: 'noise',
    name: "Noise & Hygiene",
    icon: <FaSeedling className="text-2xl" />,
  },
  {
    id: 'soil',
    name: 'Soil Studies',
    icon: <FaRecycle className="text-2xl" />,
  },
 
];

export const projects = [
  {
    id: 1,
    title: "Waste water treatment plant ICI Pakistan Pvt ltd",
    category: "water",
    image: img1,
      
    description: `
    Successfully installed a state-of-the-art wastewater treatment and management plant.
  `  ,
  highlight: [
    "Enhanced water recycling and reduced environmental impact.",
    "Complies with local and international wastewater discharge standards.",
    "Supports sustainable water resource management for the community and industry.",
    "Improves operational efficiency and minimizes pollution."
  ],
  }
  ,
  {
    id: 2,
    title: "Waste water Treatment",
    category: "water",
    image: img2,
    description: `
      Successfully commissioned a cutting-edge wastewater treatment and management plant designed to protect the environment and support sustainable water use.
    `,
    highlight: [
      "Enhanced water recycling capacity, reducing freshwater consumption and preserving natural resources.",
      "Meets and exceeds local and international wastewater discharge regulations for environmental safety.",
      "Contributes to sustainable water resource management for both community and industrial stakeholders.",
      "Improves operational efficiency, minimizes pollution, and supports long-term eco-friendly practices."
    ],
  }
  ,

  {
    id: 3,
    title: "Waste water Sampling",
    category: "water",
    image: img3,
    description: `
      Conducted systematic wastewater sampling to monitor water quality and ensure compliance with environmental standards.
    `,
    highlight: [
      "Collected representative wastewater samples using standardized procedures.",
      "Analyzed physical, chemical, and biological parameters for comprehensive quality assessment.",
      "Ensured compliance with local and international water quality regulations.",
      "Provided data-driven insights to optimize wastewater treatment processes and protect the environment."
    ],
  }
  ,
  {
    id: 4,
    title: "Raw Water Treatment",
    category: "water",
    image: img4,
    description: `
      Implemented a comprehensive raw water treatment system to ensure a safe and reliable supply of clean water for industrial and domestic use.
    `,
    highlight: [
      "Removes suspended solids, organic matter, and other contaminants from raw water sources.",
      "Delivers high-quality treated water suitable for diverse applications.",
      "Supports compliance with drinking and process water standards.",
      "Protects downstream equipment and improves overall system efficiency."
    ],
  }
  ,
  {
    id: 5,
    title: "Stack Emissions Monitoring",
    category: "air",
    image: img5,
    description: `
      Conducted stack emissions monitoring to measure and control industrial air pollutants in compliance with environmental regulations.
    `,
    highlight: [
      "Monitored key pollutants including particulate matter, SO₂, NOₓ, and CO.",
      "Ensured compliance with local and international emission standards.",
      "Provided data to optimize process efficiency and reduce environmental impact.",
      "Supported sustainable industrial practices through continuous emissions tracking."
    ],
  },{
    id: 6,
    title: "Vehicle Emissions Monitoring",
    category: "air",
    image: img6,
    description: `
      Carried out vehicle emissions monitoring to assess and control pollutants from motor vehicles in line with air quality standards.
    `,
    highlight: [
      "Tested emissions for key pollutants such as CO, HC, NOₓ, and particulate matter.",
      "Ensured compliance with national and international vehicular emission regulations.",
      "Supported cleaner air initiatives and promoted sustainable transportation.",
      "Provided data to develop effective pollution control strategies."
    ],
  }
,{
  id: 7,
  title: "Ambient Noise Level Testing",
  category: "noise",
  image: img7,
  description: `
    Conducted ambient noise level testing to evaluate environmental sound levels and ensure compliance with regulatory noise limits.
  `,
  highlight: [
    "Measured noise levels in residential, commercial, and industrial areas.",
    "Assessed compliance with local and international noise standards.",
    "Identified potential sources of excessive noise pollution.",
    "Supported community well-being and workplace health initiatives."
  ],
}
,
{
  id: 8,
  title: "Air Pollution Control System",
  category: "air",
  image: img8,
  description: `
    Installed an air pollution control system to effectively capture and reduce harmful emissions from industrial processes.
  `,
  highlight: [
    "Utilized technologies such as bag filters, scrubbers, and electrostatic precipitators.",
    "Ensured compliance with stringent air quality regulations.",
    "Improved workplace safety and protected public health.",
    "Contributed to sustainable and eco-friendly industrial operations."
  ],
}
,{
  id: 9,
  title: "Lux Level Monitoring",
  category: "noise",
  image: img9,
  description: `
    Conducted lux level monitoring to assess and optimize workplace and environmental lighting conditions.
  `,
  highlight: [
    "Measured illumination levels to ensure adequate lighting for safety and productivity.",
    "Verified compliance with occupational health and safety standards.",
    "Identified areas with insufficient or excessive lighting.",
    "Supported energy-efficient lighting practices and employee well-being."
  ],
}
,{
  id: 10,
  title: "Geotechnical Study",
  category: "soil",
  image: img10,
  description: `
    Conducted a geotechnical study to evaluate soil properties and ensure safe, stable foundation design for construction projects.
  `,
  highlight: [
    "Performed soil sampling and laboratory testing for strength, composition, and bearing capacity.",
    "Assessed site suitability and potential geohazards such as liquefaction or settlement.",
    "Provided detailed geotechnical reports to guide structural and civil engineering decisions.",
    "Supported safe, cost-effective, and sustainable infrastructure development."
  ],
}

  
  
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
