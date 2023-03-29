import React from 'react';
import { OPTION, OptionsProps } from 'types/search.types';

import './index.scss';

const Options = ({ option, setOption }: OptionsProps) => {
  return (
    <div className="search__options">
      {Object.keys(OPTION).map((optKey, key) => {
        const optionValue = OPTION[optKey as keyof typeof OPTION];

        return (
          <div className="radio" key={key}>
            <input
              type="radio"
              name="option"
              id={`option-${optionValue}`}
              value={optionValue}
              checked={option === optionValue}
              onChange={setOption}
            />
            <label
              htmlFor={`option-${optionValue}`}
              className={`icon icon--${optionValue} ${
                option === optionValue ? 'icon--selected' : ''
              }`}
            ></label>
          </div>
        );
      })}
    </div>
  );
};

export default Options;
