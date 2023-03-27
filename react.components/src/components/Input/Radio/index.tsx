import React from 'react';
import type { FieldError, UseFormRegister } from 'react-hook-form/dist/types';
import type { FormValues } from 'types/create.types';
import './index.scss';

interface InputRadioGroupProps {
  name: keyof FormValues;
  error: FieldError | undefined;
  register: UseFormRegister<FormValues>;
  onFocus: () => void;
  elements: string[];
}

const InputRadioGroup = ({ error, name, onFocus, register, elements }: InputRadioGroupProps) => {
  const containerClassName = ['input__label'];
  if (error) containerClassName.push('input__label--error');

  return (
    <div className="input__element input__element--horisontal white-box">
      <div className={containerClassName.join(' ')}>{error?.message || name}</div>
      {elements.map((element, i) => {
        const uniqId = `rb-${Date.now()}-${i}`;

        return (
          <div className="radio" key={uniqId}>
            <input
              type="radio"
              id={uniqId}
              onClick={onFocus}
              {...register(name)}
              value={element}
              data-value={element}
            />
            <label htmlFor={uniqId}>{element}</label>
          </div>
        );
      })}
    </div>
  );
};

export default InputRadioGroup;
