import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://185.235.40.10/auth',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
  }),

  endpoints: (builder) => {
    builder.mutation<types>({
      query(data) {
        const { username, password } = data;
        return {
          url: '/login',
          method: 'POST',
          body: { username, password },
        };
      },
    });
  },
});

export const { useLoginUserQuery } = authApi;
