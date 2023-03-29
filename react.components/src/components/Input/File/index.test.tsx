import React from 'react';
import 'jsdom-worker';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import InputFile from '.';
import provideUseFormMethods from 'tests/provideUseFormMethods';

describe('InputFile', () => {
  const expected = {
    error: { type: 'required', message: 'test error' },
  };
  const mockFile = new File(['test'], 'test.png', { type: 'image/png' });
  const { register, watch } = provideUseFormMethods();

  it('renders component with No image attached', () => {
    render(<InputFile name="file" error={undefined} watch={watch} register={register} />);
    expect(screen.getByText(/no image atteched/i)).toBeInTheDocument();
  });

  it('handles uploaded file', async () => {
    const { container } = render(
      <InputFile name="file" error={expected.error} watch={watch} register={register} />
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
    render(<InputFile name="file" error={expected.error} watch={watch} register={register} />);
    expect(screen.getByText(expected.error.message)).toBeInTheDocument();
  });
});
