import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {AppContainer} from 'react-hot-loader';
import store from './flux/store';
import App from './components/app';

const render = (Component) => {
  ReactDOM.render((
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer>
          <Component />
        </AppContainer>
      </BrowserRouter>
    </Provider>
  ), document.querySelector('#application'));
};

render(App);

if (module.hot) {
  module.hot.accept('./components/app', () => {
    render(App);
  });
}
