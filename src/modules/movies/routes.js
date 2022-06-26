import React from "react";
import List from "./containers/List";
import Detail from "./containers/Detail";

const moviesRoutes = [
  {
    path: "/movies",
    auth: true,
    exact: true,
    component: <List />,
  },
  {
    path: "/movies/:id",
    auth: true,
    exact: true,
    component: <Detail />,
  },
];

export default moviesRoutes;
