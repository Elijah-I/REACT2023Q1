import React, { ReactNode } from 'react';

interface SelectProps {
  children: ReactNode;
  error?: string;
  title: string;
  onFocus: () => void;
  forwardedRef: React.RefObject<HTMLSelectElement>;
}

const Select = ({ error, title, forwardedRef, onFocus, children }: SelectProps) => {
  const containerClassName = ['input__label'];
  if (error) containerClassName.push('input__label--error');

  return (
    <div className="input__element">
      <div className={containerClassName.join(' ')}>{error || title}</div>
      <select ref={forwardedRef} onMouseDown={onFocus} className="white-box">
        {children}
      </select>
    </div>
  );
};

export default Select;
