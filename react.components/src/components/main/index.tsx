import React from 'react';

import Search from 'components/Search';
import Loader from 'components/Loader';
import Cards from 'components/Cards';

import { SearchState } from 'types/search.types';
import { MainState } from 'types/main.types';

import './index.scss';

class Main extends React.PureComponent {
  state: MainState;

  constructor(props: object) {
    super(props);

    this.state = {
      search: null,
      cards: null,
    };

    this.makeSearch = this.makeSearch.bind(this);
    this.getCards = this.getCards.bind(this);
  }

  componentDidMount() {
    this.getCards();
  }

  makeSearch(searchState: SearchState | null) {
    this.setState({
      ...this.state,
      search: searchState || null,
    });
  }

  async getCards() {
    this.setState({
      ...this.state,
      cards: (await import('./../../model/cards.json')).default,
    });
  }

  render() {
    return (
      <div className="main">
        <Search makeSearch={this.makeSearch} />

        {this.state.search && this.state.cards ? (
          <Cards cards={this.state.cards} search={this.state.search} />
        ) : (
          <div className="main__loader">
            <Loader />
          </div>
        )}
      </div>
    );
  }
}

export default Main;
