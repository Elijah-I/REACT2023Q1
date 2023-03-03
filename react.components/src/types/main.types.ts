import { SearchState } from './search.types';

export interface MainState {
  search: SearchState | null;
  cards: [];
}
