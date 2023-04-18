import React from 'react';
import { render, screen } from '@testing-library/react';
import { ApiCard } from 'types/api.card.types';
import CardPreview from '.';

describe('CardPreview', () => {
  const card: ApiCard = {
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
  };

  beforeEach(() => {
    render(<CardPreview info={card} />);
  });

  it('renders card with image src and alt="preview"', () => {
    const logo = screen.getAllByRole('img')[0];
    expect(logo).toHaveAttribute('src', expect.stringMatching(/\/avatar\/1.jpeg/));
    expect(logo).toHaveAttribute('alt', 'preview');
  });

  it('renders card with species', () => {
    expect(screen.getByText(card.species)).toBeInTheDocument();
  });

  it('renders card with gender', () => {
    expect(screen.getByText(card.gender)).toBeInTheDocument();
  });

  it('renders card with location', () => {
    expect(screen.getByText(card.location.name)).toBeInTheDocument();
  });

  it('renders card with origin', () => {
    expect(screen.getByText(card.origin.name)).toBeInTheDocument();
  });

  it('renders card with status', () => {
    expect(screen.getByText(card.status)).toBeInTheDocument();
  });

  it('renders card with episodes amount', () => {
    expect(screen.getByText(card.episode.length)).toBeInTheDocument();
  });
});
