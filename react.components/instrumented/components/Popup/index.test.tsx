import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from 'tests/renderWithRouter';
import Popup from '.';

describe('Popup', () => {
  it('renders Popup component', () => {
    const { container } = renderWithRouter(<Popup></Popup>);
    const popup = container.querySelector('.popup');
    expect(popup).toBeInTheDocument();
  });

  it('renders Popup with passed children', () => {
    renderWithRouter(<Popup>test child</Popup>);
    expect(screen.getByText('test child')).toBeInTheDocument();
  });

  it('closes Popup on click', async () => {
    const { container } = renderWithRouter(<Popup></Popup>);
    const user = userEvent.setup();
    await user.click(container.querySelector('.popup__close')!);
    expect(location.href).not.toContain('popup');
  });
});
