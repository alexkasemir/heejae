import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import makePantheonCore from 'pantheon-client/lib/models/core';


export const history = createHistory();

const rootReducer = combineReducers({
  _pantheon: makePantheonCore({
    apiUrl: `http://localhost:8000`,
  }),
});

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const logger = require(`redux-logger`).createLogger({ // eslint-disable-line
    collapsed: true,
  });

  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
);

export default store;
