import React, { ReactNode } from 'react';

interface SelectProps {
  children: ReactNode;
  error?: string;
  title: string;
  onFocus: () => void;
  forwardedRef: React.RefObject<HTMLSelectElement>;
}

class Select extends React.PureComponent<SelectProps> {
  render() {
    const containerClassName = ['input__label'];
    if (this.props.error) containerClassName.push('input__label--error');

    return (
      <div className="input__element">
        <div className={containerClassName.join(' ')}>{this.props.error || this.props.title}</div>
        <select
          ref={this.props.forwardedRef}
          onMouseDown={this.props.onFocus}
          className="white-box"
        >
          {this.props.children}
        </select>
      </div>
    );
  }
}

export default Select;
