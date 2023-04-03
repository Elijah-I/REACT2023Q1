import React from 'react';
import Card from './Card';
import type { Card as ICard, CardsProps } from 'types/card.types';
import './index.scss';

const Cards = ({ cards, search }: CardsProps) => {
  const filter = (card: ICard) => {
    let pass = true;
    const filter = search;

    if (!filter) return pass;

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
  };

  const filteredCards = cards.filter(filter);

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
};

export default Cards;
