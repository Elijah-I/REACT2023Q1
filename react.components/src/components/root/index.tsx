import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';

const Root = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default Root;
