import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';
import { useCurrentMember } from '@/features/hooks/use-get-current-member';
import { useAuthActions } from '@convex-dev/auth/react';

const BASE_PATH = '/GreenYasin';

interface MobileNavLinkProps {
  to: string;
  children: ReactNode;
  onClick: () => void;
}

const MobileNavLink = ({ to, children, onClick }: MobileNavLinkProps) => (
  <Link
    to={`${BASE_PATH}${to}`}
    onClick={onClick}
    className="block py-2 text-lg text-gray-700 transition-colors hover:text-emerald-600"
  >
    {children}
  </Link>
);

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  useLocation(); // Optional if you use it for highlighting routes later
  const { data: user } = useCurrentMember();
  const { signOut } = useAuthActions();
  const handleLogout = async () => {
    await signOut();
    window.location.reload();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-x-0 top-20 z-50 bg-white shadow-lg md:hidden"
    >
      <div className="global-container space-y-4 py-6">
        <MobileNavLink to="/" onClick={onClose}>
          Home
        </MobileNavLink>
        <MobileNavLink to="/about" onClick={onClose}>
          About
        </MobileNavLink>
        <MobileNavLink to="/our-work" onClick={onClose}>
          Our Work
        </MobileNavLink>
        <MobileNavLink to="/blog" onClick={onClose}>
          Blog
        </MobileNavLink>
        <MobileNavLink to="/contact" onClick={onClose}>
          Contact
        </MobileNavLink>

        {user ? (
          <button
            onClick={async () => {
              await handleLogout();
              onClose();
            }}
            className="mt-4 block w-full rounded-lg bg-emerald-600 px-6 py-2.5 text-center text-base font-medium text-white transition-all duration-300 hover:bg-emerald-700"
          >
            Log out
          </button>
        ) : (
          <Link
            to={`${BASE_PATH}/signup`}
            onClick={onClose}
            className="mt-4 block w-full rounded-lg bg-emerald-600 px-6 py-2.5 text-center text-base font-medium text-white transition-all duration-300 hover:bg-emerald-700"
          >
            Sign Up
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default MobileMenu;
