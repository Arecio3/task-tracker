import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Contains root app component
import App from './App';
import reportWebVitals from './reportWebVitals';
// render method grabbing the div with the id root and inserting our app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
