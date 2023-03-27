import React from 'react';
import './index.scss';

interface InputSubmitProps {
  text: string;
  isSubmitting: boolean;
}

const InputSubmit = ({ isSubmitting, text }: InputSubmitProps) => {
  const buttonClassName = ['button'];
  if (isSubmitting) buttonClassName.push('button--loading');

  return (
    <div className="input__element input__element--right-bottom">
      <button type="submit" className={buttonClassName.join(' ')}>
        {isSubmitting ? '...' : text}
      </button>
    </div>
  );
};

export default InputSubmit;
