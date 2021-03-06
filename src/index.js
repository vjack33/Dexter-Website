import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './scss/custom.css'
import App from './App';
import HomePage from "./components/Pages/HomePage";

import reportWebVitals from './reportWebVitals';
import PortfolioHomePage from "./components/Pages/PortfolioHomePage";

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
      <PortfolioHomePage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
