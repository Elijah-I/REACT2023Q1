import React from 'react';
import { screen, render } from '@testing-library/react';

import withRouter from '../../../tests/withRouter';
import Social from '.';

describe('Social', () => {
  beforeEach(() => {
    render(withRouter(<Social />));
  });

  it('has author github link', () => {
    const links = screen.getAllByRole('link');
    const haveRequiredHref = links.some((link) =>
      link.href.toLowerCase().includes('Elijah-I'.toLowerCase())
    );
    expect(haveRequiredHref).toBeTruthy();
  });

  it('has RS-SCHOOL github link', () => {
    const links = screen.getAllByRole('link');
    const haveRequiredHref = links.some((link) =>
      link.href.toLowerCase().includes('rolling-scopes-school/'.toLowerCase())
    );
    expect(haveRequiredHref).toBeTruthy();
  });
});
