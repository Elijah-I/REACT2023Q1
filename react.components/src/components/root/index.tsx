import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';

class Root extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <main className="container">
          <Outlet />
        </main>
      </>
    );
  }
}

export default Root;
