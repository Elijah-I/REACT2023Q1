import React from 'react';
import { screen, render } from '@testing-library/react';

import withRouter, { host } from '../../tests/withRouter';
import Error from '.';

describe('About', () => {
  beforeEach(() => {
    render(withRouter(<Error />));
  });

  it('shows 404 img with src = "/404.jpg" and alt = "not found"', () => {
    const img404 = screen.getByRole('img');
    expect(img404).toHaveAttribute('src', expect.stringMatching(/\/404.jpg/));
    expect(img404).toHaveAttribute('alt', 'not found');
  });

  it('has home page link', () => {
    const links = screen.getAllByRole('link');
    const haveRequiredHref = links.some((link) => link.href === `${host}/#/`);
    expect(haveRequiredHref).toBeTruthy();
  });
});
