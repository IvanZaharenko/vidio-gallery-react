import React from 'react'
import ReactDOM  from 'react-dom';
import {Provider} from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom'

import './assest/style/_normalaze.css'
import App from "./components/app/App";
import store from "./store/index"




ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
              <Router>
                  <App
                  />
              </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
