import React from 'react';
import './index.scss';

interface InputFileProps {
  error?: string;
  onClick: () => void;
  forwardedRef: React.RefObject<HTMLInputElement>;
}

const InputFile = ({ error, onClick, forwardedRef }: InputFileProps) => {
  const [image, setImage] = React.useState('');

  const handleChange = () => {
    const files = forwardedRef.current?.files;

    setImage(files ? files[0].name : '');
  };

  const containerClassName = ['input__file'];
  if (error) containerClassName.push('input__file--error');

  return (
    <div className="input__element">
      <div className={containerClassName.join(' ')}>
        Drag and drop your image
        <br />
        or
        <br />
        Click to add
        <div className="delimiter"></div>
        <div className="image-label">{error || image || '[ no image atteched ]'}</div>
        <input type="file" onClick={onClick} ref={forwardedRef} onChange={handleChange} />
      </div>
    </div>
  );
};

export default InputFile;
