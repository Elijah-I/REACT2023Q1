import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.scss';

interface PopupProps {
  show: boolean;
}

class Popup extends React.PureComponent<PopupProps> {
  render() {
    return (
      <CSSTransition
        in={this.props.show}
        timeout={300}
        classNames="popup"
        mountOnEnter
        unmountOnExit
      >
        <div className="popup__content">Card successfully have been created</div>
      </CSSTransition>
    );
  }
}

export default Popup;
