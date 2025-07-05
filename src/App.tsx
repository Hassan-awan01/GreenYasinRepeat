import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';

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
import UpdateBlogPage from './Components/Pages/BlogPage/UpdateBlogPage';
import BlogsPage from './Components/Pages/BlogPage/BlogPage';
import NotFoundPage from './Components/Pages/NotFoundPage';
import CareerPage from './Components/Pages/CareerPage/Careerpage';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/GreenYasin/" replace />,
      },
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
        path: '/GreenYasin/career',
        element: <CareerPage />,
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
        element: <BlogsPage />,
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
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
