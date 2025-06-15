import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../../Shared/SectionHeading';

const OurTeamPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-40 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionHeading title="Meet Our Team" highlightWord="Team" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicated to excellence and passionate about environmental sustainability.
          </p>
        </motion.div>

        {/* Placeholder for team members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Team Member Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 text-center"
          >
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member Name"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">John Doe</h3>
            <p className="text-emerald-600 font-medium mb-2">CEO & Environmental Consultant</p>
            <p className="text-gray-600 text-sm">John has over 20 years of experience in environmental consulting and sustainable development.</p>
          </motion.div>

          {/* Add more team members here */}
        </div>
      </div>
    </div>
  );
};

export default OurTeamPage; 