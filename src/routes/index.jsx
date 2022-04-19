import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, i) => {
          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              element={route.component}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
