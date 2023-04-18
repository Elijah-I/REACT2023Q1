import React from 'react';
import { screen, render } from '@testing-library/react';
import { ApiCard } from 'types/api.card.types';
import renderWithRouter from 'tests/renderWithRouter';
import Cards from '.';

describe('ApiCards', () => {
  const cards: ApiCard[] = [
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
  ];

  it('renders 2 cards', () => {
    renderWithRouter(<Cards cards={cards} />);
    expect(screen.getByText(/Rick Sanchez/)).toBeInTheDocument();
    expect(screen.getByText(/Morty Smith/)).toBeInTheDocument();
  });

  it('returns no cards found on wrong search', () => {
    render(<Cards cards={[]} />);
    expect(screen.getByText(/no cards found/)).toBeInTheDocument();
  });
});
