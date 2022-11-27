// Auth
export const LOGIN = (): string => {
  return 'auth/login';
};
export const REFRESH = (): string => {
  return 'auth/refresh';
};
export const REGISTER = (): string => {
  return 'auth/signup';
};
export const LOGOUT = (): string => {
  return 'auth/logout';
};

// chat contacts
export const ALLCONTACTS = (): string => {
  return 'chat/contacts/all';
};

export const ADDCONTACT = (): string => {
  return 'chat/contacts/add';
};

export const DELETECONTACT = (): string => {
  return 'chat/contacts/delete';
};
