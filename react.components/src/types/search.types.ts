type SetCallback = (event: React.ChangeEvent<HTMLInputElement>) => void;
type MakeCallback = (searchState: SearchState | null) => void;

export enum OPTION {
  ALL = 'all',
  PHOTO = 'photo',
  POST = 'post',
  VIDEO = 'video',
}

export enum SPACE {
  LOCAL = 'local',
  WEB = 'web',
}

export interface SearchState {
  option: OPTION;
  space: SPACE;
  search: string;
}

export interface OptionsProps {
  option: OPTION;
  setOption: SetCallback;
}

export interface SpacesProps {
  space: SPACE;
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
