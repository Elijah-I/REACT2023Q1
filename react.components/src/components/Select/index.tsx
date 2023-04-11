import React, { ReactNode } from 'react';
import type { FieldError, UseFormRegister } from 'react-hook-form/dist/types';
import { FormValues } from 'types/create.types';

export interface SelectProps {
  name: keyof FormValues;
  children: ReactNode;
  error: FieldError | undefined;
  register: UseFormRegister<FormValues>;
}

const Select = ({ error, name, register, children }: SelectProps) => {
  const containerClassName = ['input__label'];
  if (error) containerClassName.push('input__label--error');

  return (
    <div className="input__element">
      <div className={containerClassName.join(' ')}>{error?.message || name}</div>
      <select {...register(name)} className="white-box">
        {children}
      </select>
    </div>
  );
};

export default Select;
