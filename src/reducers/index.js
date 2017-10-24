import { combineReducers } from 'redux';
import app from './app-reducer';
import newTransaction from './new-transaction-reducer';

export const reducers = {
  app,
  newTransaction
};

export default combineReducers(reducers);
