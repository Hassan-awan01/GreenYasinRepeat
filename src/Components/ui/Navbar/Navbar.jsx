import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { motion, AnimatePresence } from 'framer-motion';

import ContactBar from './ContactBar';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-white/60 backdrop-blur-sm shadow-sm'
      }`}
    >
      <ContactBar />
      <div>
        <div className="global-container flex h-20 max-w-screen-xl items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-bold text-emerald-600 transition-colors hover:text-emerald-700"
          >
            Green Yasin
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <DesktopMenu />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-emerald-50 hover:text-emerald-600 focus:outline-none md:hidden"
          >
            <RxHamburgerMenu size={25} />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
