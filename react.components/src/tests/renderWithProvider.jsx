import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store/store';

export default (Component) => {
  return render(
    <Provider store={store}>
      <Component />
    </Provider>
  );
};
