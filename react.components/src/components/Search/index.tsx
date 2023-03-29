import React from 'react';
import { Form } from 'react-router-dom';

import Spaces from './Spaces';
import Options from './Options';
import SearchLine from './SearchLine';

import { OPTION, SearchProps, SPACE } from 'types/search.types';

import './index.scss';

const Search = ({ makeSearch }: SearchProps) => {
  const initialSearchState = {
    option: OPTION.ALL,
    space: SPACE.LOCAL,
    search: localStorage.getItem('search.state') || '',
  };

  const [option, setOption] = React.useState(initialSearchState.option);
  const [space, setSpace] = React.useState(initialSearchState.space);
  const [search, setSearch] = React.useState(initialSearchState.search);

  const [searchState, setSearchState] = React.useState(initialSearchState);

  const applySearchParams = () => {
    setSearchState({
      option,
      space,
      search,
    });
  };

  const wait = (milliseconds: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  };

  const doSearch = React.useCallback(
    async (event?: React.SyntheticEvent) => {
      if (event) event.preventDefault();
      makeSearch(null);
      await wait(1000);
      makeSearch(searchState);
    },
    [searchState, makeSearch]
  );

  React.useEffect(() => {
    const loadSearch = async () => {
      await doSearch();
    };

    loadSearch();
  }, [doSearch]);

  React.useEffect(() => {
    localStorage.setItem('search.state', search);
  }, [search]);

  return (
    <Form role="form" onSubmit={applySearchParams}>
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
