export interface CardsProps {
  cards: Card[];
}

export interface CardProps {
  info: Card;
}

export interface Card {
  id: number;
  title: string;
  author: string;
  type: string;
  tags: string[];
  picture: string;
  statistic: {
    views: number;
    likes: number;
    isFavorite: boolean;
  };
}
