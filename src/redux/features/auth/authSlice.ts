import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export type TToken = {
  access: string | null;
  refresh: string | null;
};
export interface IAuth {
  isLogin: boolean;
  token: TToken;
}
const initialState = {
  isLogin: false,
  token: {
    access: null,
    refresh: null,
  },
} as IAuth;

const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
    setToken(state, action: PayloadAction<TToken>) {
      state.token = action.payload;
    },
    setAuth(state, action: PayloadAction<IAuth>) {
      return { ...state, ...action.payload };
    },
    resetAuth: () => initialState,
  },
});

export const { setLogin, setToken, resetAuth, setAuth } = counterSlice.actions;
export default counterSlice.reducer;
