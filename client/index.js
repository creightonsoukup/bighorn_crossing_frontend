import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, applyRouterMiddleware } from 'react-router-dom';
import { render } from 'react-dom';
import ScrollToTop from './components/ScrollToTop';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
require("file-loader?name=style.css!./style/style.css");

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

render((
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>
  ), document.getElementById('root'));
