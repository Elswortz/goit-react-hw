import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getContactsThunk, addContactsThunk, deleteContactsThunk } from './operations';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const arrThunks = [getContactsThunk, addContactsThunk, deleteContactsThunk];

const thunksSpread = type => arrThunks.map(item => item[type]);

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

const handleFulfilledGet = (state, { payload }) => {
  state.items = payload;
};

const handleFulfilledAdd = (state, { payload }) => {
  state.items.push(payload);
};

const handleFulfilledDelete = (state, { payload }) => {
  state.items = state.items.filter(item => item.id !== payload.id);
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(addContactsThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...thunksSpread(STATUS.PENDING)), handlePending)
      .addMatcher(isAnyOf(...thunksSpread(STATUS.REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...thunksSpread(STATUS.FULFILLED)), handleFulfilled);
  },
});

export const contactsReducer = contactSlice.reducer;
export const { filterContacts } = contactSlice.actions;
