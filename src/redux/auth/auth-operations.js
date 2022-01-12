import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from '../../services/auth-api';

export const regicterUser = createAsyncThunk(
  'auth/regicterUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const contacts = await authApi.register(credentials);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logInUser = createAsyncThunk(
  'auth/logInUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const contacts = await authApi.logIn(credentials);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logOutUser = createAsyncThunk(
  'auth/logOutUser',
  async (_, { rejectWithValue }) => {
    try {
      await authApi.logOut();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const saveCurrentUser = createAsyncThunk(
  'auth/saveCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const currentToken = state.auth.token;
    if (!currentToken) {
      return thunkAPI.rejectWithValue();
    }
    try {
      const data = await authApi.currentUser(currentToken);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  },
);
