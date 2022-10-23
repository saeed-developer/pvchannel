import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://185.235.40.10/',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
});
