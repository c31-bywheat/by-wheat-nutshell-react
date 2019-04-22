import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Nutshell from './components/Nutshell'
import './index.css'
import MessageManager from "./modules/MessageManager.js"

MessageManager.deleteMessage(2)
console.log(MessageManager.getAll())

ReactDOM.render(
  <Router>
    <Nutshell />
  </Router>
  , document.getElementById('root'))
