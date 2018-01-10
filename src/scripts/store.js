import {createStore, applyMiddleware, compose} from 'redux';
import {combineReducers} from 'redux-immutable';
import thunk from 'redux-thunk';
import characters from './reducers/characters';
import powers from './reducers/powers';
import user from './reducers/user';

const isProduction = (process.env.NODE_ENV === 'production');

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWare = applyMiddleware(thunk);

const storeEnhancer = (isProduction) ? middleWare : composeEnhancers(middleWare);

const rootReducer = combineReducers({
  characters,
  powers,
  user
});

export default createStore(rootReducer, storeEnhancer);
