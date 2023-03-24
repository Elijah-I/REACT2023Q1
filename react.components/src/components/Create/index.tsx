import React from 'react';

import CreateForm from './CreateForm';
import Cards from 'components/Cards';
import Popup from './Popup';

import { Card } from 'types/card.types';

import './index.scss';

interface CreateState {
  cards: Card[];
  showPopup: boolean;
}

class Create extends React.PureComponent {
  state: CreateState;

  constructor(props: object) {
    super(props);

    this.state = {
      cards: [],
      showPopup: false,
    };

    this.onCreate = this.onCreate.bind(this);
  }

  componentDidUpdate() {
    if (this.state.showPopup) {
      setTimeout(() => {
        this.setState({
          showPopup: false,
        });
      }, 3000);
    }
  }

  onCreate(card: Card) {
    this.setState({
      showPopup: true,
      cards: [...this.state.cards, card],
    });
  }

  render() {
    return (
      <div className="create">
        <CreateForm onCreate={this.onCreate} index={this.state.cards.length} />
        <Cards cards={this.state.cards} />
        <Popup show={this.state.showPopup} />
      </div>
    );
  }
}

export default Create;
