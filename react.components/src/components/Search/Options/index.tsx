import React from 'react';
import { OPTION, OptionsProps } from 'types/search.types';

class Options extends React.Component<OptionsProps> {
  render() {
    return (
      <div>
        <div className="radio radio--icon">
          <input
            type="radio"
            name="option"
            value={OPTION.ALL}
            checked={this.props.option === OPTION.ALL}
            onChange={this.props.setOption}
          />
        </div>
        <div className="radio radio--icon">
          <input
            type="radio"
            name="option"
            value={OPTION.PHOTO}
            checked={this.props.option === OPTION.PHOTO}
            onChange={this.props.setOption}
          />
        </div>
        <div className="radio radio--icon">
          <input
            type="radio"
            name="option"
            value={OPTION.POST}
            checked={this.props.option === OPTION.POST}
            onChange={this.props.setOption}
          />
        </div>
        <div className="radio radio--icon">
          <input
            type="radio"
            name="option"
            value={OPTION.VIDEO}
            checked={this.props.option === OPTION.VIDEO}
            onChange={this.props.setOption}
          />
        </div>
      </div>
    );
  }
}

export default Options;
