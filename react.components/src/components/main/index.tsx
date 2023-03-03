import React from 'react';

import Search from 'components/Search';
import Loader from 'components/Loader';

import { SearchState } from 'types/search.types';
import { MainState } from 'types/main.types';

import './index.scss';

class Main extends React.PureComponent {
  state: MainState;

  constructor(props: object) {
    super(props);

    this.state = {
      search: null,
      cards: [],
    };

    this.makeSearch = this.makeSearch.bind(this);
  }

  makeSearch(searchState: SearchState | null) {
    this.setState({
      ...this.state,
      search: searchState || null,
    });
  }

  render() {
    return (
      <div className="main">
        <Search makeSearch={this.makeSearch} />
        {this.state.search ? <div>cards</div> : <Loader />}
      </div>
    );
  }
}

export default Main;
