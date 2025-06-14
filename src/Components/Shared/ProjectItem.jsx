import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectItem = ({ project }) => {
  const categoryLink = `/services/${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '')}`;

  return (
    <motion.div
      className="group relative w-full h-auto overflow-hidden rounded-lg bg-white shadow-lg"
      whileHover={{ y: -6, boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.2)" }}
      transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
    >
      <Link to={categoryLink} className="block h-full">
        {/* Image Section */}
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Content Section - positioned to overlap and extend below */}
        <div
          className="relative z-10 -mt-16 mx-4 bg-white p-6 text-center rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
        >
          <h4 className="mb-2 text-xl font-semibold text-gray-800">
            {project.title}
          </h4>
          <p className="text-sm text-gray-600 line-clamp-3 mb-4">
            {project.description}
          </p>
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 font-medium transition-colors hover:bg-emerald-100 hover:text-emerald-800">
            READ MORE
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectItem;
