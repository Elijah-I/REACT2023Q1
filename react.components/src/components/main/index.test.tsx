import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';

import withRouter from 'tests/withRouter';
import Main from '.';

class MockMain extends Main {
  async getCards() {
    this.setState({
      ...this.state,
      cards: [
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
      ],
    });
  }
}

describe('Main', () => {
  it('renders Search component', () => {
    const { container } = render(withRouter(<Main />));
    const localSearch = container.querySelector('#local-search');
    expect(localSearch).toBeInTheDocument();
  });

  it('shows loader while cards are uploading', () => {
    const { container } = render(withRouter(<Main />));
    const loader = container.querySelector('.loader');
    expect(loader).toBeInTheDocument();
  });

  it('shows cards after they are uploaded', async () => {
    render(withRouter(<MockMain />));

    let firstCard = screen.queryByText(/site better/);
    expect(firstCard).toBe(null);

    await waitFor(() => {});
    await waitFor(() => {});
    await waitFor(() => {});

    firstCard = await screen.findByText(/site better/);

    expect(firstCard).toBeInTheDocument();
  });
});
