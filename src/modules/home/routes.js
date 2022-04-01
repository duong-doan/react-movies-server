import React from "react";
import Homepage from "./containers/Home";

const homeRoutes = [
  {
    path: "/",
    auth: true,
    exact: true,
    component: <Homepage />,
  },
];

export default homeRoutes;
