import React from 'react';
import { NavLink } from 'react-router-dom';
import ROUTES from 'types/routes.types';
import img404Src from '../../assets/img/404.jpg';
import './index.scss';

const Error = () => {
  return (
    <>
      <main className="error__wrapper">
        <div className="error__container">
          <NavLink to={ROUTES.ROOT} className="error__block">
            <img src={img404Src} alt="not found" />
          </NavLink>
        </div>
      </main>
    </>
  );
};

export default Error;
