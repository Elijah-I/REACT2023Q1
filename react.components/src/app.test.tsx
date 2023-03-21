import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './app';

describe('App', () => {
  it('makes correct routing render: main -> about', async () => {
    const { container } = render(<App />);

    const loader = container.querySelector('.loader');
    expect(loader).toBeInTheDocument();

    const user = userEvent.setup();
    const aboutLink = screen.getByText(/about/i);
    await user.click(aboutLink);

    const author = screen.queryByText(/Elijah Ivanik/);
    expect(author).toBeInTheDocument();
  });
});
