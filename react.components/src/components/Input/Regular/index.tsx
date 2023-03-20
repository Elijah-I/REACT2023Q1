import React from 'react';
import './index.scss';

interface InputRegularProps {
  title: string;
  type: 'text' | 'date';
  error?: string;
  onFocus: () => void;
}

class InputRegular extends React.PureComponent<InputRegularProps> {
  render() {
    const titleClassName = ['input__label'];
    const inputClassName = ['white-box'];

    if (this.props.error) titleClassName.push('input__label--error');
    if (this.props.type === 'date') inputClassName.push('input--padded-right');

    return (
      <div className="input__element">
        <div className={titleClassName.join(' ')}>{this.props.error || this.props.title}</div>
        <input
          type={this.props.type}
          className={inputClassName.join(' ')}
          onFocus={this.props.onFocus}
        />
      </div>
    );
  }
}

export default InputRegular;
