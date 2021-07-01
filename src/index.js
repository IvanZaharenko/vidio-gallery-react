import React from 'react'
import ReactDOM  from 'react-dom';
import './_normalaze.css'

import Header from './components/header/Header';
import MainBody from './components/mainBody/MainBody'

const App = () => {
  return ( <>
          <Header/>
          <MainBody/>
      </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);