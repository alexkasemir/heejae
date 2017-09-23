/**
 * loadToken.js
 * Written by: Alex Kasemir
 */

/**
 * loadToken.js
 * Written by: Alex Kasemir
 */

import { getLocalStorage } from 'utils';

import { checkExpiredToken } from 'store/user/actions/checkExpiredToken';

/**
 * Description of the loadToken action
 */
export const loadToken = (jwt) => {
  return (dispatch) => {
    const jwtToken = jwt || getLocalStorage(`jwtToken`);

    return new Promise((resolve, reject) => {
      if (jwtToken) {
        dispatch(checkExpiredToken(jwtToken))
          .then(() => {
            resolve();
          })
          .catch(() => {
            reject();
          });
      } else {
        reject();
      }
    });
  };
};

export default loadToken;
