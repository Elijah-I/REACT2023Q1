import React from 'react';
import { v4 as uniqid } from 'uuid';
import './index.scss';

interface InputRadioGroupProps {
  title: string;
  labelText: string[];
}

class InputRadioGroup extends React.PureComponent<InputRadioGroupProps> {
  render() {
    const groupUniqId = uniqid();

    return (
      <div className="input__element input__element--horisontal white-box">
        <div className="input__label">{this.props.title}</div>
        {this.props.labelText.map((label, key) => {
          const uniqId = uniqid();

          return (
            <div className="radio" key={uniqId}>
              <input type="radio" name={groupUniqId} id={uniqId} defaultChecked={key === 0} />
              <label htmlFor={uniqId}>{label}</label>
            </div>
          );
        })}
      </div>
    );
  }
}

export default InputRadioGroup;
