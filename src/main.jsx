import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const myName = "Vu"
const myAge = "13"
const myStatus = true
const person = {
  name : "Le Vu",
  age : 14,
  address : "Tuyen Quang"
}

ReactDOM.render(<App/>,
  document.getElementById('root')
)
