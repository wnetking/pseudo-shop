import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import './styles/index.css';
import App from './containers/App';
import registerServiceWorker from './utils/registerServiceWorker';

//store
import configureStore from './store'
const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
