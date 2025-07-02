import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { useCurrentMember } from '@/features/hooks/use-get-current-member';
import { useAuthActions } from '@convex-dev/auth/react';

const BASE_PATH = '/GreenYasin';

interface DeskNavLinkProps {
  to: string;
  children: ReactNode;
}

const DeskNavLink = ({ to, children }: DeskNavLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`${BASE_PATH}${to}`}
      className="relative inline-block px-4 py-2 text-gray-700 transition-colors hover:text-emerald-600"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <motion.div
        className="absolute bottom-0 left-0 z-10 h-8 bg-emerald-600"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0 }}
      />
    </Link>
  );
};

const DesktopMenu = () => {
  const { data: user } = useCurrentMember();
  const { signOut } = useAuthActions();
  const handleLogout = async () => {
    await signOut();
    window.location.reload();
  };

  return (
    <div className="flex items-center space-x-8">
      <DeskNavLink to="/">Home</DeskNavLink>
      <DeskNavLink to="/about">About</DeskNavLink>
      <DeskNavLink to="/our-work">Our Work</DeskNavLink>
      <DeskNavLink to="/blog">Blog</DeskNavLink>
      <DeskNavLink to="/contact">Contact</DeskNavLink>

      {user ? (
        <button
          onClick={handleLogout}
          className="ml-4 rounded-full bg-emerald-600 px-6 py-2.5 text-base font-medium text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg"
        >
          Log out
        </button>
      ) : (
        <Link
          to={`${BASE_PATH}/signup`}
          className="group relative ml-4 overflow-hidden rounded-full bg-emerald-600 px-6 py-2.5 text-base font-medium text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg"
        >
          <span className="relative z-10">Sign Up</span>
          <motion.div
            className="absolute inset-0 bg-emerald-500"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
      )}
    </div>
  );
};

export default DesktopMenu;
