import React from 'react';
import { render, screen } from '@testing-library/react';
import InputRadioGroup from '.';
import provideUseFormMethods from 'tests/provideUseFormMethods';

describe('InputRadioGroup', () => {
  const expected = {
    title: 'author',
    labels: ['Elijah', 'Neo'],
  };

  const { register, clearErrors, errors } = provideUseFormMethods();

  beforeEach(() => {
    render(
      <InputRadioGroup
        name="author"
        error={errors.author}
        onFocus={() => clearErrors('author')}
        register={register}
        elements={expected.labels}
      />
    );
  });

  it('renders component with Title', () => {
    expect(screen.getByText(expected.title)).toBeInTheDocument();
  });

  it('renders component with 2 radio buttons', () => {
    expect(screen.getByText(expected.labels[0])).toBeInTheDocument();
    expect(screen.getByText(expected.labels[1])).toBeInTheDocument();
  });
});
