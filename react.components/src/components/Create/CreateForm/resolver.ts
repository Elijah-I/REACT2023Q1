import { Resolver } from 'react-hook-form';
import { FormErrors, FormValues } from 'types/create.types';

export const resolver: Resolver<FormValues> = async (values) => {
  const hanldeValues = (values: FormValues) => {
    if (Object.values(values).some((value) => !value)) return {};
    return values;
  };

  const createError = (message: string) => ({
    type: 'required',
    message,
  });

  const handleErrors = (values: FormValues) => {
    const errors = {} as FormErrors;

    const files = values.file;
    const file = files ? files[0] : null;

    if (!files.length) errors.file = createError('upload an image');
    if (file && !file.type.startsWith('image/'))
      errors.file = createError('uploaded file is not an image');

    if (!values.title) errors.title = createError('field is required');
    if (!values.tags) errors.tags = createError('field is required');
    if (!values.date) errors.date = createError('field is required');
    if (!values.type) errors.type = createError('pick content type');
    if (!values.agreement) errors.agreement = createError('accept agreement');
    if (!values.author) errors.author = createError('pick an author');

    return errors;
  };

  return {
    values: hanldeValues(values),
    errors: handleErrors(values),
  };
};
