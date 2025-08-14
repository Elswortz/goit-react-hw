import * as AuthAPI from '../../services/auth-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const response = await AuthAPI.registerUser(credentials);
    AuthAPI.setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await AuthAPI.loginUser(credentials);
    AuthAPI.setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await AuthAPI.logOutUser();
    AuthAPI.clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
