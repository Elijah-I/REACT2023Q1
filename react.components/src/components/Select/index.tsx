import React, { ReactNode } from 'react';

interface SelectProps {
  children: ReactNode;
  forwardedRef: React.RefObject<HTMLSelectElement>;
}

class Select extends React.PureComponent<SelectProps> {
  render() {
    return (
      <div className="input__element">
        <div className="input__label">media type</div>
        <select ref={this.props.forwardedRef} className="white-box">
          {this.props.children}
        </select>
      </div>
    );
  }
}

export default Select;
