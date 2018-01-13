/**
 * @file Exports the request action for use in other actions
 * @author Alex Kasemir
 */

import axiosRequest from 'axios';
import { API_URL } from 'utils';
import Cookies from 'universal-cookie';

const request = (config) => {
  return (dispatch, getState) => {
    const { token } = getState().user.auth;
    const cookies = new Cookies(document.cookie);
    const baseConfig = {
      headers: {
        'Content-Type': `application/json`,
        Authorization: token ? `JWT ${token}` : null,
        'X-CSRFToken': cookies.get(`csrftoken`),
      },
    };

    return axiosRequest({
      ...baseConfig,
      ...config,
      url: config.domainIncluded
        ? config.url
        : `${API_URL}${config.url}`,
      headers: {
        ...baseConfig.headers,
        ...config.headers,
      },
    });
  };
};

export default request;
