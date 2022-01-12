import { createSlice } from '@reduxjs/toolkit';
import {
  regicterUser,
  logInUser,
  logOutUser,
  saveCurrentUser,
} from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [regicterUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },

    [logInUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },

    [logOutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [saveCurrentUser.pending](state) {
      state.FetchingCurrentUser = true;
    },

    [saveCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },

    [saveCurrentUser.rejected](state) {
      state.FetchingCurrentUser = false;
    },
  },
});

export default AuthSlice.reducer;
