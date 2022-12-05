import List from './containers/List';
import Detail from './containers/Detail';
import AuthenticatedRoute from 'routes/components/AuthenticatedRoute';

const moviesRoutes = [
  {
    path: '/movies',
    auth: true,
    exact: true,
    component: List,
    route: AuthenticatedRoute,
    isCheckAuthenticated: true,
  },
  {
    path: '/movies/:id',
    auth: true,
    exact: true,
    component: Detail,
    route: AuthenticatedRoute,
    isCheckAuthenticated: true,
  },
];

export default moviesRoutes;
