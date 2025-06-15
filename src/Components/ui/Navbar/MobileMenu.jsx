import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { auth } from '../../../firebase';
import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';

const BASE_PATH = '/GreenYasin';

const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={`${BASE_PATH}${to}`}
    onClick={onClick}
    className="block py-2 text-lg text-gray-700 transition-colors hover:text-emerald-600"
  >
    {children}
  </Link>
);

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

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-x-0 top-20 z-50 bg-white shadow-lg md:hidden"
    >
      <div className="global-container space-y-4 py-6">
        <MobileNavLink to="/" onClick={onClose}>Home</MobileNavLink>
        <MobileNavLink to="/about" onClick={onClose}>About</MobileNavLink>
        <MobileNavLink to="/our-work" onClick={onClose}>Our Work</MobileNavLink>
        <MobileNavLink to="/blog" onClick={onClose}>Blog</MobileNavLink>
        <MobileNavLink to="/contact" onClick={onClose}>Contact</MobileNavLink>
        
        {!loading && (
          user ? (
            <Link
              to={`${BASE_PATH}/profile`}
              onClick={onClose}
              className="mt-4 flex items-center space-x-2 text-gray-700"
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || 'Profile'}
                  className="h-8 w-8 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white">
                  <FaUser className="h-4 w-4" />
                </div>
              )}
              <span>Profile</span>
            </Link>
          ) : (
            <Link
              to={`${BASE_PATH}/signup`}
              onClick={onClose}
              className="mt-4 block w-full rounded-lg bg-emerald-600 px-6 py-2.5 text-center text-base font-medium text-white transition-all duration-300 hover:bg-emerald-700"
            >
              Sign Up
            </Link>
          )
        )}
      </div>
    </motion.div>
  );
};

export default MobileMenu;
