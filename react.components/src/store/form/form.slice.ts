import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { Card, CardsProps } from 'types/card.types';

const initialState: CardsProps = {
  cards: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<Card>) {
      state.cards.push(action.payload);
    },
  },
});
