import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './Components/ui/AppLayout';
import HomePage from './Components/Pages/HomePage/HomePage';
import ContactPage from './Components/Pages/ContactPage/Contactpage';
import ServiceDetailPage from './Components/Pages/ServiceDetailPage/ServiceDetailPage';
import SubServiceDetailPage from './Components/Pages/SubServiceDetailPage/SubServiceDetailPage';
import AboutUsPage from './Components/Pages/AboutUsPage/AboutUsPage';
import SignUp from './Components/Pages/SignUpPage/SignUp';
import Login from './Components/Pages/LoginPage/Login';
import OurWorkPage from './Components/Pages/OurWorkPage/OurWorkPage';
import BlogPage from './Components/Pages/BlogPage/BlogPage';
import ArticlePage from './Components/Pages/BlogPage/ArticlePage';
import AddPostPage from './Components/Pages/BlogPage/AddPostPage';
import ProfilePage from './Components/Pages/ProfilePage/ProfilePage';
import ProjectDetailPage from './Components/Pages/OurWorkPage/ProjectDetailPage';
import ProtectedRoute from './Components/Auth/ProtectedRoute';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutUsPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/our-work',
        element: <OurWorkPage />,
      },
      {
        path: '/our-work/:projectId',
        element: <ProjectDetailPage />,
      },
      {
        path: '/blog',
        element: <BlogPage />,
      },
      {
        path: '/blog/:articleId',
        element: <ArticlePage />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: '/add-post',
            element: <AddPostPage />,
          },
        ],
      },
      {
        path: '/services/:categoryName',
        element: <ServiceDetailPage />,
      },
      {
        path: '/services/:categoryName/:subServiceTitle',
        element: <SubServiceDetailPage />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
