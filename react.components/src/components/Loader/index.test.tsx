import React from 'react';
import { render } from '@testing-library/react';

import Loader from '.';

describe('Loader', () => {
  it('contains element with "loader" class', () => {
    const { container } = render(<Loader />);
    const loader = container.getElementsByClassName('loader');
    expect(loader.length).toBe(1);
  });
});
