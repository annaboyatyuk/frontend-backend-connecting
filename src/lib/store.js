import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import coffeeReducer from '../reducer/coffee-reducer.js';
import userReducer from '../reducer/user-reducer.js';

import logger from '../middleware/logger.js';

const appReducer = combineReducers({
  coffeeReducer, userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(appReducer, composeEnhancers(applyMiddleware(thunk, logger,)));

