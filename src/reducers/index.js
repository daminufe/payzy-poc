import { combineReducers } from 'redux';
import app from './app-reducer';

export const reducers = {
  app,
};

export default combineReducers(reducers);
