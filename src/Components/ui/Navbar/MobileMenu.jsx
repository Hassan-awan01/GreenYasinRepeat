import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { auth } from '../../../firebase';
import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import MobileNavLink from './MobileNavLink';

const MobileMenu = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Define menu items with correct route paths
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: isOpen ? '0%' : '-100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="fixed top-0 left-0 z-50 h-screen w-full bg-white/95 backdrop-blur-md shadow-2xl md:hidden flex flex-col"
    >
      {/* Close Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute top-7 right-6 rounded-full p-2 text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-600"
        onClick={onClose}
      >
        <RxCross2 size={24} />
      </motion.button>

      {/* Profile or Sign In Button - Moved to Top */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="px-8 pt-24 pb-6 border-b border-gray-200 flex justify-center"
        >
          {user ? (
            <Link
              to="/profile"
              className="flex items-center justify-center rounded-full transition-all duration-300 hover:ring-2 hover:ring-emerald-500"
              onClick={onClose}
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || 'Profile'}
                  className="h-16 w-16 rounded-full object-cover shadow-md"
                />
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md">
                  <FaUser className="h-8 w-8" />
                </div>
              )}
            </Link>
          ) : (
            <Link
              to="/signup"
              className="block rounded-full bg-emerald-600 px-6 py-3 text-center text-lg font-medium text-white shadow-lg transition-all hover:bg-emerald-700 hover:shadow-emerald-500/30 w-full max-w-xs"
              onClick={onClose}
            >
              Sign Up
            </Link>
          )}
        </motion.div>
      )}

      {/* Navigation Links */}
      <div className="mt-4 flex flex-col space-y-2 px-8 flex-grow overflow-y-auto">
        {menuItems.map(({ name, path }, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index + 0.5 }}
          >
            <MobileNavLink to={path} onClick={onClose}>
            {name}
            </MobileNavLink>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileMenu;
