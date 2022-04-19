import React from "react";
import Login from "./components/Login";

const authRoutes = [
  {
    path: "/login",
    auth: true,
    exact: true,
    component: <Login />,
  },
];

export default authRoutes;
