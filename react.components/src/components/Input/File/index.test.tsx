import React from 'react';
import 'jsdom-worker';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import InputFile from '.';

describe('InputFile', () => {
  const expected = {
    error: 'test error',
  };
  const mockFn = vi.fn;
  const mockFile = new File(['test'], 'test.png', { type: 'image/png' });
  const forwardedRef = React.createRef<HTMLInputElement>();

  it('renders component with No image attached', () => {
    render(<InputFile key={1} onClick={mockFn} forwardedRef={forwardedRef} />);
    expect(screen.getByText(/no image atteched/i)).toBeInTheDocument();
  });

  it('handles uploaded file', async () => {
    const { container } = render(
      <InputFile key={1} onClick={mockFn} forwardedRef={forwardedRef} />
    );

    const uploader = container.getElementsByTagName('input')[0];

    await waitFor(() =>
      fireEvent.change(uploader, {
        target: { files: [mockFile] },
      })
    );

    const image = container.getElementsByTagName('input')[0];

    expect(image.files).not.toBeNull();
    expect((image.files![0] as File)?.name).toBe('test.png');
    expect(image?.files?.length).toBe(1);
  });

  it('renders component with Error', async () => {
    render(
      <InputFile key={1} onClick={mockFn} forwardedRef={forwardedRef} error={expected.error} />
    );
    expect(screen.getByText(expected.error)).toBeInTheDocument();
  });
});
