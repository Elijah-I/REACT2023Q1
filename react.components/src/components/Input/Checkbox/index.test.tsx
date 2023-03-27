import React from 'react';
import { render, screen } from '@testing-library/react';
import InputCheckbox from '.';
import provideUseFormMethods from 'tests/provideUseFormMethods';

describe('InputCheckbox', () => {
  const expected = {
    label: 'test label',
    title: 'agreement',
    error: { type: 'required', message: 'test error' },
  };

  const { register, clearErrors } = provideUseFormMethods();

  it('renders component with Title and Label', () => {
    render(
      <InputCheckbox
        name="agreement"
        labelText={expected.label}
        error={undefined}
        onClick={() => clearErrors('agreement')}
        register={register}
      />
    );

    expect(screen.getByText(expected.label)).toBeInTheDocument();
    expect(screen.getByText(expected.title)).toBeInTheDocument();
  });

  it('renders component with Error', () => {
    render(
      <InputCheckbox
        name="agreement"
        labelText={expected.label}
        error={expected.error}
        onClick={() => clearErrors('agreement')}
        register={register}
      />
    );

    expect(screen.getByText(expected.error.message)).toBeInTheDocument();
  });
});
