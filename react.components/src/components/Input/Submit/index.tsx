import React from 'react';
import './index.scss';

interface InputSubmitProps {
  text: string;
  isSubmitting: boolean;
}

class InputSubmit extends React.PureComponent<InputSubmitProps> {
  render() {
    const buttonClassName = ['button'];
    if (this.props.isSubmitting) buttonClassName.push('button--loading');

    return (
      <div className="input__element input__element--right-bottom">
        <button type="submit" className={buttonClassName.join(' ')}>
          {this.props.isSubmitting ? '...' : this.props.text}
        </button>
      </div>
    );
  }
}

export default InputSubmit;
