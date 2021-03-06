import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appReducers from './Reducers'

import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import './index.css';
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : undefined

let store = createStore(
                appReducers,
                persistedState || (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
            )
                // persistedState || window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

store.subscribe( ()=>{ localStorage.setItem('reduxState', JSON.stringify(store.getState())) })

ReactDOM.render(
  <LocaleProvider locale={enUS}>
    <Provider store={store}>
      <App />
    </Provider>
  </LocaleProvider>,
  document.getElementById('root')
);
