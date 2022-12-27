import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import routes from './routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Routes>
        {routes.map((route, i) => {
          const {
            route: RouteComponent,
            isCheckAuthenticated,
            component: Component,
            path,
          } = route;

          return (
            <Route key={i} element={<RouteComponent />}>
              {isCheckAuthenticated ? (
                <Route
                  path={path}
                  element={path === '/' ? <Navigate to='/' /> : <Component />}
                />
              ) : (
                <Route path={path} element={<Component />} />
              )}
            </Route>
          );
        })}
      </Routes>
      <div>
        <ToastContainer
          position='top-right'
          // autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
        />
      </div>
    </>
  );
}

export default App;
