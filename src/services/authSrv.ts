import { LOGIN, REFRESH } from './endpoints';
import { api } from './api';
export type TLogin = {
  username: string;
  password: string;
};
export type TRefresh = {
  refreshToken: string;
};
const login = async (body: TLogin) => {
  return await api.post(LOGIN(), body);
};
const refresh = async (body: TRefresh) => {
  return await api.post(REFRESH(), body);
};

export { login, refresh };
