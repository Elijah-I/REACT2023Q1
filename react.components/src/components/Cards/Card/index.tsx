import React from 'react';
import type { CardProps } from 'types/card.types';
import './index.scss';

class Card extends React.PureComponent<CardProps> {
  render() {
    return <div>{Object.values(this.props.info).join(' / ')}</div>;
  }
}

export default Card;
