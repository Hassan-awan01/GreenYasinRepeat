import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const MobileNavLink = ({ to, children, onClick }) => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`block rounded-lg px-4 py-3 text-lg font-medium transition-all relative ${
        isActive
          ? 'bg-emerald-600 text-white'
          : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
      }`}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {children}
      <motion.div
        className="absolute bottom-0 left-0 h-8 bg-emerald-600 z-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0 }}
      />
    </Link>
  );
};

export default MobileNavLink; 