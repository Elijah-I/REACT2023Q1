type SetCallback = (event: React.ChangeEvent<HTMLInputElement>) => void;
type MakeCallback = (searchState: SearchState) => void;

export enum OPTION {
  ALL,
  PHOTO,
  POST,
  VIDEO,
}

export interface SearchState {
  option: OPTION;
  space: 'local' | 'web';
  search: string;
}

export interface OptionsProps {
  option: number;
  setOption: SetCallback;
}

export interface SpacesProps {
  space: string;
  setSpace: SetCallback;
}

export interface SearchLineProps {
  search: string;
  setSearch: SetCallback;
}

export interface SearchProps {
  makeSearch: MakeCallback;
}
