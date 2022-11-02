import { IAuth } from './../redux/features/auth/authSlice';
import { store } from './../redux/store/store';
import axios from 'axios';
const auth: IAuth = store.getState().auth;
export const api = axios.create({
  baseURL: 'http://185.235.40.10/',
});
api.defaults.headers.common['token'] = auth.token.access;
