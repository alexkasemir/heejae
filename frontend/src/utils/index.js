
export const API_URL = process.env.NODE_ENV === `production`
  ? `heejae.cogolo.net/api`
  : `http://localhost:8000`;

export const getLocalStorage = (key) => {
  return window.localStorage.getItem(key);
};

export default {
  API_URL,
  getLocalStorage,
};
