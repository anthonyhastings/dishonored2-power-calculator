/* global process */

import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';
import characters from 'Reducers/characters';
import powers from 'Reducers/powers';
import user from 'Reducers/user';

export const middleware = [thunk];

const appliedMiddleware = applyMiddleware(...middleware);

const isProduction = process.env.NODE_ENV === 'production';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeEnhancer = isProduction
  ? appliedMiddleware
  : composeEnhancers(appliedMiddleware);

const rootReducer = combineReducers({
  characters,
  powers,
  user,
});

export default createStore(rootReducer, storeEnhancer);
