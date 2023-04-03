import React, { useState } from 'react';
import { Form, useSearchParams } from 'react-router-dom';

import './index.scss';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('name') || '';
  const [localSearch, setLocalSearch] = useState(search);

  const intercaptEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.key === 'Enter' && applySearchParams();
  };

  const dropSearch = () => {
    setLocalSearch('');
    applySearchParams();
  };

  const applySearchParams = () => {
    if (!localSearch) searchParams.delete('name');
    else {
      searchParams.delete('page');

      if (searchParams.has('name')) searchParams.set('name', localSearch);
      else searchParams.append('name', localSearch);
    }

    setSearchParams(searchParams);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    applySearchParams();
  };

  return (
    <Form role="form" onSubmit={handleSubmit}>
      <div className="search__wrapper">
        <div className="search__line">
          <div className="icon icon--search icon--all"></div>
          <input
            type="text"
            className="white-box search__input"
            value={localSearch}
            onChange={(event) => setLocalSearch(event.target.value)}
            onKeyUp={intercaptEnter}
          />
          {search && <div className="icon icon--drop" onClick={dropSearch}></div>}
          <button type="submit" className="button search__button">
            SEARCH
          </button>
        </div>
      </div>
    </Form>
  );
};

export default Search;
