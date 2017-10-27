import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import App from './components/App'

// Components are concerned with three things:
// 1) State (optional)
// 2) Lifecycle (optional)
// 3) UI (mandatory)

ReactDom.render(
  <App />,
  document.getElementById('app')
)
