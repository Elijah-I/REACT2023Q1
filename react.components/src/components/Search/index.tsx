import React, { useState } from 'react';
import { Form, useSearchParams } from 'react-router-dom';

import './index.scss';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('name') || '';
  const [localSearch, setLocalSearch] = useState(search);

  React.useEffect(() => {
    const storedSearch = localStorage.getItem('search');

    const page = searchParams.get('page');
    const popup = searchParams.get('popup');

    if (!storedSearch) return;
    if (search || page || popup) return;

    searchParams.append('name', storedSearch);
    setSearchParams(searchParams);
    setLocalSearch(storedSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const intercaptEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.key === 'Enter' && applySearchParams(localSearch);
  };

  const dropSearch = () => {
    setLocalSearch('');
    applySearchParams('');
  };

  const applySearchParams = (search: string) => {
    searchParams.delete('page');

    if (!search) searchParams.delete('name');
    else {
      if (searchParams.has('name')) searchParams.set('name', search);
      else searchParams.append('name', search);
    }

    setSearchParams(searchParams);
    localStorage.setItem('search', search);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    applySearchParams(localSearch);
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
