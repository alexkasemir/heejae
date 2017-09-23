/**
 * @file Exports the request action for use in other actions
 * @author Alex Kasemir
 */

import axiosRequest from 'axios';

const request = (config) => {
  return (dispatch, getState) => {
    const { auth } = getState();
    const token = auth ? auth.token : null;
    const baseConfig = {
      headers: {
        'Content-Type': `application/json`,
        Authorization: token ? `JWT ${token}` : null,
      },
    };

    return axiosRequest({
      ...baseConfig,
      ...config,
      headers: {
        ...baseConfig.headers,
        ...config.headers,
      },
    });
  };
};

export default request;
