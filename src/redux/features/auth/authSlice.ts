import { createSlice } from '@reduxjs/toolkit';
import { userLogin } from './action';

export interface AuthError {
  message: string;
}

// initialize userToken from local storage
// const userToken = localStorage.getItem('userToken')
//   ? localStorage.getItem('userToken')
//   : null;

export interface AuthState {
  isAuth: boolean;
  user: string;
  currentUser?: CurrentUser;
  isLoading: boolean;
  error: boolean;
}

export interface CurrentUser {
  username: string;
  password: string;
}

export const initialState: AuthState = {
  isAuth: false,
  user: '',
  isLoading: false,
  error: false,
  // error: { message: 'An Error occurred' },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userLogin.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = false;
        state.user = payload;
      });
  },
});

export default authSlice.reducer;
