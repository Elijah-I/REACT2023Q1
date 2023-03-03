import React from 'react';
import type { SearchLineProps } from 'types/search.types';

class SearchLine extends React.Component<SearchLineProps> {
  render() {
    return (
      <div>
        <input
          type="text"
          className="input search__input"
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
