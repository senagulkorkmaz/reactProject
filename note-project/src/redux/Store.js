import { createStore } from 'redux';
import { RootReducer } from './RootReducer';

export const Store = createStore(
  RootReducer
);
