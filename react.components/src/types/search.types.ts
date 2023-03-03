type SetCallback = (event: React.ChangeEvent<HTMLInputElement>) => void;
type MakeCallback = (searchState: SearchState | null) => void;

export enum OPTION {
  ALL = 'all',
  PHOTO = 'photo',
  POST = 'post',
  VIDEO = 'video',
}

export interface SearchState {
  option: OPTION;
  space: 'local' | 'web';
  search: string;
}

export interface OptionsProps {
  option: OPTION;
  setOption: SetCallback;
}

export interface SpacesProps {
  space: string;
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
