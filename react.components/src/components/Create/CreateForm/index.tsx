import React from 'react';

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
  onCreate: (card: Card) => void;
}

interface CreateFormState {
  errors: {
    title?: string;
    tags?: string;
    date?: string;
    file?: string;
    agreement?: string;
  };
  isSubmitting: boolean;
}

class CreateForm extends React.PureComponent<CreateFormProps> {
  state: CreateFormState;

  constructor(props: CreateFormProps) {
    super(props);

    this.state = {
      errors: {
        title: 'field is required',
        tags: 'field is required',
        date: 'field is required',
        file: 'field is required',
        agreement: 'field is required',
      },
      isSubmitting: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.dropError = this.dropError.bind(this);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState({
      ...this.state,
      isSubmitting: true,
    });
  }

  dropError(filed: keyof CreateFormState['errors']) {
    const errors = { ...this.state.errors };
    delete errors[filed];

    this.setState({
      ...this.state,
      errors,
    });
  }

  render() {
    return (
      <form className="create__form" onSubmit={this.handleSubmit}>
        <Input
          type="text"
          title="title"
          error={this.state.errors?.title}
          onFocus={() => this.dropError('title')}
        />
        <Input
          type="text"
          title="tags (separeted with comma)"
          error={this.state.errors?.tags}
          onFocus={() => this.dropError('tags')}
        />
        <Input
          type="date"
          title="creation date"
          error={this.state.errors?.date}
          onFocus={() => this.dropError('date')}
        />

        <Select>
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
          error={this.state.errors?.agreement}
          onClick={() => this.dropError('agreement')}
        />
        <InputRadioGroup title="author" labelText={['Elijah', 'Neo', 'Joxi']} />

        <InputFile error={this.state.errors?.file} onClick={() => this.dropError('file')} />
        <InputSubmit text="create" isSubmitting={this.state.isSubmitting} />
      </form>
    );
  }
}

export default CreateForm;
