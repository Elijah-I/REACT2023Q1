import React from 'react';

import Author from './Author';
import Social from './Social';

import './index.scss';

class About extends React.PureComponent {
  render() {
    return (
      <>
        <Author />
        <Social />
      </>
    );
  }
}

export default About;
