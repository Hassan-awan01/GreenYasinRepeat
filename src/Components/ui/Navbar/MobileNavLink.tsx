import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface MobileNavLinkProps {
  to: string;
  children: ReactNode;
  onClick?: () => void;
}

const MobileNavLink = ({ to, children, onClick }: MobileNavLinkProps) => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const isActive = location.pathname === to;

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <Link
        to={to}
        onClick={onClick}
        className={`block rounded-lg px-4 py-3 text-lg font-medium transition-all ${
          isActive
            ? 'bg-emerald-600 text-white'
            : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
        }`}
      >
        {children}
      </Link>
      <motion.div
        className="absolute bottom-0 left-0 z-10 h-8 bg-emerald-600"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0 }}
      />
    </motion.div>
  );
};

export default MobileNavLink;
