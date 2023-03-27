import React from 'react';
import { Form } from 'react-router-dom';

import Spaces from './Spaces';
import Options from './Options';
import SearchLine from './SearchLine';

import { OPTION, SearchProps, SearchState, SPACE } from 'types/search.types';

import './index.scss';

const Search = ({ makeSearch }: SearchProps) => {
  const [option, setOption] = React.useState(OPTION.ALL);
  const [space, setSpace] = React.useState(SPACE.LOCAL);
  const [search, setSearch] = React.useState(localStorage.getItem('search.state') || '');

  const wait = (milliseconds: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  };

  const doSearch = async (event?: React.SyntheticEvent) => {
    if (event) event.preventDefault();

    makeSearch(null);

    await wait(1000);
    makeSearch({ option, space, search });
  };

  React.useEffect(() => {
    const loadSearch = async () => {
      await doSearch();
    };

    loadSearch();
  }, []);

  React.useEffect(() => {
    localStorage.setItem('search.state', search);
  }, [search]);

  return (
    <Form role="form" onSubmit={async () => await doSearch()}>
      <div className="search__wrapper">
        <SearchLine
          option={option}
          search={search}
          setSearch={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(event.currentTarget.value)
          }
        />
        <div className="search__config">
          <Spaces
            space={space}
            setSpace={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSpace(event.currentTarget.value as SPACE)
            }
          />
          <Options
            option={option}
            setOption={(event: React.ChangeEvent<HTMLInputElement>) =>
              setOption(event.currentTarget.value as OPTION)
            }
          />
        </div>
      </div>
    </Form>
  );
};

export default Search;
