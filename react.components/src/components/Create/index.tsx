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

const Create = () => {
  const [cards, setCards] = React.useState<Card[]>([]);
  const [showPopup, setShowPopup] = React.useState(false);

  const wait = (milliseconds: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  };

  React.useEffect(() => {
    const checkPopUp = async () => {
      if (showPopup) {
        await wait(3000);
        setShowPopup(false);
      }
    };

    checkPopUp();
  }, [showPopup]);

  const onCreate = (card: Card) => {
    setShowPopup(true);
    setCards([...cards, card]);
  };

  return (
    <div className="create">
      <CreateForm onCreate={onCreate} index={cards.length} />
      <Cards cards={cards} />
      <Popup show={showPopup} />
    </div>
  );
};

export default Create;
