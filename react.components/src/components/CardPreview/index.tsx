import React from 'react';
import { ApiCard } from 'types/api.card.types';
import './index.scss';

interface CardPreviewProps {
  info: ApiCard;
}

const CardPreview = ({ info }: CardPreviewProps) => {
  return <div>{info.name}</div>;
};

export default CardPreview;
