import React from 'react';
import { SPACE, SpacesProps } from 'types/search.types';
import './index.scss';

const Spaces = ({ space, setSpace }: SpacesProps) => {
  return (
    <div className="search__spaces">
      <div className="radio">
        <input
          type="radio"
          name="type"
          id="local-search"
          value={SPACE.LOCAL}
          checked={space === SPACE.LOCAL}
          onChange={setSpace}
        />
        <label htmlFor="local-search">Search here</label>
      </div>
      <div className="radio">
        <input
          type="radio"
          name="type"
          id="web-search"
          value={SPACE.WEB}
          checked={space === SPACE.WEB}
          onChange={setSpace}
        />
        <label htmlFor="web-search">Search the Web</label>
      </div>
    </div>
  );
};

export default Spaces;
