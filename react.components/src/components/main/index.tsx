import React from 'react';

import cardService from './service';
import Search from 'components/Search';
import Loader from 'components/Loader';
import Cards from 'components/Cards';

import { SearchState } from 'types/search.types';
import { ApiCard } from 'types/api.card.types';

import './index.scss';

const Main = () => {
  const [search, setSearch] = React.useState<SearchState | null>(null);
  const [cards, setCards] = React.useState<ApiCard[] | null>(null);

  const makeSearch = React.useCallback((searchState: SearchState | null) => {
    setSearch(searchState || null);
  }, []);

  React.useEffect(() => {
    const loadCards = async () => {
      const [cards, pages] = await cardService.uploadCards();
      setCards(cards);
    };

    loadCards();
  }, []);

  return (
    <div className="main">
      <Search makeSearch={makeSearch} />

      {search && cards ? (
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
