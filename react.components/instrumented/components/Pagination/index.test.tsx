import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from 'tests/renderWithRouter';
import Pagination from '.';

describe('Pagination', () => {
  it('renders Pagination component', () => {
    const { container } = renderWithRouter(<Pagination totalPages={1} />);
    const pages = container.querySelector('.pages');
    expect(pages).toBeInTheDocument();
  });

  it('renders Pagination component with passed pages amount', () => {
    const { container } = renderWithRouter(<Pagination totalPages={10} />);
    const pages = container.querySelectorAll('.page');
    expect(pages.length).toBe(10);
  });

  it('switches to page on click', async () => {
    const { container } = renderWithRouter(<Pagination totalPages={10} />);
    const page2 = container.querySelectorAll('.page')[1];
    const user = userEvent.setup();
    await user.click(page2);
  });
});
