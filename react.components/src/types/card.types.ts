import { OPTION, SearchState } from './search.types';

export interface Statistic {
  views: number;
  likes: number;
  isFavorite: boolean;
}

export interface CardsProps {
  search?: SearchState;
  cards: Card[];
}

export interface CardProps {
  info: Card;
}

export interface Card {
  id: number;
  title: string;
  author: string;
  type: OPTION;
  tags: string[];
  picture: string;
  statistic: Statistic;
}
