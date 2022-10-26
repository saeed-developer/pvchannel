import axios from 'axios';
import authHeader from './authHeader';

export const api = axios.create({
  baseURL: 'http://185.235.40.10/',
  headers: authHeader(),
});
