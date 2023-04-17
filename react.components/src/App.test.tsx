import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'App';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from 'store/store';

describe('App', () => {
  it('makes correct routing render: main -> about', async () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const loader = container.querySelector('.loader');
    expect(loader).toBeInTheDocument();

    const user = userEvent.setup();
    const aboutLink = screen.getByText(/about/i);
    await user.click(aboutLink);

    const author = screen.queryByText(/Elijah Ivanik/);
    expect(author).toBeInTheDocument();
  });
});
