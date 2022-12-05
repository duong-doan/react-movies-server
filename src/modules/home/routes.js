import PublicRoute from 'routes/components/PublicRoute';
import Body from './containers/Body';

const homeRoutes = [
  {
    path: '/',
    auth: true,
    exact: true,
    component: Body,
    isCheckAuthenticated: false,
    route: PublicRoute,
  },
];

export default homeRoutes;
