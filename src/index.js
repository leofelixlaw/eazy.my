import React from "react";
import { render } from "react-dom";
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './assets/scss/main.scss';
 
render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
