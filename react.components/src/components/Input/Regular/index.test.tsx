import React from 'react';
import { render, screen } from '@testing-library/react';
import InputRegular from '.';
import provideUseFormMethods from 'tests/provideUseFormMethods';
import { FormValues } from 'types/create.types';

describe('InputRegular', () => {
  const expected = {
    title: 'title',
    error: { type: 'required', message: 'test error' },
  };

  const { register, clearErrors, errors } = provideUseFormMethods();

  it('renders component with Title', () => {
    render(
      <InputRegular
        type="text"
        name={expected.title as keyof FormValues}
        error={undefined}
        onFocus={() => clearErrors('title')}
        register={register}
      />
    );

    expect(screen.getByText(expected.title)).toBeInTheDocument();
  });

  it('renders component with Error', () => {
    render(
      <InputRegular
        type="text"
        name="title"
        error={expected.error}
        onFocus={() => clearErrors('title')}
        register={register}
      />
    );

    expect(screen.getByText(expected.error.message)).toBeInTheDocument();
  });

  it('renders component of type Date', () => {
    const { container } = render(
      <InputRegular
        type="date"
        name="date"
        error={errors.title}
        onFocus={() => clearErrors('date')}
        register={register}
      />
    );

    expect(container.querySelector('[type="date"]')).toBeInTheDocument();
  });
});
