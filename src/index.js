import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import configureStore from './store/configureStore'

const store = configureStore()
console.log('initial redux value', store.getState()) 

store.subscribe(() => {
    console.log('updated redux value', store.getState())
})

const jsx = (
  <Provider store = {store}>
      <App />
  </Provider>
)

ReactDOM.render(jsx,document.getElementById('root'))
