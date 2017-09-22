import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';


export const history = createHistory();

const rootReducer = combineReducers({
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
