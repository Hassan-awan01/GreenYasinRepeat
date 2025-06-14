import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaCheckCircle } from 'react-icons/fa';

const SubServiceDropdown = ({ subProject }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-50 rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <button
        onClick={toggleDropdown}
        className="w-full flex items-center justify-between p-4 text-left font-medium text-lg text-gray-800 hover:bg-gray-100 transition-colors duration-200"
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
            className="p-4 border-t border-gray-200 bg-white"
          >
            <p className="text-gray-700 leading-relaxed mb-4">{subProject.description}</p>
            {subProject.details && subProject.details.length > 0 && (
              <ul className="space-y-2">
                {subProject.details.map((detail, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <FaCheckCircle className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
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