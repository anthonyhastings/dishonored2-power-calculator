import {createStore} from 'redux';
import {combineReducers} from 'redux-immutable';
import {userReducer as user, powersReducer as powers} from './reducers';

let store;
const isProduction = process.env.NODE_ENV;
const rootReducer = combineReducers({
  user,
  powers
});

if (isProduction) {
  store = createStore(rootReducer);
} else {
  store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default store;
