import { IAuth } from './../redux/features/auth/authSlice';
import { store } from './../redux/store/store';
import { refresh, TRefresh, refresh } from '../services/authSrv';
import { addContacts } from '../services/chatContactsSrv';
import { setAuth, resetAuth } from '../redux/features/auth/authSlice';
import axios, { AxiosResponse } from 'axios';
const auth: IAuth = store.getState().auth;
export const api = axios.create({
  baseURL: 'http://185.235.40.10/',
});
api.defaults.headers.common['token'] = auth.token.access;

// console.log('store dispatch',store.dispatch);

// console.log('tokenد refresh', auth);
// const dispatch = useDispatch();
api.interceptors.response.use(
  function (response: AxiosResponse<any, any>): void {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log('response', response);
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401) {
      const token = store.getState().auth.token?.refresh as string;
      // console.log('token refresh', auth);
      refresh({ refresh: token }).then((newToken) => {
        // dispatch(setAuth({ isLogin: true, token: newToken.data }));
        store.dispatch(setAuth({ isLogin: true, token: newToken.data }));
        const config = error.config;
        // console.log('token config', config.headers.token);
        config.headers.token = newToken.data.access;
        // console.log('token config2', config.headers.token);
        // console.log('token newToken', newToken.data);
        api.request(config);
      });

      // try {
      //   const token = store.getState().auth.token?.refresh as string;
      //   const rs = refresh({ refresh: token });

      //   const { accessToken } = rs.access;
      //   console.log('accessToken',accessToken);
      //   // dispatch(refreshToken(accessToken));
      //   // TokenService.updateLocalAccessToken(accessToken);

      //   // return axiosInstance(originalConfig);
      // } catch (_error) {
      //   return Promise.reject(_error);
      // }

      // const tt = await

      // //
      // const fetchData = async () => {
      //   const response = await fetch('https://restcountries.com/v3.1/all')
      //   if (!response.ok) {
      //     throw new Error('Data coud not be fetched!')
      //   } else {
      //     return response.json()
      //   }
      // }

      //

      // console.log('error in api', error);
      // api.get('/auth/refresh').then((response) => {
      //   console.log('response', response);
      // });
      // api.defaults.headers.common['token'] = auth.token.refresh;
    }

    if (error.response.status === 406) {
      store.dispatch(resetAuth());
    }

    return Promise.reject(error);
  },
);
