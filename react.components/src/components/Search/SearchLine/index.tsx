import React from 'react';
import type { SearchLineProps } from 'types/search.types';
import './index.scss';

class SearchLine extends React.PureComponent<SearchLineProps> {
  render() {
    return (
      <div className="search__line">
        <div className={`icon icon--search icon--${this.props.option}`}></div>
        <input
          type="text"
          className="white-box search__input"
          value={this.props.search}
          onChange={this.props.setSearch}
        />
        <button type="submit" className="button search__button">
          SEARCH
        </button>
      </div>
    );
  }
}

export default SearchLine;
