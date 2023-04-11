import React from 'react';
import { useSearchParams } from 'react-router-dom';

import Pagination from 'components/Pagination';
import Search from 'components/Search';
import Loader from 'components/Loader';
import Cards from 'components/ApiCards';
import cardService from './service';

import { ApiCard } from 'types/api.card.types';

import Popup from 'components/Popup';
import CardPreview from 'components/CardPreview';
import { cardsAPI } from 'store/cards/cards.api';
import './index.scss';

const Main = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const search = searchParams.get('name') || '';
  const popup = searchParams.get('popup') || '';
  const [getCard, { data: card }] = cardsAPI.useLazyGetCardQuery();
  const { isLoading, data: cardsData } = cardsAPI.useGetCardsQuery({ page, search });
  const { cards, totalPages } = cardsData || { cards: [], totalPages: 0 };

  React.useEffect(() => {
    if (popup) getCard(popup);
  }, [popup]);

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

      {popup && <Popup>{card ? <CardPreview info={card} /> : <Loader />}</Popup>}
    </div>
  );
};

export default Main;
