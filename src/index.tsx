import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './pages/App/App';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';
import { Auth } from '@aws-amplify/auth'
import config from './aws-exports';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { reducers } from './stores/reducers'
import { loggers } from './stores/middlewares'
const stores = createStore(reducers, applyMiddleware(loggers))
Amplify.configure(config)
Auth.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={stores}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
