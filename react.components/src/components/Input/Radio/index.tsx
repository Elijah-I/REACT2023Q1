import React from 'react';
import { v4 as uniqid } from 'uuid';
import './index.scss';

type Element = {
  label: string;
  forwardedRef: React.RefObject<HTMLInputElement>;
};

interface InputRadioGroupProps {
  title: string;
  error?: string;
  onFocus: () => void;
  elements: Element[];
}

const InputRadioGroup = ({ error, title, onFocus, elements }: InputRadioGroupProps) => {
  const groupUniqId = uniqid();
  const containerClassName = ['input__label'];
  if (error) containerClassName.push('input__label--error');

  return (
    <div className="input__element input__element--horisontal white-box">
      <div className={containerClassName.join(' ')}>{error || title}</div>
      {elements.map((element) => {
        const uniqId = uniqid();

        return (
          <div className="radio" key={uniqId}>
            <input
              type="radio"
              name={groupUniqId}
              id={uniqId}
              onClick={onFocus}
              defaultChecked={element.forwardedRef.current?.checked}
              ref={element.forwardedRef}
              data-value={element.label}
            />
            <label htmlFor={uniqId}>{element.label}</label>
          </div>
        );
      })}
    </div>
  );
};

export default InputRadioGroup;
