
export const API_URL = `http://localhost:8000`;

export const getLocalStorage = (key) => {
  return window.localStorage.getItem(key);
};

export default {
  API_URL,
  getLocalStorage,
};
