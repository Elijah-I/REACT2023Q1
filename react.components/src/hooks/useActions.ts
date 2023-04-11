import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { rootAction } from 'store/root.action';

export const useActions = () => {
  const dispacth = useDispatch();
  return bindActionCreators(rootAction, dispacth);
};
