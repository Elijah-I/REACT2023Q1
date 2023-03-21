import React from 'react';
import { vi } from 'vitest';
import { screen, fireEvent, createEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { OPTION } from 'types/search.types';
import renderWithRouter from 'tests/renderWithRouter';
import Search from '.';

describe('Search', () => {
  it('renders Options component', () => {
    const { container } = renderWithRouter(<Search makeSearch={vi.fn()} />);
    const optionAll = container.querySelector(`#option-${OPTION.ALL}`);
    expect(optionAll).toBeInTheDocument();
  });

  it('renders SearchLine component', () => {
    renderWithRouter(<Search makeSearch={vi.fn()} />);
    const SearchLine = screen.getByRole('textbox');
    expect(SearchLine).toBeInTheDocument();
  });

  it('renders Spaces component', () => {
    const { container } = renderWithRouter(<Search makeSearch={vi.fn()} />);
    const localSearch = container.querySelector('#local-search');
    expect(localSearch).toBeInTheDocument();
  });

  it('switches Option component on click', () => {
    const makeSearch = vi.fn();

    const { container } = renderWithRouter(<Search makeSearch={makeSearch} />);
    const allLabel = container.querySelector(`.icon--${OPTION.ALL}`)!;
    const photoLabel = container.querySelector(`.icon--${OPTION.PHOTO}`)!;

    fireEvent.click(photoLabel);

    expect(makeSearch).toHaveBeenCalledTimes(1);
    expect(photoLabel.classList.contains('icon--selected')).toBeTruthy();
    expect(allLabel.classList.contains('icon--selected')).not.toBeTruthy();
  });

  it('switches Spaces component on click', () => {
    const makeSearch = vi.fn();

    const { container } = renderWithRouter(<Search makeSearch={makeSearch} />);
    const webLabel = screen.getByLabelText(/the web/i);
    const localRadio = container.querySelector('#local-search')! as HTMLInputElement;
    const webRadio = container.querySelector('#web-search')! as HTMLInputElement;

    fireEvent.click(webLabel);

    expect(makeSearch).toHaveBeenCalledTimes(1);
    expect(localRadio.checked).toEqual(false);
    expect(webRadio.checked).toEqual(true);
  });

  it('changes SearchLine text on typing', async () => {
    const makeSearch = vi.fn();
    const expectedValue = 'test';

    const { container } = renderWithRouter(<Search makeSearch={makeSearch} />);
    const search = container.querySelector('.search__input')! as HTMLInputElement;

    const user = userEvent.setup();
    await user.type(search, expectedValue);

    expect(makeSearch).toHaveBeenCalledTimes(1);
    expect(screen.getByDisplayValue(expectedValue)).toBeInTheDocument();
  });

  it('should prevent default action on submit', () => {
    renderWithRouter(<Search makeSearch={vi.fn()} />);

    const form = screen.getByRole('form');
    const submitEvent = createEvent.submit(form);
    fireEvent(form, submitEvent);

    expect(submitEvent.defaultPrevented).toBe(true);
  });
});
