import React from 'react';
import Card from './Card';
import type { Card as ICard, CardsProps } from 'types/card.types';
import './index.scss';

class Cards extends React.PureComponent<CardsProps> {
  constructor(props: CardsProps) {
    super(props);

    this.filter = this.filter.bind(this);
  }

  filter(card: ICard) {
    let pass = true;
    const filter = this.props.search;

    const containedIn = (str: string) => {
      return str.toLowerCase().includes(filter.search.toLowerCase());
    };

    if (filter.option !== 'all') {
      if (filter.option !== card.type) pass = false;
    }

    if (pass && filter.search) {
      pass = false;

      if (containedIn(card.author)) pass = true;
      if (containedIn(card.title)) pass = true;
      if (card.tags.some(containedIn)) pass = true;
    }

    return pass;
  }

  render() {
    const filteredCards = this.props.cards.filter(this.filter);

    if (!filteredCards.length) {
      return <div className="cards__null">no cards found</div>;
    }

    return (
      <div className="cards__list">
        {filteredCards.map((card) => (
          <Card key={card.id} info={card} />
        ))}
      </div>
    );
  }
}

export default Cards;
