
// import 'bootstrap/dist/css/bootstrap.css';
// import styles from '../styles/styles.module.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
 import App from './App';
 import { Provider } from 'react-redux'
 import { createStore } from "redux"
 import ProfileReducer from './reducers/ProfileReducer'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const store = createStore(ProfileReducer)

ReactDOM.render(
  
  <React.StrictMode>
  <Provider store = { store }>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
