export interface ApiCardsProps {
  cards: ApiCard[];
}

export interface ApiCardProps {
  info: ApiCard;
}

export interface ApiCard {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ApiCardsResponse {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: null | string;
  };
  results: ApiCard[];
}

export interface GetCardsResponse {
  cards: ApiCard[];
  totalPages: number;
}
