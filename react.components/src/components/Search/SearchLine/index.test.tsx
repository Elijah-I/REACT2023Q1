import React from 'react';
import { vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import { OPTION } from 'types/search.types';

import SearchLine from '.';

describe('SearchLine', () => {
  it('renders search element', () => {
    render(<SearchLine option={OPTION.ALL} search="" setSearch={vi.fn()} />);
    const search = screen.getByRole('textbox');

    expect(search).toBeInTheDocument();
  });

  it('renders search element with value from props', () => {
    const expectedValue = 'test';

    render(<SearchLine option={OPTION.ALL} search={expectedValue} setSearch={vi.fn()} />);
    const search = screen.getByDisplayValue(expectedValue);

    expect(search).toBeInTheDocument();
  });

  it('renders search element with icon from props', () => {
    const expectedIcon = OPTION.PHOTO;

    const { container } = render(
      <SearchLine option={expectedIcon} search="" setSearch={vi.fn()} />
    );
    const icon = container.getElementsByClassName(`icon--${expectedIcon}`)[0];

    expect(icon).toBeInTheDocument();
  });
});
