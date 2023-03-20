import React from 'react';
import { vi } from 'vitest';
import { screen, waitFor, act } from '@testing-library/react';

import renderWithRouter from 'tests/renderWithRouter';
import Main from '.';

describe('Main', () => {
  beforeAll(() => {
    vi.spyOn(Main.prototype, 'readCards').mockImplementation(async () => {
      return Promise.resolve([
        {
          id: 0,
          title: 'Make your site worse',
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
      ]);
    });
  });

  it('renders Search component', () => {
    const { container } = renderWithRouter(<Main />);
    const localSearch = container.querySelector('#local-search');
    expect(localSearch).toBeInTheDocument();
  });

  it('shows loader while cards are uploading', () => {
    const { container } = renderWithRouter(<Main />);
    const loader = container.querySelector('.loader');
    expect(loader).toBeInTheDocument();
  });

  it('shows cards after they are uploaded', async () => {
    await act(async () => {
      renderWithRouter(<Main />);
    });

    let firstCard = screen.queryByText(/site worse/);
    expect(firstCard).toBe(null);

    waitFor(async () => {
      firstCard = await screen.findByText(/site worse/);
      expect(firstCard).toBeInTheDocument();
    });
  });
});
