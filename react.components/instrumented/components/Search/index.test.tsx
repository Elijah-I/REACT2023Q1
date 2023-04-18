import React from 'react';
import { screen, fireEvent, createEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from 'tests/renderWithRouter';
import Search from '.';

describe('Search', () => {
  it('renders Search component', () => {
    renderWithRouter(<Search />);
    const SearchLine = screen.getByRole('textbox');
    expect(SearchLine).toBeInTheDocument();
  });

  it('changes SearchLine text on typing', async () => {
    const expectedValue = 'test';

    const { container } = renderWithRouter(<Search />);
    const search = container.querySelector('.search__input')! as HTMLInputElement;

    const user = userEvent.setup();
    await user.type(search, expectedValue);

    expect(screen.getByDisplayValue(expectedValue)).toBeInTheDocument();
  });

  it('should prevent default action on submit', () => {
    renderWithRouter(<Search />);

    const form = screen.getByRole('form');
    const submitEvent = createEvent.submit(form);
    fireEvent(form, submitEvent);

    expect(submitEvent.defaultPrevented).toBe(true);
  });
});
