import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLeaf, FaWater, FaRecycle, FaIndustry } from 'react-icons/fa';
import SectionHeading from '../../Shared/SectionHeading';

const projects = [
  {
    id: 1,
    title: 'Urban Green Space Development',
    category: 'Environment',
    description: 'Transforming urban areas into sustainable green spaces.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1213&q=80',
    categoryIcon: FaLeaf,
  },
  {
    id: 2,
    title: 'Smart Irrigation System',
    category: 'Water Management',
    description: 'Implementing AI-powered irrigation for optimal water usage.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    categoryIcon: FaWater,
  },
  {
    id: 3,
    title: 'Waste to Energy Plant',
    category: 'Waste Management',
    description: 'Converting agricultural waste into renewable energy.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestProjects.map((project, index) => (
            <Link 
              to={`/our-work/${project.id}`}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl block"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="flex items-center gap-2 mb-2">
                    <project.categoryIcon className="text-emerald-400" />
                    <span className="text-sm font-medium">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
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
          className="text-center mt-12"
        >
          <Link
            to="/our-work"
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