import React from 'react';
import './index.scss';

interface InputRegularProps {
  title: string;
  type: 'text' | 'date';
  error?: string;
  forwardedRef: React.RefObject<HTMLInputElement>;
  onFocus: () => void;
}

const InputRegular = ({ error, type, title, forwardedRef, onFocus }: InputRegularProps) => {
  const titleClassName = ['input__label'];
  const inputClassName = ['white-box'];

  if (error) titleClassName.push('input__label--error');
  if (type === 'date') inputClassName.push('input--padded-right');

  return (
    <div className="input__element">
      <div className={titleClassName.join(' ')}>{error || title}</div>
      <input
        ref={forwardedRef}
        type={type}
        className={inputClassName.join(' ')}
        onFocus={onFocus}
      />
    </div>
  );
};

export default InputRegular;
