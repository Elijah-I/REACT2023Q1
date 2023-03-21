import React from 'react';
import { v4 as uniqid } from 'uuid';
import './index.scss';

type Element = {
  label: string;
  forwardedRef: React.RefObject<HTMLInputElement>;
};

interface InputRadioGroupProps {
  title: string;
  elements: Element[];
}

class InputRadioGroup extends React.PureComponent<InputRadioGroupProps> {
  render() {
    const groupUniqId = uniqid();

    return (
      <div className="input__element input__element--horisontal white-box">
        <div className="input__label">{this.props.title}</div>
        {this.props.elements.map((element, key) => {
          const uniqId = uniqid();

          return (
            <div className="radio" key={uniqId}>
              <input
                type="radio"
                name={groupUniqId}
                id={uniqId}
                defaultChecked={element.forwardedRef.current?.checked || key === 0}
                ref={element.forwardedRef}
                data-value={element.label}
              />
              <label htmlFor={uniqId}>{element.label}</label>
            </div>
          );
        })}
      </div>
    );
  }
}

export default InputRadioGroup;
