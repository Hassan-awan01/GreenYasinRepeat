// import Header from './Header';
import Navbar from './Navbar/Navbar';
import Spinner from './Spinner/Spinner';
// import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation, useLocation } from 'react-router-dom';
import Footer from './Footer/Footer';
import { useEffect } from 'react';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  const location = useLocation();

  // Determine if the current path is for authentication pages
  const isAuthPage = location.pathname === '/signup' || location.pathname === '/login';

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
    </div>
  );
}

export default AppLayout;
