import React from 'react';
import Card from './Card';
import type { CardsProps } from 'types/card.types';
import './index.scss';

class Cards extends React.PureComponent<CardsProps> {
  render() {
    if (!this.props.cards.length) {
      return <div className="cards__null">no cards found</div>;
    }

    return (
      <div className="cards__list">
        {this.props.cards.map((card) => (
          <Card key={card.id} info={card} />
        ))}
      </div>
    );
  }
}

export default Cards;
