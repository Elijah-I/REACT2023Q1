import React from 'react';
import { screen } from '@testing-library/react';

import renderWithRouter from 'tests/renderWithRouter';
import Error from '.';

describe('About', () => {
  beforeEach(() => {
    renderWithRouter(<Error />);
  });

  it('shows 404 img with src = "/404.jpg" and alt = "not found"', () => {
    const img404 = screen.getByRole('img');
    expect(img404).toHaveAttribute('src', expect.stringMatching(/\/404.jpg/));
    expect(img404).toHaveAttribute('alt', 'not found');
  });
});
