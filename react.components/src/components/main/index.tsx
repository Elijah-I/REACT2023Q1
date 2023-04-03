import React from 'react';

import cardService from './service';
import Search from 'components/Search';
import Loader from 'components/Loader';
import Cards from 'components/Cards';

import { ApiCard } from 'types/api.card.types';

import './index.scss';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from 'use-debounce';

const Main = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '0';
  const search = searchParams.get('name') || '';
  const [debouncedSearch] = useDebounce(search, search ? 300 : 0);
  const [cards, setCards] = React.useState<ApiCard[] | null>(null);

  React.useEffect(() => {
    const loadCards = async () => {
      const [cards, pages] = await cardService.uploadCards(page, debouncedSearch);
      console.log(pages);
      setCards(cards);
    };

    loadCards();
  }, [page, debouncedSearch]);

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
