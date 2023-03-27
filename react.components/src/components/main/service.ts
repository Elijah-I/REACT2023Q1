import { Card } from 'types/card.types';

export const uploadCards = async () => {
  return (await import('./../../model/cards.json')).default as Card[];
};
