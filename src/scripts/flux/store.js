import {createStore, applyMiddleware, compose} from 'redux';
import {combineReducers} from 'redux-immutable';
import thunk from 'redux-thunk';
import {
  charactersReducer as characters,
  powersReducer as powers,
  userReducer as user
} from './reducers';

let store;
const isProduction = process.env.NODE_ENV;
const rootReducer = combineReducers({
  characters,
  powers,
  user
});

if (isProduction) {
  store = createStore(rootReducer, applyMiddleware(thunk));
} else {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}

export default store;
