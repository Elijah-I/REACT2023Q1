import { Card } from 'types/card.types';

export default {
  uploadCards: async () => {
    return (await import('./../../model/cards.json')).default as Card[];
  },
};
