import React from 'react';
import { render, screen } from '@testing-library/react';
import provideUseFormMethods from 'tests/provideUseFormMethods';
import { OPTION } from 'types/search.types';
import Select from '.';

describe('Select', () => {
  it('renders select with 2 options', () => {
    const { register, clearErrors, errors } = provideUseFormMethods();

    render(
      <Select
        name="type"
        onFocus={() => clearErrors('type')}
        error={errors.type}
        register={register}
      >
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
