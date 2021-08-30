import { combineReducers } from 'redux';
import { NoteReducer } from './reducers/NoteReducer';

const allReducers = {
  NoteReducer
};

export const RootReducer = combineReducers(allReducers);