/* global module */

import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import store from './store';
import App from './components/app/container';

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <AppContainer>
          <React.StrictMode>
            <Component />
          </React.StrictMode>
        </AppContainer>
      </Router>
    </Provider>,
    document.querySelector('#application')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/app/container', () => {
    render(App);
  });
}
