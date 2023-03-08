import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Root from 'components/Root';
import Error from 'components/Error';
import Main from 'components/Main';
import About from 'components/About';

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

const app = <RouterProvider router={router} />;

if (root) ReactDOM.createRoot(root).render(app);

export default () => app;
