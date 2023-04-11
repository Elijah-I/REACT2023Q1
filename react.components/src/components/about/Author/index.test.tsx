import React from 'react';
import { screen, render } from '@testing-library/react';
import Author from '.';

describe('Author', () => {
  beforeEach(() => {
    render(<Author />);
  });

  it('shows author img with src = "/avatar.jpg" and alt = "author"', () => {
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', expect.stringMatching(/\/avatar.jpg/));
    expect(logo).toHaveAttribute('alt', 'author');
  });

  it('has title text', () => {
    const title = screen.getByText(/Elijah/i);
    expect(title).toBeInTheDocument();
  });

  it('has title description', () => {
    const description = screen.getByText(/Been working in IT/i);
    expect(description).toBeInTheDocument();
  });
});
