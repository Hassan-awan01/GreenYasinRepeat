import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useProtectRoute } from '@/features/hooks/use-protect-route';
import { useCurrentMember } from '@/features/hooks/use-get-current-member';
import { Loader } from 'lucide-react';

const BASE_PATH = '/GreenYasin';

const ProtectedRoute = () => {
  const { data: user, isLoading: userLoading } = useCurrentMember();
  if (userLoading) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <Loader className="text-muted-foreground size-5 animate-spin" />
      </div>
    );
  }

  console.log(user);
  if (!user) {
    return <Navigate to={`${BASE_PATH}/login`} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
