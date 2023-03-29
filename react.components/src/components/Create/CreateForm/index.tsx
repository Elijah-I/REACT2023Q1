import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { resolver } from './resolver';

import { OPTION } from 'types/search.types';
import { Card } from 'types/card.types';

import Input from 'components/Input/Regular';
import Select from 'components/Select';

import InputCheckbox from 'components/Input/Checkbox';
import InputRadioGroup from 'components/Input/Radio';
import InputFile from 'components/Input/File';
import InputSubmit from 'components/Input/Submit';

import { FormValues } from 'types/create.types';

import './index.scss';

interface CreateFormProps {
  index: number;
  onCreate: (card: Card) => void;
}

const CreateForm = ({ onCreate, index }: CreateFormProps) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver,
    shouldFocusError: false,
  });

  const wait = (milliseconds: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  };

  const onSubmit: SubmitHandler<FormValues | Card> = async (card) => {
    if (!('picture' in card)) return;

    setIsSubmitting(true);

    await wait(1000);

    onCreate(card);
    setIsSubmitting(false);

    reset();
  };

  return (
    <form className="create__form" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register('id')} value={index} />
      <Input
        type="text"
        name="title"
        error={errors.title}
        onFocus={() => clearErrors('title')}
        register={register}
      />

      <Input
        type="text"
        name="tags"
        error={errors.tags}
        onFocus={() => clearErrors('tags')}
        register={register}
      />

      <Input
        type="date"
        name="date"
        error={errors?.date}
        onFocus={() => clearErrors('date')}
        register={register}
      />

      <Select
        name="type"
        onFocus={() => clearErrors('type')}
        error={errors.type}
        register={register}
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
        name="agreement"
        labelText="I take a full responsibility for the content I post"
        error={errors.agreement}
        onClick={() => clearErrors('agreement')}
        register={register}
      />

      <InputRadioGroup
        name="author"
        error={errors.author}
        onFocus={() => clearErrors('author')}
        register={register}
        elements={['Elijah', 'Neo', 'Joxi']}
      />

      <InputFile
        name="file"
        error={errors.file}
        onClick={() => clearErrors('file')}
        watch={watch}
        register={register}
      />
      <InputSubmit text="create" isSubmitting={isSubmitting} />
    </form>
  );
};

export default CreateForm;
