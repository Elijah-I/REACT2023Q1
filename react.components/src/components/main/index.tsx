import React from 'react';

import Search from 'components/Search';
import Loader from 'components/Loader';

import { SearchState } from 'types/search.types';
import { MainState } from 'types/main.types';

class Main extends React.Component {
  state: MainState;

  constructor(props: object) {
    super(props);

    this.state = {
      search: {} as SearchState,
      cards: [],
    };

    this.makeSearch = this.makeSearch.bind(this);
  }

  makeSearch(searchState: SearchState) {
    this.setState({
      ...this.state,
      search: searchState,
    });
  }

  render() {
    return (
      <>
        <Search makeSearch={this.makeSearch} />
        {this.state.search.space ? <div>cards</div> : <Loader />}
      </>
    );
  }
}

export default Main;
