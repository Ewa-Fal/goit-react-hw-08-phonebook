import { createSlice } from '@reduxjs/toolkit';
import {
  getUserThunk,
  loginUserThunk,
  logoutUserThunk,
  registerUserThunk,
} from './userOperations';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: null,
    token: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.token = null;
        state.email = null;
        state.error = payload;
      })
      .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
        state.email = payload.email;
      })
      .addCase(registerUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.token = null;
        state.email = null;
        state.error = payload;
      })
      .addCase(registerUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
        state.email = payload.email;
      })
      .addCase(logoutUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.token = null;
        state.email = null;
        state.error = payload;
      })
      .addCase(logoutUserThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.token = null;
        state.email = null;
      })
      .addCase(getUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.token = null;
        state.email = null;
        state.error = payload;
      })
      .addCase(getUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.email = payload.email;
      });
  },
});

export default userSlice.reducer;
