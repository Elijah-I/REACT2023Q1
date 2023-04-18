import React from 'react';
import { screen, render } from '@testing-library/react';

import { Card as ICard } from 'types/card.types';
import Card from '.';
import { OPTION } from 'types/search.types';

describe('Card', () => {
  const card: ICard = {
    id: 0,
    title: 'Make your site better',
    author: 'Elijah',
    type: OPTION.PHOTO,
    tags: ['IT', 'SEO', 'Listing'],
    picture: 'https://www.interfax.ru/ftproot/textphotos/2022/06/14/tt700.jpg',
    statistic: { views: 524, likes: 17, isFavorite: true },
    date: '17.09.1986',
  };

  beforeEach(() => {
    render(<Card key="0" info={card} />);
  });

  it('renders card with image src and alt="preview"', () => {
    const logo = screen.getAllByRole('img')[0];
    expect(logo).toHaveAttribute('src', expect.stringMatching(/\/tt700.jpg/));
    expect(logo).toHaveAttribute('alt', 'preview');
  });

  it('renders card with title', () => {
    expect(screen.getByText(/Make your/)).toBeInTheDocument();
  });

  it('renders card with author', () => {
    expect(screen.getByText(/Elijah/)).toBeInTheDocument();
  });

  it('renders card with tags', () => {
    expect(screen.getByText(/SEO/)).toBeInTheDocument();
  });

  it('renders card with likes', () => {
    expect(screen.getByText('17')).toBeInTheDocument();
  });

  it('renders card with views', () => {
    expect(screen.getByText('524')).toBeInTheDocument();
  });

  it('renders card with favorite', () => {
    const { container } = render(<Card key="0" info={card} />);
    const favorite = container.querySelector('.card__favorite-active');
    expect(favorite).toBeInTheDocument();
  });
});
