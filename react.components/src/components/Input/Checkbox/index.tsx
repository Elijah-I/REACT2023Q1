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

const InputCheckbox = ({ error, title, forwardedRef, onClick, labelText }: InputCheckboxProps) => {
  const titleClassName = ['input__label'];
  const uniqID = uniqid();
  if (error) titleClassName.push('input__label--error');

  return (
    <div className="input__element white-box">
      <div className="checkbox">
        <div className={titleClassName.join(' ')}>{error || title}</div>
        <input type="checkbox" id={uniqID} ref={forwardedRef} />
        <label htmlFor={uniqID} onClick={onClick}>
          {labelText}
        </label>
      </div>
    </div>
  );
};

export default InputCheckbox;
