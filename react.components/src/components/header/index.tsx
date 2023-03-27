import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import ROUTES from 'types/routes.types';

import './index.scss';

const Header = () => {
  const location = useLocation();

  const links = [
    { name: 'main', title: 'main page', href: ROUTES.ROOT },
    { name: 'about', title: 'about page', href: ROUTES.ABOUT },
    { name: 'create', title: 'create page', href: ROUTES.CREATE },
    { name: '404', title: '404 page', href: ROUTES.ERROR },
  ];

  const getCurrentRoute = () => {
    let route = location.pathname.replace('/', '');
    if (!route) route = '/';
    return route;
  };

  const getRouteTitle = () => {
    let currentLink = links.filter((link) => link.href === getCurrentRoute());
    if (!currentLink.length) currentLink = [links[links.length - 1]];

    return currentLink[0].title;
  };

  return (
    <header className="header">
      <nav className="container">
        <ul className="header__container">
          <h1 className="page__title">{getRouteTitle()}</h1>
          {links.map((link, key) => (
            <li key={key}>
              <NavLink
                to={link.href}
                className={(status) =>
                  'header__link' + (status.isActive ? ' header__link--active' : '')
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
