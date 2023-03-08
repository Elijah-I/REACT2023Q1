type SetCallback = (event: React.ChangeEvent<HTMLInputElement>) => void;
type MakeCallback = (searchState: SearchState | null) => void;

export enum OPTION {
  ALL = 'all',
  PHOTO = 'photo',
  POST = 'post',
  VIDEO = 'video',
}

export type Space = 'local' | 'web';

export interface SearchState {
  option: OPTION;
  space: Space;
  search: string;
}

export interface OptionsProps {
  option: OPTION;
  setOption: SetCallback;
}

export interface SpacesProps {
  space: Space;
  setSpace: SetCallback;
}

export interface SearchLineProps {
  option: OPTION;
  search: string;
  setSearch: SetCallback;
}

export interface SearchProps {
  makeSearch: MakeCallback;
}
