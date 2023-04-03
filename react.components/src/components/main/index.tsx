import React, { useState } from 'react';

import cardService from './service';
import Search from 'components/Search';
import Loader from 'components/Loader';
import Cards from 'components/Cards';

import { ApiCard } from 'types/api.card.types';

import './index.scss';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import Pagination from 'components/Pagination';

const Main = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const search = searchParams.get('name') || '';
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [debouncedSearch] = useDebounce(search, search ? 300 : 0);
  const [cards, setCards] = React.useState<ApiCard[]>([]);

  React.useEffect(() => {
    const loadCards = async () => {
      setIsLoading(true);
      const [cards, totalPages] = await cardService.uploadCards(page, debouncedSearch);

      setCards(cards);
      setIsLoading(false);
      setTotalPages(totalPages);
    };

    loadCards();
  }, [page, debouncedSearch]);

  return (
    <div className="main">
      <Search />

      {isLoading ? (
        <div className="main__loader">
          <Loader />
        </div>
      ) : (
        <>
          <Cards cards={cards} />
          <Pagination totalPages={totalPages} />
        </>
      )}
    </div>
  );
};

export default Main;
