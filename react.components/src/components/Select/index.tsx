import React, { ReactNode } from 'react';

interface SelectProps {
  children: ReactNode;
}

class Select extends React.PureComponent<SelectProps> {
  render() {
    return (
      <div className="input__element">
        <div className="input__label">media type</div>
        <select className="white-box">{this.props.children}</select>
      </div>
    );
  }
}

export default Select;
