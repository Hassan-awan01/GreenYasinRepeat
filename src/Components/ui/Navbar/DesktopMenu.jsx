import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { auth } from '../../../firebase';
import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';

const DeskNavLink = ({ to, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
  <Link
    to={to}
      className="relative inline-block px-4 py-2 text-gray-700 transition-colors hover:text-emerald-600"
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

const DesktopMenu = () => {
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
    <div className="flex items-center space-x-8">
    <DeskNavLink to="/">Home</DeskNavLink>
    <DeskNavLink to="/about">About</DeskNavLink>
      <DeskNavLink to="/our-work">Our Work</DeskNavLink>
    <DeskNavLink to="/blog">Blog</DeskNavLink>
    <DeskNavLink to="/contact">Contact</DeskNavLink>
      {!loading && (
        user ? (
          <Link
            to="/profile"
            className="group relative ml-4 overflow-hidden rounded-full transition-all duration-300 hover:ring-2 hover:ring-emerald-500"
          >
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || 'Profile'}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
                <FaUser className="h-5 w-5" />
              </div>
            )}
          </Link>
        ) : (
    <Link
            to="/signup"
            className="group relative ml-4 overflow-hidden rounded-full bg-emerald-600 px-6 py-2.5 text-base font-medium text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-500/30"
    >
            <span className="relative z-10">Sign Up</span>
            <motion.div
              className="absolute inset-0 bg-emerald-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
    </Link>
        )
      )}
  </div>
);
};

export default DesktopMenu;
