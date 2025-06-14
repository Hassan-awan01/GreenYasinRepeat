import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects, categories } from './OurWorkPage'; // Assuming projects and categories are exported from OurWorkPage
import SectionHeading from '../../Shared/SectionHeading'; // Import SectionHeading

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === parseInt(projectId));
    if (foundProject) {
      setProject(foundProject);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  }, [projectId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32 pb-16 bg-gray-50">
        <p className="text-xl text-gray-700">Loading project details...</p>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-32 pb-16 bg-gray-50">
        <p className="text-xl text-red-600 mb-4">Project not found.</p>
        <Link to="/our-work" className="text-emerald-600 hover:underline">Go back to Our Work</Link>
      </div>
    );
  }

  const projectCategory = categories.find(cat => cat.id === project.category);

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover rounded-lg mb-8 shadow-md"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">{project.title}</h1>
          <div className="flex items-center gap-2 mb-6 text-gray-600">
            {projectCategory?.icon}
            <span className="font-medium text-emerald-600">{projectCategory?.name}</span>
          </div>
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            {project.description} {/* You might want to expand this with more detailed content later */}
          </p>

          {/* Add more project details here as needed */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <SectionHeading title="Project Highlights" highlightWord="Highlights" textAlignment="left" className="!text-left !mb-4"/>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Detailed analysis of environmental impact.</li>
              <li>Implementation of sustainable practices.</li>
              <li>Community engagement and feedback incorporation.</li>
              <li>Measurable positive outcomes for the environment.</li>
            </ul>
          </div>
        </motion.div>
        <div className="text-center mt-8">
          <Link
            to="/our-work"
            className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
          >
            <svg className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Our Work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage; 