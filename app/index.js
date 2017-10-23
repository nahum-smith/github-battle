var React = require('react')
var ReactDom = require('react-dom')
require('./index.css')
var App = require('./components/App')

// Components are concerned with three things:
// 1) State (optional)
// 2) Lifecycle (optional)
// 3) UI (mandatory)

ReactDom.render(
  <App />,
  document.getElementById('app')
)
