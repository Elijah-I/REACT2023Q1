import React from 'react';
import { screen, render } from '@testing-library/react';

import withRouter, { host } from 'tests/withRouter';
import Header from '.';
import ROUTES from 'types/routes.types';

describe('About', () => {
  beforeEach(() => {
    render(withRouter(<Header />));
  });

  it('has main page link', () => {
    const links = screen.getAllByRole('link');
    const haveRequiredHref = links.some(
      (link) => (link as HTMLAnchorElement).href === `${host}/#/`
    );

    expect(haveRequiredHref).toBeTruthy();
  });

  it('has main page link selected', () => {
    const selectedLink = screen.getByRole('link', { current: 'page' });
    expect((selectedLink as HTMLAnchorElement).href).toBe(`${host}/#/`);
  });

  it('has about link', () => {
    const links = screen.getAllByRole('link');
    const haveRequiredHref = links.some(
      (link) => (link as HTMLAnchorElement).href === `${host}/#/about`
    );
    expect(haveRequiredHref).toBeTruthy();
  });

  it('reacts to URL change by hands', async () => {
    location.hash = `/${ROUTES.ERROR}`;
    const img404 = await screen.findByRole('img');
    expect(img404).toHaveAttribute('alt', 'not found');
  });

  it('handles incorrect URL', async () => {
    location.hash = `/nothing`;
    const img404 = await screen.findByRole('img');
    expect(img404).toHaveAttribute('alt', 'not found');
  });
});
