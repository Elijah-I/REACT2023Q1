import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

export const host = 'http://localhost:3000';

export default (Component, initialEntries = '/') => {
  const route = {
    path: initialEntries,
    element: Component,
  };
  const config = {
    initialEntries: [initialEntries],
  };

  const router = createMemoryRouter([route], config);

  return render(<RouterProvider router={router} />);
};
