import React from 'react';
import type { FieldError, UseFormRegister } from 'react-hook-form/dist/types';
import type { FormValues } from 'types/create.types';
import './index.scss';

interface InputCheckboxProps {
  name: keyof FormValues;
  labelText: string;
  error: FieldError | undefined;
  register: UseFormRegister<FormValues>;
  onClick: () => void;
}

const InputCheckbox = ({ error, name, register, onClick, labelText }: InputCheckboxProps) => {
  const titleClassName = ['input__label'];
  const uniqID = `cb-${Date.now()}`;
  if (error) titleClassName.push('input__label--error');

  return (
    <div className="input__element white-box">
      <div className="checkbox">
        <div className={titleClassName.join(' ')}>{error?.message || name}</div>
        <input type="checkbox" id={uniqID} {...register(name)} />
        <label htmlFor={uniqID} onClick={onClick}>
          {labelText}
        </label>
      </div>
    </div>
  );
};

export default InputCheckbox;
