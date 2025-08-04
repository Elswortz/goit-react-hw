import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './Contacts/slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
