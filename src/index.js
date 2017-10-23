import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const StoreInstance = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);


registerServiceWorker();
