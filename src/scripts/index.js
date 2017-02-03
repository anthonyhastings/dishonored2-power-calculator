import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './flux/store';
import App from './containers/app';

console.info('Node Env:', process.env.NODE_ENV);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.querySelector('#application'));
