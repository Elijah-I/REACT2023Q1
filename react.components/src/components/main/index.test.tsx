import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from 'tests/renderWithRouter';
import { vi } from 'vitest';
import Main from '.';

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        info: { pages: 1 },
        results: [
          {
            created: '2017-11-04T18:48:46.250Z',
            episode: [
              'https://rickandmortyapi.com/api/episode/1',
              'https://rickandmortyapi.com/api/episode/2',
            ],
            gender: 'Male',
            id: 1,
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            location: { name: 'Citadel of Ricks', url: '' },
            name: 'Rick Sanchez',
            origin: { name: 'Earth (C-137)', url: '' },
            species: 'Human',
            status: 'Alive',
            type: '',
            url: 'https://rickandmortyapi.com/api/character/1',
          },
          {
            created: '2017-11-04T18:50:21.651Z',
            episode: [
              'https://rickandmortyapi.com/api/episode/1',
              'https://rickandmortyapi.com/api/episode/2',
            ],
            gender: 'Male',
            id: 2,
            image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
            location: { name: 'Citadel of Ricks', url: '' },
            name: 'Morty Smith',
            origin: { name: 'unknown', url: '' },
            species: 'Human',
            status: 'Alive',
            type: '',
            url: 'https://rickandmortyapi.com/api/character/2',
          },
        ],
      }),
  })
) as unknown as typeof global.fetch;

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
