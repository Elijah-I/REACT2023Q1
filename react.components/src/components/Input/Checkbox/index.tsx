import React from 'react';
import { v4 as uniqid } from 'uuid';
import './index.scss';

interface InputCheckboxProps {
  title: string;
  labelText: string;
  error?: string;
  onClick: () => void;
  forwardedRef: React.RefObject<HTMLInputElement>;
}

class InputCheckbox extends React.PureComponent<InputCheckboxProps> {
  render() {
    const titleClassName = ['input__label'];
    const uniqID = uniqid();
    if (this.props.error) titleClassName.push('input__label--error');

    return (
      <div className="input__element white-box">
        <div className="checkbox">
          <div className={titleClassName.join(' ')}>{this.props.error || this.props.title}</div>
          <input type="checkbox" id={uniqID} ref={this.props.forwardedRef} />
          <label htmlFor={uniqID} onClick={this.props.onClick}>
            I take a full responsibility for the content I post
          </label>
        </div>
      </div>
    );
  }
}

export default InputCheckbox;
