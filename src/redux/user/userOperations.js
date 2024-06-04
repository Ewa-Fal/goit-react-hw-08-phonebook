import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  currentUserApi,
  loginUserApi,
  logOutUserApi,
  newUserApi,
} from 'utils/authApi';

// LOGIN
export const loginUserThunk = createAsyncThunk(
  'loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await loginUserApi(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// REGISTER
export const registerUserThunk = createAsyncThunk(
  'registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await newUserApi(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// LOGOUT
export const logoutUserThunk = createAsyncThunk(
  'logoutUser',
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().user;
    try {
      await logOutUserApi(token);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// GET USER DATA
export const getUserThunk = createAsyncThunk(
  'getUser',
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().user;
    try {
      const data = await currentUserApi(token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);