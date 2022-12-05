import React from 'react';
import { getToken } from 'utils/hooks/useToken';
import { Outlet, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const AuthenticatedRoute = () => {
  const isAuthenticated = getToken();
  useEffect(() => {
    if (!isAuthenticated) {
      toast.info('You must login first!');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  return <Outlet />;
};

export default AuthenticatedRoute;
