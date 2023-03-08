import React from 'react';
import { screen, render } from '@testing-library/react';

import withRouter from 'tests/withRouter';
import About from '.';

describe('About', () => {
  beforeEach(() => {
    render(withRouter(<About />));
  });

  it('renders Author component', () => {
    const title = screen.getByText(/Elijah/i);
    expect(title).toBeInTheDocument();
  });

  it('renders Social component', () => {
    const links = screen.getAllByRole('link');
    const haveRequiredHref = links.some((link) =>
      (link as HTMLAnchorElement).href.toLowerCase().includes('Elijah-I'.toLowerCase())
    );
    expect(haveRequiredHref).toBeTruthy();
  });
});
