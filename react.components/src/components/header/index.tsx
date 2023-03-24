import React from 'react';
import { Location, NavLink } from 'react-router-dom';

import ROUTES from 'types/routes.types';
import { withRouter } from './withRouter';

import './index.scss';

interface HeaderLink {
  name: string;
  title: string;
  href: ROUTES;
}

interface HeaderProps {
  location: Location;
}

class Header extends React.PureComponent<HeaderProps> {
  links: HeaderLink[];

  constructor(props: HeaderProps) {
    super(props);

    this.links = [
      { name: 'main', title: 'main page', href: ROUTES.ROOT },
      { name: 'about', title: 'about page', href: ROUTES.ABOUT },
      { name: 'create', title: 'create page', href: ROUTES.CREATE },
      { name: '404', title: '404 page', href: ROUTES.ERROR },
    ];
  }

  getCurrentRoute() {
    let route = this.props.location.pathname.replace('/', '');
    if (!route) route = '/';
    return route;
  }

  getRouteTitle() {
    let currentLink = this.links.filter((link) => link.href === this.getCurrentRoute());
    if (!currentLink.length) currentLink = [this.links[this.links.length - 1]];

    return currentLink[0].title;
  }

  render() {
    return (
      <header className="header">
        <nav className="container">
          <ul className="header__container">
            <h1 className="page__title">{this.getRouteTitle()}</h1>
            {this.links.map((link, key) => (
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
  }
}

export default withRouter(Header);
