import React from 'react';
import type { SpacesProps } from 'types/search.types';

class Spaces extends React.Component<SpacesProps> {
  render() {
    return (
      <div>
        <div className="radio">
          <input
            type="radio"
            name="type"
            id="local-search"
            value="local"
            checked={this.props.space === 'local'}
            onChange={this.props.setSpace}
          />
          <label htmlFor="local-search">Search here</label>
        </div>
        <div className="radio">
          <input
            type="radio"
            name="type"
            id="web-search"
            value="web"
            checked={this.props.space === 'web'}
            onChange={this.props.setSpace}
          />
          <label htmlFor="web-search">Search the Web</label>
        </div>
      </div>
    );
  }
}

export default Spaces;
