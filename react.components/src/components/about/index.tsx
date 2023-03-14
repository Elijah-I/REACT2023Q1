import React from 'react';

import Author from './Author';
import Social from './Social';

import './index.scss';

class About extends React.PureComponent {
  render() {
    return (
      <>
        <h1 className="page__title">about page</h1>
        <Author />
        <Social />
      </>
    );
  }
}

export default About;
