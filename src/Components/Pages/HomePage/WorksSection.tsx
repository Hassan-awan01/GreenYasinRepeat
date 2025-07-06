import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLeaf, FaWater, FaRecycle, FaIndustry } from 'react-icons/fa';
import SectionHeading from '../../Shared/SectionHeading';
import img1 from '../../Images/Projects/water.webp';
import img2 from '../../Images/Projects/Waste Water.webp';
import img3 from '../../Images/Projects/water sampling.webp';
// import OptimizedImage from '@/Components/Shared/OptimizedImage';

const BASE_PATH = '/GreenYasin';

const projects = [
  {
    id: 1,
    title: 'Waste water treatment plant ICI Pakistan Pvt ltd',
    category: 'Water Management',
    description:
      'Successfully installed a state-of-the-art wastewater treatment and management plant.',
    image: img1,
    categoryIcon: FaLeaf,
  },
  {
    id: 2,
    title: 'Waste water Treatment',
    category: 'Water Management',
    description:
      'Successfully commissioned a cutting-edge wastewater treatment and management plant designed to protect the environment and support sustainable water use.',
    image: img2,
    categoryIcon: FaWater,
  },
  {
    id: 3,
    title: 'Waste water Sampling',
    category: 'Water Management',
    description: `
    Conducted systematic wastewater sampling to monitor water quality and ensure compliance with environmental standards.
  `,
    image: img3,
    categoryIcon: FaRecycle,
  },
];

const WorkSection = () => {
  // Get only the latest 3 projects
  const latestProjects = projects.slice(0, 3);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Latest Work" highlightWord="Work" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestProjects.map((project, index) => (
            <Link
              to={`${BASE_PATH}/our-work/${project.id}`}
              className="group relative block overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="mb-2 flex items-center gap-2">
                    <project.categoryIcon className="text-emerald-400" />
                    <span className="text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-200">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            to={`${BASE_PATH}/our-work`}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-500/30"
          >
            View More Projects
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
