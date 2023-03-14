import React from 'react';
import { screen, render } from '@testing-library/react';
import { NavLink } from 'react-router-dom';
import withRouter, { host } from 'tests/withRouter';
import userEvent from '@testing-library/user-event';

import Header from '.';
import ROUTES from 'types/routes.types';

const mockLocation = { state: '', key: '', pathname: '', search: '', hash: '' };

describe('About', () => {
  it('has main page link', () => {
    render(withRouter(<Header location={mockLocation} />));

    const links = screen.getAllByRole('link');
    const haveRequiredHref = links.some(
      (link) => (link as HTMLAnchorElement).href === `${host}/#/`
    );

    expect(haveRequiredHref).toBeTruthy();
  });

  it('has main page link selected', () => {
    render(withRouter(<Header location={mockLocation} />));

    const selectedLink = screen.getByRole('link', { current: 'page' });
    expect((selectedLink as HTMLAnchorElement).href).toBe(`${host}/#/`);
  });

  it('has about link', () => {
    render(withRouter(<Header location={mockLocation} />));

    const links = screen.getAllByRole('link');
    const haveRequiredHref = links.some(
      (link) => (link as HTMLAnchorElement).href === `${host}/#/about`
    );
    expect(haveRequiredHref).toBeTruthy();
  });

  it('handles incorrect URL', async () => {
    render(
      withRouter(
        <>
          <Header location={mockLocation} />
          <NavLink to="/no_url">fake</NavLink>
        </>
      )
    );

    const user = userEvent.setup();
    const fake = screen.getByText(/fake/i);
    await user.click(fake);

    const img404 = await screen.findByRole('img');
    expect(img404).toHaveAttribute('alt', 'not found');
  });
});
