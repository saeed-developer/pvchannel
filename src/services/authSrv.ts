import { LOGIN, LOGOUT, REFRESH, REGISTER } from './endpoints';
import { api } from './api';
export type TLogin = {
  username: string;
  password: string;
};
export type TRefresh = {
  refresh: string;
};
export type TRegister = {
  email: string;
  number?: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
};
export type TLogout = {
  token: string;
};

const login = async (body: TLogin) => {
  return await api.post(LOGIN(), body);
};
const refresh = async (body: TRefresh) => {
  return await api.post(REFRESH(), body);
};
const register = async (body: TRegister) => {
  return await api.post(REGISTER(), body);
};
const logout = async (body: TLogout) => {
  return await api.post(LOGOUT(), body);
};

export { login, refresh, register, logout };
