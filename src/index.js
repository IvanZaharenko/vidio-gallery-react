import React from 'react'
import ReactDOM  from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom'

import './assest/style/_normalaze.css'
import App from "./components/app/App";
import GalleryService from "./servises/videoApi-servis"

import store from './store'

const galleryService = new GalleryService;

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
              <Router>
                  <App />
              </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
