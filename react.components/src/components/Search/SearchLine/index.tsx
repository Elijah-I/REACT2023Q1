import React from 'react';
import type { SearchLineProps } from 'types/search.types';
import './index.scss';

const SearchLine = ({ option, search, setSearch }: SearchLineProps) => {
  return (
    <div className="search__line">
      <div className={`icon icon--search icon--${option}`}></div>
      <input type="text" className="white-box search__input" value={search} onChange={setSearch} />
      <button type="submit" className="button search__button">
        SEARCH
      </button>
    </div>
  );
};

export default SearchLine;
