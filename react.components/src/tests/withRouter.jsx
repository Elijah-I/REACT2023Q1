import React from 'react';

import {
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Error from 'components/Error';

export const host = 'http://localhost:3000';

export default (Component) => {
  const router = createHashRouter(
    createRoutesFromElements(<Route path="/" element={Component} errorElement={<Error />} />)
  );

  return <RouterProvider router={router} />;
};
