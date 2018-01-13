import moment from 'moment';


export const API_URL = process.env.NODE_ENV === `production`
  ? `https://heejae.herokuapp.com/api`
  : `http://localhost:8000/api`;

export const getLocalStorage = (key) => {
  return window.localStorage.getItem(key);
};

export const makeNiceTime = (date) => {
  return moment(date).format('lll');
};

export const getDuration = (start, end) => {
  const a = moment(start);
  const b = moment(end);
  return b.diff(a, 'minutes');
};

export default {
  API_URL,
  getLocalStorage,
};
