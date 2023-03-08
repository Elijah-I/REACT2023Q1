import React from 'react';
import { screen, render } from '@testing-library/react';

import { Card as ICard } from 'types/card.types';
import { OPTION, SearchState } from 'types/search.types';
import Cards from '.';

describe('Card', () => {
  const cards: ICard[] = [
    {
      id: 0,
      title: 'Make your site better',
      author: 'Elijah',
      type: 'photo',
      tags: ['IT', 'SEO', 'Listing'],
      picture: 'https://www.interfax.ru/ftproot/textphotos/2022/06/14/tt700.jpg',
      statistic: { views: 524, likes: 17, isFavorite: true },
    },
    {
      id: 1,
      title: 'Rest',
      author: 'Sam',
      type: 'video',
      tags: ['Nature', 'Sun', 'Sea', 'Beach'],
      picture:
        'https://w0.peakpx.com/wallpaper/23/442/HD-wallpaper-nature-sea-sky-skyline-sun-tree-nature-trees-sun-skyline-sea-sky.jpg',
      statistic: {
        views: 11585,
        likes: 2585,
        isFavorite: false,
      },
    },
  ];

  const searchState: SearchState = {
    option: OPTION.ALL,
    space: 'local',
    search: '',
  };

  beforeAll(() => {
    searchState.search = '';
    searchState.space = 'local';
    searchState.option = OPTION.ALL;
  });

  it('renders 2 cards', () => {
    render(<Cards search={searchState} cards={cards} />);
    expect(screen.getByText(/SEO/)).toBeInTheDocument();
    expect(screen.getByText(/Nature/)).toBeInTheDocument();
  });

  it('filters card by search in Tag', () => {
    searchState.search = 'SEO';
    render(<Cards search={searchState} cards={cards} />);
    expect(screen.getByText(/SEO/)).toBeInTheDocument();
    expect(screen.queryByText(/Nature/)).not.toBeInTheDocument();
  });

  it('filters card by search in Author', () => {
    searchState.search = 'Elijah';
    render(<Cards search={searchState} cards={cards} />);
    expect(screen.getByText(/SEO/)).toBeInTheDocument();
    expect(screen.queryByText(/Nature/)).not.toBeInTheDocument();
  });

  it('filters card by search in Title', () => {
    searchState.search = 'Make';
    render(<Cards search={searchState} cards={cards} />);
    expect(screen.getByText(/SEO/)).toBeInTheDocument();
    expect(screen.queryByText(/Nature/)).not.toBeInTheDocument();
  });

  it('filters card by option', () => {
    searchState.option = OPTION.PHOTO;
    render(<Cards search={searchState} cards={cards} />);
    expect(screen.getByText(/SEO/)).toBeInTheDocument();
    expect(screen.queryByText(/Nature/)).not.toBeInTheDocument();
  });

  it('returns no cards found on wrong search', () => {
    searchState.search = 'nothing';
    render(<Cards search={searchState} cards={cards} />);
    expect(screen.getByText(/no cards found/)).toBeInTheDocument();
  });
});
