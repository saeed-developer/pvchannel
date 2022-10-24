import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../../services/api';

interface Auth {
  username: string;
  password: string;
}

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ username, password }: Auth) => {
    // async (data) => {
    const response = await api.post('auth/login', {
      // username: data.username,
      // password: data.password,
      // password,
      username,
      password,
      // username: 'Finn',
      // password: 'Williams',
    });
    if (response.data.access) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    console.log(response.data);
    // console.log(data);
    return response.data;

    // try {
    //   const response = await api.post('auth/login', {
    //     username,
    //     password,
    //     // username: 'Finn',
    //     // password: 'Williams',
    //   });
    //   console.log(response.data);
    //   return response.data;
    // } catch (error) {
    //   console.log(error.response.data);
    // }
  },
);
