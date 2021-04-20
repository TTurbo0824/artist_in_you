import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import { colors } from './components/utils/_var'
// import { createGlobalStyle } from 'styled-components'

import registerServiceWorker from './registerServiceWorker'

// global styles
// const GlobalStyle = createGlobalStyle`
//   body {
//     color: #fff;
//   }
// `

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()