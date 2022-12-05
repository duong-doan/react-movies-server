import PublicRoute from 'routes/components/PublicRoute';
import Login from './components/Login';
import Register from './components/Register';
import { AUTH_ROUTES } from './store/constant';

const authRoutes = [
  {
    path: AUTH_ROUTES.LOGIN,
    auth: true,
    exact: true,
    component: Login,
    route: PublicRoute,
    isCheckAuthenticated: false,
  },
  {
    path: AUTH_ROUTES.REGISTER,
    auth: true,
    exact: true,
    component: Register,
    route: PublicRoute,
    isCheckAuthenticated: false,
  },
];

export default authRoutes;
