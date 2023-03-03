import React from 'react';
import { NavLink } from 'react-router-dom';
import ROUTES from 'types/routes.types';
import imgSrc from '../../assets/img/404.jpg';
import './index.scss';

class Error extends React.PureComponent {
  render() {
    return (
      <div className="error__wrapper">
        <div className="container error__container">
          <NavLink to={ROUTES.ROOT} className="error__block">
            <img src={imgSrc} alt="not found" />
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Error;
