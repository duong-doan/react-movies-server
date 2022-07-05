
import authRoutes from "../modules/auth/routes";
import homeRoutes from "../modules/home/routes";
import moviesRoutes from "../modules/movies/routes";

const routes = [...homeRoutes, ...authRoutes, ...moviesRoutes];

export default routes;
