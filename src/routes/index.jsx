import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layouts from "../Layouts";
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Layouts>
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
      </Layouts>
    </BrowserRouter>
  );
}

export default App;
