import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BASE_PATH = '/GreenYasin';

interface SubProject {
  title: string;
  description: string;
  details: string[];
}

interface Props {
  subProject: SubProject;
}

const SubServiceDropdown = ({ subProject }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50 shadow-sm">
      <button
        onClick={toggleDropdown}
        className="flex w-full items-center justify-between p-4 text-left text-lg font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-100"
      >
        <span>{subProject.title}</span>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown className="text-emerald-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="border-t border-gray-200 bg-white p-4"
          >
            <p className="mb-4 leading-relaxed text-gray-700">
              {subProject.description}
            </p>
            {subProject.details && subProject.details.length > 0 && (
              <ul className="space-y-2">
                {subProject.details.map((detail, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <FaCheckCircle className="mr-2 mt-1 flex-shrink-0 text-emerald-500" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SubServiceDropdown;
