import React from 'react';
import './index.scss';

interface InputFileProps {
  error?: string;
  onClick: () => void;
  forwardedRef: React.RefObject<HTMLInputElement>;
}

interface InputFileState {
  image: string;
}

class InputFile extends React.PureComponent<InputFileProps> {
  state: InputFileState;

  constructor(props: InputFileProps) {
    super(props);

    this.state = {
      image: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const files = this.props.forwardedRef.current?.files;

    this.setState({
      image: files ? files[0].name : '',
    });
  }

  render() {
    const containerClassName = ['input__file'];
    if (this.props.error) containerClassName.push('input__file--error');

    return (
      <div className="input__element">
        <div className={containerClassName.join(' ')}>
          Drag and drop your image
          <br />
          or
          <br />
          Click to add
          <div className="delimiter"></div>
          <div className="image-label">
            {this.props.error || this.state.image || '[ no image atteched ]'}
          </div>
          <input
            type="file"
            onClick={this.props.onClick}
            ref={this.props.forwardedRef}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default InputFile;
