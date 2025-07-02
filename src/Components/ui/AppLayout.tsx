// import Header from './Header';
import Navbar from './Navbar/Navbar';
import Spinner from './Spinner/Spinner';
// import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation, useLocation } from 'react-router-dom';
import Footer from './Footer/Footer';
import { useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const BASE_PATH = '/GreenYasin';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  const location = useLocation();

  // Determine if the current path is for authentication pages
  const isAuthPage = location.pathname === `${BASE_PATH}/signup` || location.pathname === `${BASE_PATH}/login`;

  // WhatsApp message text
  const whatsappMessage = encodeURIComponent('I visited your website and would like to know more about your services.');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      {isLoading && !isAuthPage && <Spinner />}

      {!isAuthPage && <Navbar />}
      <div className="flex-grow">
        <main className="">
          <Outlet />
        </main>
      </div>
      {!isAuthPage && <Footer />}
      {/* WhatsApp Floating Button */}
      {!isAuthPage && (
        <a
          href={`https://wa.me/923035388246?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed left-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 shadow-lg transition-transform hover:scale-110 hover:bg-emerald-700"
          style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-white" size={32} />
        </a>
      )}
    </div>
  );
}

export default AppLayout;
