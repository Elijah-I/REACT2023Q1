import React from 'react';
import { render, screen } from '@testing-library/react';
import InputRadioGroup from '.';

describe('InputRadioGroup', () => {
  let forwardedRefs: React.RefObject<HTMLInputElement>[];

  const expected = {
    title: 'test title',
    labels: ['Elijah', 'Neo'],
  };

  beforeAll(() => {
    forwardedRefs = [React.createRef<HTMLInputElement>(), React.createRef<HTMLInputElement>()];
  });

  beforeEach(() => {
    render(
      <InputRadioGroup
        title={expected.title}
        elements={[
          { label: 'Elijah', forwardedRef: forwardedRefs[0] },
          { label: 'Neo', forwardedRef: forwardedRefs[1] },
        ]}
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
