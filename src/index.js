/* global process */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import App from './components/app/container';

const renderApplication = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </Provider>,
    document.querySelector('#application')
  );
};

if (process.env.NODE_ENV !== 'production') {
  import('react-axe').then(({ default: axe }) => {
    axe(React, ReactDOM, 1000);
    renderApplication();
  });
} else {
  renderApplication();
}
