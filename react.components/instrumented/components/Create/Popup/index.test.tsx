import React from 'react';
import { render, screen } from '@testing-library/react';
import Popup from '.';

describe('Popup', () => {
  it('renders Popup component', () => {
    render(<Popup show={true} />);
    expect(screen.getByText(/successfully/i)).toBeInTheDocument();
  });
});
