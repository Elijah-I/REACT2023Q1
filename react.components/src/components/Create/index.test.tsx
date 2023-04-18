import 'jsdom-worker';
import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import renderWithProvider from 'tests/renderWithProvider';
import { OPTION } from 'types/search.types';
import Create from '.';

describe('Create', () => {
  const mockFilePng = new File(['test'], 'test.png', { type: 'image/png' });

  it('renders Create component', () => {
    renderWithProvider(Create);

    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/tags/i)).toBeInTheDocument();
    expect(screen.getByText(/date/i)).toBeInTheDocument();
    expect(screen.getByText(/type/i)).toBeInTheDocument();
    expect(screen.getByText(/agreement/i)).toBeInTheDocument();
    expect(screen.getByText(/no image/i)).toBeInTheDocument();
    expect(screen.getByText(/create/i)).toBeInTheDocument();

    expect(screen.getByText(/no cards found/i)).toBeInTheDocument();
  });

  it('creates card on submit', async () => {
    const { container } = renderWithProvider(Create);

    await waitFor(() => {
      fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'mock card title' } });
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

    const card = await screen.findByText(/mock card title/i);
    expect(card).toBeInTheDocument();
  });

  it('shows and hide (after 3 sec delay) Popup on submit', async () => {
    const { container } = renderWithProvider(Create);

    await waitFor(() => {
      fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'mock card title' } });
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

    const shownPopup = await screen.findByText(/successfully/i);
    expect(shownPopup).toBeInTheDocument();

    await act(async () => {
      await new Promise((r) => setTimeout(r, 3000));
    });

    await waitFor(() => {
      const hiddenPopup = screen.queryByText(/successfully/i);
      expect(hiddenPopup).not.toBeInTheDocument();
    });
  });
});
