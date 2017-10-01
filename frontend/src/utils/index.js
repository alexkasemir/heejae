
export const API_URL = process.env.NODE_ENV === `production`
  ? `https://heejae.herokuapp.com/api`
  : `http://localhost:8000/api`;

export const getLocalStorage = (key) => {
  return window.localStorage.getItem(key);
};

export default {
  API_URL,
  getLocalStorage,
};
