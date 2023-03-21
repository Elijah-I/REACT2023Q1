import React from 'react';
import Cards from 'components/Cards';
import CreateForm from './CreateForm';
import { Card } from 'types/card.types';
import './index.scss';

interface CreateState {
  cards: Card[];
}

class Create extends React.PureComponent {
  state: CreateState;

  constructor(props: object) {
    super(props);

    this.state = {
      cards: [],
    };

    this.onCreate = this.onCreate.bind(this);
  }

  onCreate(card: Card) {
    this.setState({
      ...this.state,
      cards: [...this.state.cards, card],
    });
  }

  render() {
    return (
      <div className="create">
        <CreateForm onCreate={this.onCreate} index={this.state.cards.length} />
        <Cards cards={this.state.cards} />
      </div>
    );
  }
}

export default Create;
