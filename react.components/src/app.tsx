import { Route, Routes } from 'react-router-dom';

import Error from 'components/Error';
import Main from 'components/Main';
import About from 'components/About';
import Create from 'components/Create';
import Header from 'components/Header';

import ROUTES from 'types/routes.types';

import './styles/app.scss';

const Router = () => (
  <Routes>
    <Route index element={<Main />} />
    <Route path={ROUTES.ABOUT} element={<About />} />
    <Route path={ROUTES.CREATE} element={<Create />} />
    <Route path="*" element={<Error />} />
  </Routes>
);

const App = () => (
  <>
    <Header />
    <main className="container">
      <Router />
    </main>
  </>
);

export default App;
