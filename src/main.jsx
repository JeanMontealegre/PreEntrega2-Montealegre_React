import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

const root = document.getElementById("root") //<div id="root"></div>
const vRoot = ReactDOM.createRoot(root)

vRoot.render(
  <App />
)