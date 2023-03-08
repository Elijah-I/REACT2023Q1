import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';

import withRouter from 'tests/withRouter';
import Main from '.';

describe('Main', () => {
  beforeEach(() => {});

  // it('shows loader while cards are uploading', () => {
  //   const { container } = render(withRouter(<Main />));
  //   const loader = container.querySelector('.loader');
  //   expect(loader).toBeInTheDocument();
  // });

  it('shows cards after they are uploaded', async () => {
    render(withRouter(<Main />));

    await waitFor(async () => {
      console.log('waitfor 0');
    });

    await waitFor(async () => {
      console.log('waitfor 1');
    });

    await waitFor(async () => {
      console.log('waitfor 2');
    });

    screen.debug();

    //const firstCard = await screen.findByText('Make your');
    //expect(firstCard).toBeInTheDocument();
  });
});
