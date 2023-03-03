import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';

import './index.scss';

class Root extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="container main">
          <Outlet />
        </main>
      </>
    );
  }
}

export default Root;
