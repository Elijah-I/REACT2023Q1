import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Root from 'components/root';
import Error from 'components/error';
import Main from 'components/main';
import About from 'components/about';

import ROUTES from 'types/routes.types';

import './styles/app.scss';

const root = document.getElementById('root');
const router = createHashRouter(
  createRoutesFromElements(
    <Route path={ROUTES.ROOT} element={<Root />} errorElement={<Error />}>
      <Route errorElement={<Error />}>
        <Route path={ROUTES.ROOT} element={<Main />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
      </Route>
    </Route>
  )
);

if (root)
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
