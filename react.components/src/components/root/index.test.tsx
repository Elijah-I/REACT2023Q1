import React from 'react';
import renderWithRouter from 'tests/renderWithRouter';
import Root from '.';

describe('Root', () => {
  it('renders Header component', () => {
    const { container } = renderWithRouter(<Root />);
    const header = container.getElementsByClassName('header');
    expect(header.length).toBe(1);
  });

  it('renders Container divs', () => {
    const { container } = renderWithRouter(<Root />);
    const containers = container.getElementsByClassName('container');
    expect(containers.length).toBe(2);
  });
});
