import React from 'react';
import { OPTION, OptionsProps } from 'types/search.types';

import './index.scss';

class Options extends React.PureComponent<OptionsProps> {
  render() {
    return (
      <div className="search__options">
        {Object.keys(OPTION).map((optKey, key) => {
          const option = OPTION[optKey as keyof typeof OPTION];

          return (
            <div className="radio" key={key}>
              <input
                type="radio"
                name="option"
                id={`option-${option}`}
                value={option}
                checked={this.props.option === option}
                onChange={this.props.setOption}
              />
              <label
                htmlFor={`option-${option}`}
                className={`icon icon--${option} ${
                  this.props.option === option ? 'icon--selected' : ''
                }`}
              ></label>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Options;
