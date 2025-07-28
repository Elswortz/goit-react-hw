import { createSlice } from '@reduxjs/toolkit';
import { phoneBookInitialState } from './initialState';

export const phoneBookSlice = createSlice({
  name: 'phonebook',
  initialState: phoneBookInitialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const phoneBookReducer = phoneBookSlice.reducer;
export const { addContact, deleteContact, filterContacts } =
  phoneBookSlice.actions;
