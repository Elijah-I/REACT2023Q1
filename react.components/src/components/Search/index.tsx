import React from 'react';
import { Form, useSearchParams } from 'react-router-dom';

import './index.scss';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('name') || '';

  const applySearchParams = (search: string) => {
    if (!search) searchParams.delete('name');
    else {
      searchParams.delete('page');

      if (searchParams.has('name')) searchParams.set('name', search);
      else searchParams.append('name', search);
    }

    setSearchParams(searchParams);
  };

  return (
    <Form role="form">
      <div className="search__wrapper">
        <div className="search__line">
          <div className="icon icon--search icon--all"></div>
          <input
            type="text"
            className="white-box search__input"
            value={search}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              applySearchParams(event.target.value)
            }
          />
          {search && <div className="icon icon--drop" onClick={() => applySearchParams('')}></div>}
          <button type="submit" className="button search__button">
            SEARCH
          </button>
        </div>
      </div>
    </Form>
  );
};

export default Search;
