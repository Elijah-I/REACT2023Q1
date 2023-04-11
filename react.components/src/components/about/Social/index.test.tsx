import React from 'react';
import { screen } from '@testing-library/react';

import renderWithRouter from 'tests/renderWithRouter';
import Social from '.';

describe('Social', () => {
  beforeEach(() => {
    renderWithRouter(<Social />);
  });

  it('has author github link', () => {
    const links = screen.getAllByRole('link');
    const haveRequiredHref = links.some((link) =>
      (link as HTMLAnchorElement).href.toLowerCase().includes('Elijah-I'.toLowerCase())
    );
    expect(haveRequiredHref).toBeTruthy();
  });

  it('has RS-SCHOOL github link', () => {
    const links = screen.getAllByRole('link');
    const haveRequiredHref = links.some((link) =>
      (link as HTMLAnchorElement).href
        .toLowerCase()
        .includes('rolling-scopes-school/'.toLowerCase())
    );
    expect(haveRequiredHref).toBeTruthy();
  });
});
