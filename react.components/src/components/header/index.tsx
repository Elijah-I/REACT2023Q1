import React from 'react';
import { NavLink } from 'react-router-dom';

import ROUTES from 'types/routes.types';

import './index.scss';

interface HeaderLink {
  name: string;
  title: string;
  href: ROUTES;
}

interface HeaderState {
  currentRoute: string;
}

class Header extends React.PureComponent {
  state: HeaderState;
  links: HeaderLink[];

  constructor(props: object) {
    super(props);

    this.links = [
      { name: 'main', title: 'main page', href: ROUTES.ROOT },
      { name: 'about', title: 'about page', href: ROUTES.ABOUT },
      { name: '404', title: '404 page', href: ROUTES.ERROR },
    ];

    this.state = {
      currentRoute: this.getCurrentRoute(),
    };
  }

  getCurrentRoute() {
    let route = location.hash.replace(/\#\/([a-z])/i, '$1').replace('#', '');
    if (!route) route = '/';
    return route;
  }

  componentDidMount() {
    window.addEventListener('popstate', () => {
      const route = this.getCurrentRoute();
      this.changeCurrentRoute(route);
    });
  }

  changeCurrentRoute(route: string) {
    this.setState({
      ...this.state,
      currentRoute: route,
    });
  }

  getRouteTitle() {
    let currentLink = this.links.filter((link) => link.href === this.state.currentRoute);
    if (!currentLink.length) currentLink = [this.links[2]];

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
                  onClick={() => this.changeCurrentRoute(link.href)}
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

export default Header;
