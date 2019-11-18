import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './utils/rem'
import {BrowserRouter as Router } from 'react-router-dom'
import './assets/style/reset.scss'
import 'animate.css'

ReactDOM.render(
  <Router>
    <App></App>
  </Router>,
  document.querySelector('#root')
);