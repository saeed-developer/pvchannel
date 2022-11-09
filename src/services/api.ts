import { IAuth } from './../redux/features/auth/authSlice';
import { store } from './../redux/store/store';
import { useMutation } from 'react-query';
import { refresh, TRefresh } from '../services/authSrv';
import axios, { AxiosResponse } from 'axios';
const auth: IAuth = store.getState().auth;
export const api = axios.create({
  baseURL: 'http://185.235.40.10/',
});
api.defaults.headers.common['token'] = auth.token.access;

console.log('tokenد refresh', auth);

api.interceptors.response.use(
  function (response: AxiosResponse<any, any>): void {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('response', response);
    console.log('token refresh', auth);
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401) {
      console.log('token refresh', auth);
      refresh({ refresh: auth.token?.refresh });
      console.log('error in api', error);
      // api.get('/auth/refresh').then((response) => {
      //   console.log('response', response);
      // });
      // api.defaults.headers.common['token'] = auth.token.refresh;
    }

    return Promise.reject(error);
  },
);
