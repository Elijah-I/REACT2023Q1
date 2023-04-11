import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from 'tests/renderWithRouter';
import Main from '.';

describe('Main', () => {
  it('renders Search component', async () => {
    const { container } = renderWithRouter(<Main />);
    const localSearch = container.querySelector('.search__line');

    await waitFor(() => {
      expect(localSearch).toBeInTheDocument();
    });
  });

  it('shows loader while cards are uploading', async () => {
    const { container } = renderWithRouter(<Main />);
    const loader = container.querySelector('.loader');

    await waitFor(() => {
      expect(loader).toBeInTheDocument();
    });
  });

  it('shows cards after they are uploaded', async () => {
    let firstCard;

    renderWithRouter(<Main />);

    firstCard = screen.queryByText(/site worse/);
    expect(firstCard).toBe(null);

    waitFor(async () => {
      firstCard = await screen.findByText(/site worse/);
      expect(firstCard).toBeInTheDocument();
    });
  });
});
