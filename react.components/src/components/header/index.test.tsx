import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter, { host } from 'tests/renderWithRouter';

import Header from '.';

const mockLocation = { state: '', key: '', pathname: '', search: '', hash: '' };

describe('About', () => {
  it('has main page link', () => {
    renderWithRouter(<Header location={mockLocation} />);

    const links = screen.getAllByRole('link');
    const haveRequiredHref = links.some((link) => (link as HTMLAnchorElement).href === `${host}/`);

    expect(haveRequiredHref).toBeTruthy();
  });

  it('has main page link selected', () => {
    renderWithRouter(<Header location={mockLocation} />);

    const selectedLink = screen.getByRole('link', { current: 'page' });

    expect((selectedLink as HTMLAnchorElement).href).toBe(`${host}/`);
  });

  it('has about link', () => {
    renderWithRouter(<Header location={mockLocation} />);

    const links = screen.getAllByRole('link');
    const haveRequiredHref = links.some(
      (link) => (link as HTMLAnchorElement).href === `${host}/about`
    );

    expect(haveRequiredHref).toBeTruthy();
  });

  it('handles incorrect URL', async () => {
    renderWithRouter(<Header location={mockLocation} />, '/fake');

    const title404 = screen.getByText(/404 page/i);
    expect(title404).toBeInTheDocument();
  });
});
