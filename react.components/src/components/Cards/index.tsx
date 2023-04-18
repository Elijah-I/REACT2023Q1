import React from 'react';
import Card from './Card';
import type { Card as ICard, CardsProps } from 'types/card.types';
import './index.scss';

const Cards = ({ cards }: CardsProps) => {
  if (!cards.length) {
    return <div className="cards__null">no cards found</div>;
  }

  return (
    <div className="cards__list">
      {cards.map((card) => (
        <Card key={card.id} info={card} />
      ))}
    </div>
  );
};

export default Cards;
