import React from 'react';

import cardService from './service';
import Search from 'components/Search';
import Loader from 'components/Loader';
import Cards from 'components/Cards';

import { ApiCard } from 'types/api.card.types';

import './index.scss';

const Main = () => {
  const [cards, setCards] = React.useState<ApiCard[] | null>(null);

  React.useEffect(() => {
    const loadCards = async () => {
      const [cards, pages] = await cardService.uploadCards();
      console.log(pages);

      setCards(cards);
    };

    loadCards();
  }, []);

  return (
    <div className="main">
      <Search />

      {cards ? (
        <Cards cards={cards} />
      ) : (
        <div className="main__loader">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Main;
