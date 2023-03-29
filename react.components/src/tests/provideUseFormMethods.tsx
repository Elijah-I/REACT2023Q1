import { render } from '@testing-library/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormWatch,
} from 'react-hook-form/dist/types';
import { FormValues } from 'types/create.types';
import { resolver } from './../components/Create/CreateForm/resolver';

export default () => {
  const ProvidedMethods = {} as {
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
    handleSubmit: UseFormHandleSubmit<FormValues>;
    reset: UseFormReset<FormValues>;
    watch: UseFormWatch<FormValues>;
  };

  const Empty = () => {
    const {
      register,
      handleSubmit,
      reset,
      watch,
      formState: { errors },
    } = useForm({
      resolver,
      shouldFocusError: false,
    });

    ProvidedMethods.reset = reset;
    ProvidedMethods.watch = watch;
    ProvidedMethods.errors = errors;
    ProvidedMethods.register = register;
    ProvidedMethods.handleSubmit = handleSubmit;

    return <></>;
  };

  render(<Empty />);

  return ProvidedMethods;
};
