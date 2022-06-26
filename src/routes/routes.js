import authRoutes from "modules/auth/routes";
import homeRoutes from "modules/home/routes";
import movieRoutes from "modules/movies/routes";

const routes = [...homeRoutes, ...authRoutes, ...movieRoutes];

export default routes;
