import React from 'react';
import type { FieldError, UseFormRegister, UseFormWatch } from 'react-hook-form/dist/types';
import type { FormValues } from 'types/create.types';
import './index.scss';

interface InputFileProps {
  watch: UseFormWatch<FormValues>;
  name: keyof FormValues;
  error: FieldError | undefined;
  register: UseFormRegister<FormValues>;
  onClick: () => void;
}

const InputFile = ({ name, error, onClick, watch, register }: InputFileProps) => {
  const files = watch(name);
  const [image, setImage] = React.useState('');

  const containerClassName = ['input__file'];
  if (error) containerClassName.push('input__file--error');

  React.useEffect(() => {
    setImage(files && files.length ? (files as FileList)[0].name : '');
  }, [files]);

  return (
    <div className="input__element">
      <div className={containerClassName.join(' ')}>
        Drag and drop your image
        <br />
        or
        <br />
        Click to add
        <div className="delimiter"></div>
        <div className="image-label">{error?.message || image || '[ no image atteched ]'}</div>
        <input type="file" onClick={onClick} {...register(name)} />
      </div>
    </div>
  );
};

export default InputFile;
