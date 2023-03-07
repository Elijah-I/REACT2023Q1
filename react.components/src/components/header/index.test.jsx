import React from 'react';
import { screen, render } from '@testing-library/react';

import withRouter, { host } from '../../tests/withRouter';
import Header from '.';

describe('About', () => {
  beforeEach(() => {
    render(withRouter(<Header />));
  });

  it('has main page link', () => {
    const links = screen.getAllByRole('link');
    const haveRequiredHref = links.some((link) => link.href === `${host}/#/`);

    expect(haveRequiredHref).toBeTruthy();
  });

  it('has main page link selected', () => {
    const selectedLink = screen.getByRole('link', { current: 'page' });
    expect(selectedLink.href).toBe(`${host}/#/`);
  });

  it('has about link', () => {
    const links = screen.getAllByRole('link');
    const haveRequiredHref = links.some((link) => link.href === `${host}/#/about`);
    expect(haveRequiredHref).toBeTruthy();
  });
});
