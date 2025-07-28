import { combineReducers } from '@reduxjs/toolkit';
import { phoneBookReducer } from './phonebook/phoneBookSlice';

export const reducer = combineReducers({
  phonebook: phoneBookReducer,
});
