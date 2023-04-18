import React from 'react';
import { screen, render } from '@testing-library/react';

import { Card as ICard } from 'types/card.types';
import { OPTION, SearchState, SPACE } from 'types/search.types';
import Cards from '.';

describe('Card', () => {
  const cards: ICard[] = [
    {
      id: 0,
      title: 'Make your site better',
      author: 'Elijah',
      type: OPTION.PHOTO,
      tags: ['IT', 'SEO', 'Listing'],
      picture: 'https://www.interfax.ru/ftproot/textphotos/2022/06/14/tt700.jpg',
      statistic: {
        views: 524,
        likes: 17,
        isFavorite: true,
      },
      date: '17.09.1986',
    },
    {
      id: 1,
      title: 'Rest',
      author: 'Sam',
      type: OPTION.VIDEO,
      tags: ['Nature', 'Sun', 'Sea', 'Beach'],
      picture:
        'https://w0.peakpx.com/wallpaper/23/442/HD-wallpaper-nature-sea-sky-skyline-sun-tree-nature-trees-sun-skyline-sea-sky.jpg',
      statistic: {
        views: 115,
        likes: 25,
        isFavorite: false,
      },
      date: '17.09.1986',
    },
  ];

  const searchState: SearchState = {
    option: OPTION.ALL,
    space: SPACE.LOCAL,
    search: '',
  };

  beforeAll(() => {
    searchState.search = '';
    searchState.space = SPACE.LOCAL;
    searchState.option = OPTION.ALL;
  });

  it('renders 2 cards', () => {
    render(<Cards search={searchState} cards={cards} />);
    expect(screen.getByText(/SEO/)).toBeInTheDocument();
    expect(screen.getByText(/Nature/)).toBeInTheDocument();
  });

  it('returns no cards found on wrong search', () => {
    searchState.search = 'nothing';
    render(<Cards search={searchState} cards={cards} />);
    expect(screen.getByText(/no cards found/)).toBeInTheDocument();
  });
});
