import { combineReducers } from '@reduxjs/toolkit';
import { formSlice } from './form/form.slice';
import { api } from './api';

export const rootReducer = combineReducers({
  form: formSlice.reducer,
  [api.reducerPath]: api.reducer,
});
