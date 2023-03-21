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

interface CreateFormState {
  errors: {
    title?: string;
    tags?: string;
    date?: string;
    file?: string;
    agreement?: string;
  };
  isSubmitting: boolean;
  fileKey: string;
}

interface Elements {
  form: React.RefObject<HTMLFormElement>;
  title: React.RefObject<HTMLInputElement>;
  tags: React.RefObject<HTMLInputElement>;
  date: React.RefObject<HTMLInputElement>;
  file: React.RefObject<HTMLInputElement>;
  type: React.RefObject<HTMLSelectElement>;
  agreement: React.RefObject<HTMLInputElement>;
  author: React.RefObject<HTMLInputElement>[];
}

class CreateForm extends React.PureComponent<CreateFormProps> {
  state: CreateFormState;
  elements: Elements;

  constructor(props: CreateFormProps) {
    super(props);

    this.state = {
      errors: {},
      isSubmitting: false,
      fileKey: uniqid(),
    };

    this.elements = {
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

    this.handleSubmit = this.handleSubmit.bind(this);
    this.dropError = this.dropError.bind(this);
  }

  async handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const card = await this.validatedCard();
    if (!card) return;

    this.setState({
      ...this.state,
      isSubmitting: true,
    });

    setTimeout(() => {
      this.resetForm();
      this.props.onCreate(card);
    }, 1000);
  }

  resetForm() {
    this.elements.form.current?.reset();
    if (this.elements.author[0].current) this.elements.author[0].current.checked = true;

    this.setState({
      ...this.state,
      fileKey: uniqid(),
      isSubmitting: false,
    });
  }

  async readImage(file: Blob | null): Promise<string> {
    return new Promise((resolve) => {
      if (!file) return resolve('');
      const reader = new FileReader();
      reader.addEventListener('load', (event) => {
        resolve(event?.target?.result?.toString() || '');
      });
      reader.readAsDataURL(file);
    });
  }

  async validatedCard() {
    const errors = {} as typeof this.state.errors;
    const tags = this.elements.tags.current?.value;
    const files = this.elements.file.current?.files;
    const file = files ? files[0] : null;
    const picture = await this.readImage(file);

    const card: Card = {
      author: this.elements.author.reduce((acc, element) => {
        if (element.current?.checked) acc = element.current.dataset.value || '';
        return acc;
      }, ''),
      id: this.props.index,
      picture,
      tags: [...(tags ? tags.split(', ') : [])],
      title: this.elements.title.current?.value || '',
      type:
        Object.values(OPTION).find((opt) => opt === this.elements.type.current?.value) ||
        OPTION.PHOTO,
      statistic: {
        isFavorite: false,
        likes: 0,
        views: 0,
      },
      date: this.elements.date.current?.value || '',
    };

    if (!card.date) errors.date = 'field is required';
    if (!card.title) errors.title = 'field is required';
    if (card.tags.length === 0) errors.tags = 'field is required';
    if (!card.picture) errors.file = 'upload an image';
    if (file && !file.type.startsWith('image/')) errors.file = 'uploaded file is not an image';
    if (!this.elements.agreement.current?.checked) errors.agreement = 'accept agreement';

    if (Object.keys(errors).length) {
      this.setState({
        ...this.state,
        errors,
      });

      return null;
    }

    return card;
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
      <form className="create__form" onSubmit={this.handleSubmit} ref={this.elements.form}>
        <Input
          type="text"
          title="title"
          error={this.state.errors?.title}
          onFocus={() => this.dropError('title')}
          forwardedRef={this.elements.title}
        />
        <Input
          type="text"
          title="tags (separeted with comma)"
          error={this.state.errors?.tags}
          onFocus={() => this.dropError('tags')}
          forwardedRef={this.elements.tags}
        />
        <Input
          type="date"
          title="creation date"
          error={this.state.errors?.date}
          onFocus={() => this.dropError('date')}
          forwardedRef={this.elements.date}
        />

        <Select forwardedRef={this.elements.type}>
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
          forwardedRef={this.elements.agreement}
        />
        <InputRadioGroup
          title="author"
          elements={[
            { label: 'Elijah', forwardedRef: this.elements.author[0] },
            { label: 'Neo', forwardedRef: this.elements.author[1] },
            { label: 'Joxi', forwardedRef: this.elements.author[2] },
          ]}
        />

        <InputFile
          key={this.state.fileKey}
          error={this.state.errors?.file}
          onClick={() => this.dropError('file')}
          forwardedRef={this.elements.file}
        />
        <InputSubmit text="create" isSubmitting={this.state.isSubmitting} />
      </form>
    );
  }
}

export default CreateForm;
