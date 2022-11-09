import { ALLCONTACTS } from './endpoints';
import { api } from './api';
// export type TLogin = {
//   username: string;
//   password: string;
// };
// export type TRefresh = {
//   refresh: string;
// };
// export type TRegister = {
//   email: string;
//   number?: string;
//   username: string;
//   password: string;
//   firstName: string;
//   lastName: string;
// };
const allContacts = async () => {
  return await api.get(ALLCONTACTS());
};
// const refresh = async (body: TRefresh) => {
//   return await api.post(REFRESH(), body);
// };
// const register = async (body: TRegister) => {
//   return await api.post(REGISTER(), body);
// };

export { allContacts };
