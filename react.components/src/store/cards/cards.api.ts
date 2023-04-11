import { api } from './../api';
import type { ApiCardsResponse, GetCardsResponse } from 'types/api.card.types';

interface GetParams {
  page: string;
  search: string;
}

interface FilterParams {
  page: string;
  name: string;
}

export const cardsAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getCards: builder.query<GetCardsResponse, GetParams>({
      query: (getParams) => {
        const params = {} as FilterParams;

        if (getParams.page) params.page = getParams.page;
        if (getParams.search) params.name = getParams.search;

        return {
          url: '/character',
          params,
        };
      },
      transformResponse: (response: ApiCardsResponse) => ({
        cards: response.results,
        totalPages: response.info.pages,
      }),
    }),

    getCard: builder.query({
      query: (id) => `/character/${id}`,
    }),
  }),
});
