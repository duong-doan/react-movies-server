import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import routes from './routes';
import { ToastContainer } from 'react-toastify';
import Homepage from 'modules/home/containers/Body';

function App() {
  console.log('routes', routes);

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
            // <Route element={<Homepage />} key={i}>
            <Route element={<RouteComponent />}>
              {isCheckAuthenticated ? (
                <Route
                  path={path}
                  element={path === '/' ? <Navigate to='/' /> : <Component />}
                />
              ) : (
                <Route path={path} element={<Component />} />
              )}
            </Route>
            // </Route>
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
