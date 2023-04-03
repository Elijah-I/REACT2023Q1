import { ApiCard } from 'types/api.card.types';

type SearchParams = Record<string, string>;

export default {
  uploadCards: async (page = '0', search = ''): Promise<[ApiCard[], number]> => {
    const params: SearchParams = {};

    if (page) params.page = page;
    if (search) params.name = search;

    const searchParams = new URLSearchParams(params);

    const response = await fetch(
      `https://rickandmortyapi.com/api/character?${searchParams.toString()}`
    );
    const data = await response.json();

    const cards: ApiCard[] = data.results;
    const totalPages: number = data.info.pages;

    return [cards, totalPages];
  },
};
