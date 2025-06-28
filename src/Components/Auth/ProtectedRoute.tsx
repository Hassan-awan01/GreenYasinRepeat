import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useProtectRoute } from '@/features/hooks/use-protect-route';

const BASE_PATH = '/GreenYasin';

const ProtectedRoute = () => {
  const [user] = useProtectRoute();

  // If user is not set, redirect to login
  if (!user) {
    return <Navigate to={`${BASE_PATH}/login`} replace />;
  }

  // If user exists, allow access
  return <Outlet />;
};

export default ProtectedRoute;
