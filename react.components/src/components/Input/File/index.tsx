import React from 'react';
import type { FieldError, UseFormRegister, UseFormWatch } from 'react-hook-form/dist/types';
import type { FormValues } from 'types/create.types';
import './index.scss';

interface InputFileProps {
  watch: UseFormWatch<FormValues>;
  name: keyof FormValues;
  error: FieldError | undefined;
  register: UseFormRegister<FormValues>;
}

const InputFile = ({ name, error, watch, register }: InputFileProps) => {
  const files = watch(name) as FileList;
  const [image, setImage] = React.useState('');

  const containerClassName = ['input__file'];
  if (error) containerClassName.push('input__file--error');

  React.useEffect(() => {
    setImage(files && files.length ? files[0].name : '');
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
        <input type="file" {...register(name)} />
      </div>
    </div>
  );
};

export default InputFile;
