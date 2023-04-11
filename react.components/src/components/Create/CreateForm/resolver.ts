import { Resolver } from 'react-hook-form';
import { Card } from 'types/card.types';
import { FormErrors, FormValues } from 'types/create.types';
import { OPTION } from 'types/search.types';

export const resolver: Resolver<FormValues> = async (values) => {
  const hanldeValues = (values: FormValues) => {
    if (Object.values(values).some((value) => !value)) return {};

    const files = values.file;
    const file = files ? files[0] : null;
    const picture = file ? URL.createObjectURL(file) : '';

    // eslint-disable-next-line no-unused-vars
    const { file: _, ...clone } = values;

    const card: Card = {
      ...clone,
      picture,
      statistic: {
        isFavorite: false,
        likes: 0,
        views: 0,
      },
      type: Object.values(OPTION).find((opt) => opt === values.type),
      tags: [...values.tags.split(', ')],
    };

    return card;
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
