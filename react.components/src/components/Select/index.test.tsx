import React from 'react';
import { render, screen } from '@testing-library/react';
import { OPTION } from 'types/search.types';
import Select from '.';

describe('Select', () => {
  it('renders select with 2 options', () => {
    const forwardedRef = React.createRef<HTMLSelectElement>();

    render(
      <Select forwardedRef={forwardedRef} key={1}>
        <option data-testid="select-option" value={OPTION.PHOTO}>
          {OPTION.PHOTO}
        </option>
        <option data-testid="select-option" value={OPTION.POST}>
          {OPTION.POST}
        </option>
      </Select>
    );

    const options = screen.getAllByTestId('select-option');
    expect(options.length).toBe(2);
  });
});
