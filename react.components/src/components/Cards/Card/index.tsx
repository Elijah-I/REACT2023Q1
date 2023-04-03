import React from 'react';
import { ApiCardProps } from 'types/api.card.types';
import './index.scss';
import { useSearchParams } from 'react-router-dom';

const Card = ({ info }: ApiCardProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const applyPopup = (id: string) => {
    if (searchParams.has('popup')) searchParams.set('popup', id);
    else searchParams.append('popup', id);

    setSearchParams(searchParams);
  };

  return (
    <div className="card" onClick={() => applyPopup(info.id.toString())}>
      <div className="card__img">
        <img src={info.image} alt="preview" />
      </div>

      <div className="card__content">
        <div className="card__title">{info.name}</div>
        <div className="card__info">
          <u>species:</u>
          <b>{info.species}</b>
        </div>
        <div className="card__info">
          <u>location:</u> <b>{info.location.name}</b>
        </div>
        <div className="card__info">
          <u>gender:</u> <b>{info.gender}</b>
        </div>
      </div>
    </div>
  );
};

export default Card;
