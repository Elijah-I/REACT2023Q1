import React from 'react';

import Search from 'components/Search';
import Loader from 'components/Loader';
import Cards from 'components/Cards';

import { SearchState } from 'types/search.types';
import { Card } from 'types/card.types';

import './index.scss';

const uploadCards = async () => {
  return (await import('./../../model/cards.json')).default as Card[];
};

const Main = () => {
  const [search, setSearch] = React.useState<SearchState | null>(null);
  const [cards, setCards] = React.useState<Card[] | null>(null);

  const makeSearch = (searchState: SearchState | null) => {
    setSearch(searchState || null);
  };

  const getCards = async () => {
    const cards = await uploadCards();
    setCards(cards);
  };

  React.useEffect(() => {
    const loadCards = async () => {
      await getCards();
    };

    loadCards();
  }, []);

  return (
    <div className="main">
      <Search makeSearch={makeSearch} />

      {search && cards ? (
        <Cards cards={cards} search={search} />
      ) : (
        <div className="main__loader">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Main;
