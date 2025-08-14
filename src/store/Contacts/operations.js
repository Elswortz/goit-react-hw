import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../../services/contacts-api';

// export const getContactsThunk = createAsyncThunk('contacts/fetchAll', getContacts);

// export const addContactsThunk = createAsyncThunk('contacts/addContact', addContact);

// export const deleteContactsThunk = createAsyncThunk('contacts/deleteContact', deleteContact);

// import * as AuthAPI from '../../services/auth-api';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
//   try {
//     const response = await AuthAPI.registerUser(credentials);
//     AuthAPI.setAuthHeader(response.data.token);
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
//   try {
//     const response = await AuthAPI.loginUser(credentials);
//     AuthAPI.setAuthHeader(response.data.token);
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await AuthAPI.logOutUser();
//     AuthAPI.clearAuthHeader();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await contactsAPI.getContacts();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await contactsAPI.addContact(contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await contactsAPI.deleteContact(id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
