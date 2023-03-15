import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Root from 'components/Root';
import Error from 'components/Error';
import Main from 'components/Main';
import About from 'components/About';

import ROUTES from 'types/routes.types';

import './styles/app.scss';

class App extends React.Component {
  render() {
    const router = createHashRouter(
      createRoutesFromElements(
        <Route path={ROUTES.ROOT} element={<Root />}>
          <Route index element={<Main />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path="/*" element={<Error />} />
        </Route>
      )
    );

    return <RouterProvider router={router} />;
  }
}

const root = document.getElementById('root');
if (root) ReactDOM.createRoot(root).render(<App />);

export default App;
