/**
 * index.tsx file
 */
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {App} from './App';
import './index.css';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
