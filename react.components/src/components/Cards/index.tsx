import React from 'react';
import Card from './Card';
import { ApiCard, ApiCardsProps } from 'types/api.card.types';
import './index.scss';

const Cards = ({ cards }: ApiCardsProps) => {
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
