import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Nutshell from './components/Nutshell'
// import EventManager from "./modules/EventManager"
import './index.css'






ReactDOM.render(
  <Router>
    <Nutshell />
  </Router>
  , document.getElementById('root'))
