import React from 'react';
import type { FieldError, UseFormRegister } from 'react-hook-form/dist/types';
import { FormValues } from 'types/create.types';
import './index.scss';

interface InputRegularProps {
  name: keyof FormValues;
  type: 'text' | 'date';
  error: FieldError | undefined;
  register: UseFormRegister<FormValues>;
  onFocus: () => void;
}

const InputRegular = ({ error, type, name, register, onFocus }: InputRegularProps) => {
  const titleClassName = ['input__label'];
  const inputClassName = ['white-box'];

  if (error) titleClassName.push('input__label--error');
  if (type === 'date') inputClassName.push('input--padded-right');

  return (
    <div className="input__element">
      <div className={titleClassName.join(' ')}>{error?.message || name}</div>
      <input
        {...register(name)}
        type={type}
        className={inputClassName.join(' ')}
        onFocus={onFocus}
      />
    </div>
  );
};

export default InputRegular;
