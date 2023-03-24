import type { Card } from './card.types';
import type { SearchState } from './search.types';

export interface MainState {
  search: SearchState | null;
  cards: Card[] | null;
}
