import React from 'react';
import { vi } from 'vitest';
import { screen, render } from '@testing-library/react';

import { OPTION } from 'types/search.types';
import Options from '.';

describe('Options', () => {
  it('renders 4 radio elements', () => {
    render(<Options option={OPTION.ALL} setOption={vi.fn()} />);
    const radios = screen.getAllByRole('radio');
    expect(radios.length).toBe(4);
  });

  it('makes radio element "checked" according to passed prop', () => {
    const selectedOption = OPTION.PHOTO;

    const { container } = render(<Options option={selectedOption} setOption={vi.fn()} />);
    const photo = container.querySelector(`#option-${selectedOption}`)! as HTMLInputElement;

    expect(photo).not.toBeNull();
    expect(photo.checked).toBeTruthy();
  });
});
