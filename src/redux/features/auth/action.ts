import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../../services/api';

interface Auth {
  username: string;
  password: string;
}

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ username, password }: Auth) => {
    const response = await api.post('auth/login', {
      username,
      password,
      // username: 'Finn',
      // password: 'Williams',
    });
    // if (response.data.access) {
    //   localStorage.setItem('user', JSON.stringify(response.data));
    // }

    console.log('data', response.data);

    return response.data;
  },
);

// export const userLogout = createAsyncThunk(
//   'auth/login',
//   async () => {
//     localStorage.removeItem("user");
//   },
// );
