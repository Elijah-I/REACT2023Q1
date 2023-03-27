import React from 'react';
import 'jsdom-worker';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import CreateForm from '.';
import { OPTION } from 'types/search.types';

describe('CreateForm', () => {
  const mockFn = vi.fn;
  const mockFileTxt = new File(['test'], 'test.txt', { type: 'text/plain' });
  const mockFilePng = new File(['test'], 'test.png', { type: 'image/png' });

  it('renders CreateForm component', () => {
    render(<CreateForm index={1} onCreate={mockFn} />);

    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/tags/i)).toBeInTheDocument();
    expect(screen.getByText(/date/i)).toBeInTheDocument();
    expect(screen.getByText(/type/i)).toBeInTheDocument();
    expect(screen.getByText(/agreement/i)).toBeInTheDocument();
    expect(screen.getByText(/no image/i)).toBeInTheDocument();
    expect(screen.getByText(/create/i)).toBeInTheDocument();
  });

  it('shows validation error if no Date', async () => {
    render(<CreateForm index={1} onCreate={mockFn} />);

    await waitFor(() => {
      fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'mock' } });
      fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'mock' } });
      fireEvent.click(screen.getByText(/create/i));
    });

    expect(screen.getByText(/field is required/i)).toBeInTheDocument();
  });

  it('shows validation error if no Title', async () => {
    const { container } = render(<CreateForm index={1} onCreate={mockFn} />);

    await waitFor(() => {
      fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'mock' } });
      fireEvent.change(container.querySelector('[type="date"]')!, {
        target: { value: '2020-05-12' },
      });
      fireEvent.click(screen.getByText(/create/i));
    });

    expect(screen.getByText(/field is required/i)).toBeInTheDocument();
  });

  it('shows validation error if no Tags', async () => {
    const { container } = render(<CreateForm index={1} onCreate={mockFn} />);

    await waitFor(() => {
      fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'mock' } });
      fireEvent.change(container.querySelector('[type="date"]')!, {
        target: { value: '2020-05-12' },
      });
      fireEvent.click(screen.getByText(/create/i));
    });

    expect(screen.getByText(/field is required/i)).toBeInTheDocument();
  });

  it('shows validation error if no Picture', async () => {
    render(<CreateForm index={1} onCreate={mockFn} />);

    await waitFor(() => {
      fireEvent.click(screen.getByText(/create/i));
    });

    expect(screen.getByText(/upload an image/i)).toBeInTheDocument();
  });

  it('shows validation error if no Agreement checked', async () => {
    render(<CreateForm index={1} onCreate={mockFn} />);

    await waitFor(() => {
      fireEvent.click(screen.getByText(/create/i));
    });

    expect(screen.getByText(/accept agreement/i)).toBeInTheDocument();
  });

  it('shows validation error if Wrong file format uploaded', async () => {
    const { container } = render(<CreateForm index={1} onCreate={mockFn} />);

    await waitFor(() => {
      fireEvent.change(container.querySelector('[type="file"]')!, {
        target: { files: [mockFileTxt] },
      });
    });

    await waitFor(() => {
      fireEvent.click(screen.getByText(/create/i));
    });

    const fileTypeError = await screen.findByText(/uploaded file is not an image/i);
    expect(fileTypeError).toBeInTheDocument();
  });

  it('handles corect submit', async () => {
    const cbMock = vi.fn(() => {});
    const { container } = render(<CreateForm index={1} onCreate={cbMock} />);

    await waitFor(() => {
      fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'mock' } });
      fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'mock' } });
      fireEvent.change(container.querySelector('select')!, { target: { value: OPTION.PHOTO } });
      fireEvent.click(container.querySelector('[type="radio"]')!);
      fireEvent.change(container.querySelector('[type="date"]')!, {
        target: { value: '2020-05-12' },
      });
      fireEvent.click(container.querySelector('[type="checkbox"]')!);
      fireEvent.change(container.querySelector('[type="file"]')!, {
        target: { files: [mockFilePng] },
      });
    });

    await waitFor(() => {
      fireEvent.click(screen.getByText(/create/i));
    });

    const loading = await screen.findByText(/\.\.\./i);
    expect(loading).toBeInTheDocument();

    const create = await screen.findByText(/create/i);
    expect(create).toBeInTheDocument();

    expect(cbMock).toBeCalledTimes(1);
  });

  it('drops validation error on focus', async () => {
    const { container } = render(<CreateForm index={1} onCreate={mockFn} />);

    await waitFor(() => {
      fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'mock' } });
      fireEvent.change(container.querySelector('[type="date"]')!, {
        target: { value: '2020-05-12' },
      });
      fireEvent.click(screen.getByText(/create/i));
    });

    expect(screen.getByText(/field is required/i)).toBeInTheDocument();

    await waitFor(() => {
      fireEvent.focus(screen.getAllByRole('textbox')[0]);
    });

    expect(screen.queryByText(/field is required/i)).not.toBeInTheDocument();
  });
});
