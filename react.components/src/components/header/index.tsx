import React from 'react';
import { NavLink } from 'react-router-dom';

import ROUTES from 'types/routes.types';

import './index.scss';

interface HeaderLink {
  name: string;
  href: ROUTES;
}

class Header extends React.PureComponent {
  links: HeaderLink[];

  constructor(props: object) {
    super(props);

    this.links = [
      { name: 'main', href: ROUTES.ROOT },
      { name: 'about', href: ROUTES.ABOUT },
    ];
  }

  render() {
    return (
      <header className="header">
        <nav className="container">
          <ul className="header__container">
            {this.links.map((link, key) => (
              <NavLink
                key={key}
                to={link.href}
                className={(status) =>
                  'header__link' + (status.isActive ? ' header__link--active' : '')
                }
              >
                {link.name}
              </NavLink>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
