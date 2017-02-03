import {createStore} from 'redux';
import mainReducer from './reducers';

const isProduction = process.env.NODE_ENV;
let store;

if (isProduction) {
  store = createStore(mainReducer);
} else {
  store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default store;
