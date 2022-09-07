import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import { AUTH_ROUTES } from './store/constant';

const authRoutes = [
  {
    path: AUTH_ROUTES.LOGIN,
    auth: true,
    exact: true,
    component: <Login />,
  },
  {
    path: AUTH_ROUTES.REGISTER,
    auth: true,
    exact: true,
    component: <Register />,
  },
];

export default authRoutes;
