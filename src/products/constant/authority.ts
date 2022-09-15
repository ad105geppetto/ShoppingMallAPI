const admin = 1;
const user = 2;

export const isAdmin = (authority: number): boolean => {
  return authority === admin;
};

export const isUser = (authority: number): boolean => {
  return authority === user;
};