import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import InputRegular from '.';

describe('InputRegular', () => {
  const expected = {
    title: 'test title',
    error: 'test error',
  };

  const mockFn = vi.fn;
  const forwardedRef = React.createRef<HTMLInputElement>();

  it('renders component with Title', () => {
    render(
      <InputRegular
        forwardedRef={forwardedRef}
        type="text"
        onFocus={mockFn}
        title={expected.title}
      />
    );

    expect(screen.getByText(expected.title)).toBeInTheDocument();
  });

  it('renders component with Error', () => {
    render(
      <InputRegular
        forwardedRef={forwardedRef}
        type="text"
        error={expected.error}
        onFocus={mockFn}
        title={expected.title}
      />
    );

    expect(screen.getByText(expected.error)).toBeInTheDocument();
  });

  it('renders component of type Date', () => {
    const { container } = render(
      <InputRegular
        forwardedRef={forwardedRef}
        type="date"
        error={expected.error}
        onFocus={mockFn}
        title={expected.title}
      />
    );

    expect(container.querySelector('[type="date"]')).toBeInTheDocument();
  });
});
