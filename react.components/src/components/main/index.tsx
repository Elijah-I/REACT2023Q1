import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Pagination from 'components/Pagination';
import Search from 'components/Search';
import Loader from 'components/Loader';
import Cards from 'components/ApiCards';
import cardService from './service';

import { ApiCard } from 'types/api.card.types';

import './index.scss';
import Popup from 'components/Popup';
import CardPreview from 'components/CardPreview';

const Main = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const search = searchParams.get('name') || '';
  const popup = searchParams.get('popup') || '';
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [card, setCard] = React.useState<ApiCard | null>(null);
  const [cards, setCards] = React.useState<ApiCard[]>([]);

  React.useEffect(() => {
    const loadCards = async () => {
      setIsLoading(true);
      const [cards, totalPages] = await cardService.uploadCards(page, search);

      setCards(cards);
      setIsLoading(false);
      setTotalPages(totalPages);
    };

    loadCards();
  }, [page, search]);

  React.useEffect(() => {
    const loadCard = async () => {
      const card = await cardService.uploadCard(popup);
      setCard(card);
    };

    if (popup) loadCard();
    else setCard(null);
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
