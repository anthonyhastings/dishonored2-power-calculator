import {createStore} from 'redux';
import {combineReducers} from 'redux-immutable';
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
  store = createStore(rootReducer);
} else {
  store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default store;
