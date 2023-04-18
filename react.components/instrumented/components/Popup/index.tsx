import React from 'react';
import './index.scss';
import { useSearchParams } from 'react-router-dom';

interface PopupProps {
  children?: React.ReactNode;
}

const Popup = ({ children }: PopupProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const closePopup = () => {
    searchParams.delete('popup');
    setSearchParams(searchParams);
  };

  return (
    <div className="popup">
      <div className="popup__cover" onClick={closePopup}></div>
      <div className="popup__container">
        <div className="popup__close" onClick={closePopup}></div>
        {children}
      </div>
    </div>
  );
};

export default Popup;
