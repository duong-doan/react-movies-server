import React from 'react';
import { Outlet } from 'react-router-dom';
import { getToken } from 'utils/hooks/useToken';

const PublicRoute = () => {
  const isAuthenticated = getToken();
  if (!isAuthenticated) {
    return <Outlet />;
  }
  return <Outlet />;
};

export default PublicRoute;
