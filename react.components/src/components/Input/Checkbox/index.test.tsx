import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import InputCheckbox from '.';

describe('InputCheckbox', () => {
  const expected = {
    label: 'test label',
    title: 'test title',
    error: 'test error',
  };
  const mockFn = vi.fn;
  const forwardedRef = React.createRef<HTMLInputElement>();

  it('renders component with Title and Label', () => {
    render(
      <InputCheckbox
        forwardedRef={forwardedRef}
        labelText={expected.label}
        onClick={mockFn}
        title={expected.title}
      />
    );

    expect(screen.getByText(expected.label)).toBeInTheDocument();
    expect(screen.getByText(expected.title)).toBeInTheDocument();
  });

  it('renders component with Error', () => {
    render(
      <InputCheckbox
        forwardedRef={forwardedRef}
        labelText={expected.label}
        error={expected.error}
        onClick={mockFn}
        title={expected.title}
      />
    );

    expect(screen.getByText(expected.error)).toBeInTheDocument();
  });
});
