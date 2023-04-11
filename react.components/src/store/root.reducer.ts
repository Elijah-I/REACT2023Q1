import { combineReducers } from '@reduxjs/toolkit';
import { formSlice } from './form/form.slice';

export const rootReducer = combineReducers({
  form: formSlice.reducer,
});
