import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import ROUTES from 'types/routes.types';

import ErrorPage from 'pages/error.page';
import IndexPage from 'pages/index.page';
import { action as destroyAction } from 'pages/destroy.page';
import ContactPage, { loader as contactLoader, action as favoriteAction } from 'pages/contact.page';
import EditPage, { loader as editLoader, action as editAction } from 'pages/edit.page';
import RootPage, { loader as rootLoader, action as rootAction } from 'pages/root.page';

import './index.css';

const root = document.getElementById('root');
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={ROUTES.ROOT}
      element={<RootPage />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<IndexPage />} />
        <Route
          path={ROUTES.CONTACT}
          element={<ContactPage />}
          loader={contactLoader}
          action={favoriteAction}
        />
        <Route
          path={ROUTES.CONTACT_EDIT}
          element={<EditPage />}
          loader={editLoader}
          action={editAction}
        />
        <Route path={ROUTES.CONTACT_DESTROY} action={destroyAction} />
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
