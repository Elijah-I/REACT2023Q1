import React from 'react';
import { NavLink } from 'react-router-dom';
import ROUTES from 'types/routes.types';
import img404Src from '../../assets/img/404.jpg';
import Header from 'components/Header';
import './index.scss';

class Error extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <div className="error__wrapper">
          <div className="container error__container">
            <NavLink to={ROUTES.ROOT} className="error__block">
              <img src={img404Src} alt="not found" />
            </NavLink>
          </div>
        </div>
      </>
    );
  }
}

export default Error;
