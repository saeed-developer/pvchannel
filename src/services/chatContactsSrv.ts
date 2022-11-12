import { ADDCONTACTS, ALLCONTACTS } from './endpoints';
import { api } from './api';

// export type TLogin = {
//   username: string;
//   password: string;
// };

export type TAddContact = {
  id: number;
};
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
// const addContacts = async () => {
//   return await api.post(ADDCONTACTS());
// };
const addContacts = async (body: TAddContact, token: any) => {
  return await api.post(ADDCONTACTS(), body);
};
// const refresh = async (body: TRefresh) => {
//   return await api.post(REFRESH(), body);
// };
// const register = async (body: TRegister) => {
//   return await api.post(REGISTER(), body);
// };

export { allContacts, addContacts };
