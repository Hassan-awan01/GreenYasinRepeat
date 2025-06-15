import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BASE_PATH = '/GreenYasin';

const ProjectItem = ({ project }) => {
  const categoryLink = `${BASE_PATH}/services/${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '')}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <Link to={categoryLink} className="block">
        <div className="relative h-48 overflow-hidden">
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
          {project.icon && <project.icon className="text-emerald-600 text-2xl" />}
          <span className="text-emerald-600 font-medium">{project.category}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
