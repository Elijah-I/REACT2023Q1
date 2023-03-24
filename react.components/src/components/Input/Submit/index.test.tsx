import React from 'react';
import { render, screen } from '@testing-library/react';
import InputSubmit from '.';

describe('InputSubmit', () => {
  const expected = {
    text: 'test text',
  };

  it('renders component with Text', () => {
    render(<InputSubmit text={expected.text} isSubmitting={false} />);
    expect(screen.getByText(expected.text)).toBeInTheDocument();
  });

  it('renders component with Submiting state', () => {
    render(<InputSubmit text={expected.text} isSubmitting={true} />);
    expect(screen.getByText('...')).toBeInTheDocument();
  });
});
