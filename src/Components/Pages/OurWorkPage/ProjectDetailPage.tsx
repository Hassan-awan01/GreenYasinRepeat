import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects, categories } from './OurWorkPage'; // Assuming projects and categories are exported from OurWorkPage
import SectionHeading from '../../Shared/SectionHeading'; // Import SectionHeading

import { ReactElement } from 'react';

export interface Category {
  id: string;
  name: string;
  icon: ReactElement;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}
const BASE_PATH = '/GreenYasin';

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!projectId) {
      setError(true);
      setLoading(false);
      return;
    }

    const foundProject = projects.find((p) => p.id === parseInt(projectId));
    if (foundProject) {
      setProject(foundProject);
    } else {
      setError(true);
    }
    setLoading(false);
  }, [projectId]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 pb-16 pt-32">
        <p className="text-xl text-gray-700">Loading project details...</p>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 pb-16 pt-32">
        <p className="mb-4 text-xl text-red-600">Project not found.</p>
        <Link
          to={`${BASE_PATH}/our-work`}
          className="text-emerald-600 hover:underline"
        >
          Go back to Our Work
        </Link>
      </div>
    );
  }

  const projectCategory = categories.find((cat) => cat.id === project.category);

  return (
    <div className="min-h-screen bg-gray-50 pb-16 pt-32">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 rounded-xl bg-white p-8 shadow-lg"
        >
          <img
            src={project.image}
            alt={project.title}
            className="mb-8 h-96 w-full rounded-lg object-cover shadow-md"
          />
          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            {project.title}
          </h1>
          <div className="mb-6 flex items-center gap-2 text-gray-600">
            {projectCategory?.icon}
            <span className="font-medium text-emerald-600">
              {projectCategory?.name}
            </span>
          </div>
          <p className="mb-8 text-lg leading-relaxed text-gray-800">
            {project.description}{' '}
            {/* You might want to expand this with more detailed content later */}
          </p>

          {/* Add more project details here as needed */}
          <div className="rounded-lg bg-gray-100 p-6">
            <SectionHeading
              title="Project Highlights"
              highlightWord="Highlights"
              textAlignment="left"
              className="!mb-4 !text-left"
            />
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              <li>Detailed analysis of environmental impact.</li>
              <li>Implementation of sustainable practices.</li>
              <li>Community engagement and feedback incorporation.</li>
              <li>Measurable positive outcomes for the environment.</li>
            </ul>
          </div>
        </motion.div>
        <div className="mt-8 text-center">
          <Link
            to={`${BASE_PATH}/our-work`}
            className="inline-flex items-center font-semibold text-emerald-600 transition-colors duration-300 hover:text-emerald-700"
          >
            <svg
              className="mr-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Back to Our Work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
