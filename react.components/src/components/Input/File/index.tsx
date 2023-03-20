import React from 'react';
import './index.scss';

interface InputFileProps {
  error?: string;
  onClick: () => void;
}

class InputFile extends React.PureComponent<InputFileProps> {
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
          <div className="no-image">[no image atteched]</div>
          <input type="file" onClick={this.props.onClick} />
        </div>
      </div>
    );
  }
}

export default InputFile;
