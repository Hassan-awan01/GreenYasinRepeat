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
import OurTeamPage from './Components/Pages/OurTeamPage/OurTeamPage';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/GreenYasin/',
        element: <HomePage />,
      },
      {
        path: '/GreenYasin/about',
        element: <AboutUsPage />,
      },
      {
        path: '/GreenYasin/contact',
        element: <ContactPage />,
      },
      {
        path: '/GreenYasin/our-work',
        element: <OurWorkPage />,
      },
      {
        path: '/GreenYasin/our-work/:projectId',
        element: <ProjectDetailPage />,
      },
      {
        path: '/GreenYasin/blog',
        element: <BlogPage />,
      },
      {
        path: '/GreenYasin/blog/:articleId',
        element: <ArticlePage />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: '/GreenYasin/add-post',
            element: <AddPostPage />,
          },
        ],
      },
      {
        path: '/GreenYasin/services/:categoryName',
        element: <ServiceDetailPage />,
      },
      {
        path: '/GreenYasin/services/:categoryName/:subServiceTitle',
        element: <SubServiceDetailPage />,
      },
      {
        path: '/GreenYasin/our-team',
        element: <OurTeamPage />,
      },
      {
        path: '/GreenYasin/signup',
        element: <SignUp />,
      },
      {
        path: '/GreenYasin/login',
        element: <Login />,
      },
      {
        path: '/GreenYasin/profile',
        element: <ProfilePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
