import { store } from './../redux/store/store';
import { refresh, refresh, TRefresh } from '../services/authSrv';
import { addContacts } from '../services/chatContactsSrv';
import { resetAuth, setAuth } from '../redux/features/auth/authSlice';
import axios, { AxiosResponse } from 'axios';
import { refresh } from './authSrv';
export const api = axios.create({
  baseURL: 'http://157.90.38.118/',
});

store.subscribe(() => {
  const token = store.getState().auth.token?.access as string;
  if (token) {
    api.defaults.headers.common['token'] = token;
  }
});
api.interceptors.response.use(
  function (response: AxiosResponse<any, any>): AxiosResponse<any, any> {
    return response;
  },
  async function (error) {
    const config = error.config;
    if (error.response.status === 401) {
      const token = store.getState().auth.token?.refresh as string;
      const newToken = await refresh({ refresh: token });
      store.dispatch(setAuth({ isLogin: true, token: newToken.data }));
      config.headers = {
        ...config.headers,
        token: `${newToken.data.access}`,
      };
      return api(config);
    } else if (error.response.status === 406) {
      store.dispatch(resetAuth());
    }

    return Promise.reject(error);
  },
);
