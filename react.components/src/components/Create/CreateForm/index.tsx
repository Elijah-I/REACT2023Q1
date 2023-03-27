import React from 'react';
import { v4 as uniqid } from 'uuid';

import { OPTION } from 'types/search.types';
import { Card } from 'types/card.types';

import Input from 'components/Input/Regular';
import Select from 'components/Select';

import './index.scss';
import InputCheckbox from 'components/Input/Checkbox';
import InputRadioGroup from 'components/Input/Radio';
import InputFile from 'components/Input/File';
import InputSubmit from 'components/Input/Submit';

interface CreateFormProps {
  index: number;
  onCreate: (card: Card) => void;
}

type Errors = {
  title?: string;
  tags?: string;
  date?: string;
  file?: string;
  type?: string;
  author?: string;
  agreement?: string;
};

const CreateForm = ({ onCreate, index }: CreateFormProps) => {
  const [errors, setErrors] = React.useState<Errors>({});
  const [fileKey, setFileKey] = React.useState(uniqid());
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const elements = {
    form: React.createRef<HTMLFormElement>(),
    title: React.createRef<HTMLInputElement>(),
    tags: React.createRef<HTMLInputElement>(),
    date: React.createRef<HTMLInputElement>(),
    file: React.createRef<HTMLInputElement>(),
    type: React.createRef<HTMLSelectElement>(),
    agreement: React.createRef<HTMLInputElement>(),
    author: [
      React.createRef<HTMLInputElement>(),
      React.createRef<HTMLInputElement>(),
      React.createRef<HTMLInputElement>(),
    ],
  };

  const wait = (milliseconds: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const card = validatedCard();
    if (!card) return;

    setIsSubmitting(true);

    await wait(1000);

    resetForm();
    onCreate(card);
  };

  const resetForm = () => {
    elements.form.current?.reset();
    if (elements.author[0].current) elements.author[0].current.checked = true;

    setIsSubmitting(false);
    setFileKey(uniqid());
  };

  const validatedCard = () => {
    const errors = {} as Errors;
    const tags = elements.tags.current?.value;
    const files = elements.file.current?.files;
    const file = files ? files[0] : null;
    const picture = file ? URL.createObjectURL(file) : '';

    const card: Card = {
      author: elements.author.reduce((acc, element) => {
        if (element.current?.checked) acc = element.current.dataset.value || '';
        return acc;
      }, ''),
      id: index,
      picture,
      tags: [...(tags ? tags.split(', ') : [])],
      title: elements.title.current?.value || '',
      type: Object.values(OPTION).find((opt) => opt === elements.type.current?.value),
      statistic: {
        isFavorite: false,
        likes: 0,
        views: 0,
      },
      date: elements.date.current?.value || '',
    };

    if (!card.date) errors.date = 'field is required';
    if (!card.type) errors.type = 'pick content type';
    if (!card.title) errors.title = 'field is required';
    if (!card.author) errors.author = 'pick an author';
    if (card.tags.length === 0) errors.tags = 'field is required';
    if (!card.picture) errors.file = 'upload an image';

    if (file && !file.type.startsWith('image/')) errors.file = 'uploaded file is not an image';
    if (!elements.agreement.current?.checked) errors.agreement = 'accept agreement';

    if (Object.keys(errors).length) {
      setErrors(errors);
      return null;
    }

    return card;
  };

  const dropError = (filed: keyof Errors) => {
    if (errors[filed]) {
      delete errors[filed];
      setErrors({ ...errors });
    }
  };

  return (
    <form className="create__form" onSubmit={handleSubmit} ref={elements.form}>
      <Input
        type="text"
        title="title"
        error={errors?.title}
        onFocus={() => dropError('title')}
        forwardedRef={elements.title}
      />
      <Input
        type="text"
        title="tags (separeted with comma)"
        error={errors?.tags}
        onFocus={() => dropError('tags')}
        forwardedRef={elements.tags}
      />
      <Input
        type="date"
        title="creation date"
        error={errors?.date}
        onFocus={() => dropError('date')}
        forwardedRef={elements.date}
      />

      <Select
        forwardedRef={elements.type}
        title="media type"
        onFocus={() => dropError('type')}
        error={errors?.type}
      >
        <option></option>
        {Object.keys(OPTION).map((optKey) => {
          const option = OPTION[optKey as keyof typeof OPTION];
          if (option === 'all') return null;
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </Select>
      <InputCheckbox
        title="agreement"
        labelText="I take a full responsibility for the content I post"
        error={errors?.agreement}
        onClick={() => dropError('agreement')}
        forwardedRef={elements.agreement}
      />
      <InputRadioGroup
        title="author"
        error={errors?.author}
        onFocus={() => dropError('author')}
        elements={[
          { label: 'Elijah', forwardedRef: elements.author[0] },
          { label: 'Neo', forwardedRef: elements.author[1] },
          { label: 'Joxi', forwardedRef: elements.author[2] },
        ]}
      />

      <InputFile
        key={fileKey}
        error={errors?.file}
        onClick={() => dropError('file')}
        forwardedRef={elements.file}
      />
      <InputSubmit text="create" isSubmitting={isSubmitting} />
    </form>
  );
};

export default CreateForm;
