import React from 'react';
import { screen, render } from '@testing-library/react';

import withRouter from 'tests/withRouter';
import Root from '.';

describe('Root', () => {
  it('renders Header component', () => {
    const { container } = render(withRouter(<Root />));
    const header = container.getElementsByClassName('header');
    expect(header.length).toBe(1);
  });

  it('renders Container divs', () => {
    const { container } = render(withRouter(<Root />));
    const containers = container.getElementsByClassName('container');
    expect(containers.length).toBe(2);
  });
});
