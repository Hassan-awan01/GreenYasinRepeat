import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BASE_PATH = '/GreenYasin';

interface ProjectItemProps {
  project: {
    title: string;
    link: string;
    image: string;
    description: string;
    icon?: React.ElementType; // if you're passing an icon component
    category?: string;
  };
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const categoryLink = `${BASE_PATH}/services/${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '')}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
    >
      <Link to={categoryLink} className="block">
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full transform object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="text-sm opacity-90">{project.description}</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="p-6">
        <div className="mb-3 flex items-center gap-2">
          {project.icon && (
            <project.icon className="text-2xl text-emerald-600" />
          )}
          <span className="font-medium text-emerald-600">
            {project.category}
          </span>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-800">
          {project.title}
        </h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
