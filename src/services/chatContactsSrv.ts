import { ADDCONTACT, ALLCONTACTS, DELETECONTACT } from './endpoints';
import { api } from './api';

// export type TLogin = {
//   username: string;
//   password: string;
// };

export type TIdContact = {
  id: number | undefined;
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
const addContact = async (body: TIdContact) => {
  return await api.post(ADDCONTACT(), body);
};

const deleteContact = async (body: TIdContact) => {
  return await api.post(DELETECONTACT(), body);
};
// const refresh = async (body: TRefresh) => {
//   return await api.post(REFRESH(), body);
// };
// const register = async (body: TRegister) => {
//   return await api.post(REGISTER(), body);
// };

export { allContacts, addContact, deleteContact };
