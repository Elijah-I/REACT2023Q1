import React from 'react';
import { vi } from 'vitest';
import { screen, render } from '@testing-library/react';

import { SPACE } from 'types/search.types';
import Spaces from '.';

describe('Spaces', () => {
  it('renders 2 radio elements', () => {
    render(<Spaces space={SPACE.LOCAL} setSpace={vi.fn()} />);
    const radios = screen.getAllByRole('radio');
    expect(radios.length).toBe(2);
  });

  it('makes radio element "checked" according to passed prop', () => {
    const selectedSpace = SPACE.WEB;

    const { container } = render(<Spaces space={selectedSpace} setSpace={vi.fn()} />);
    const web = container.querySelector(`#${selectedSpace}-search`)! as HTMLInputElement;

    expect(web).not.toBeNull();
    expect(web.checked).toBeTruthy();
  });
});
