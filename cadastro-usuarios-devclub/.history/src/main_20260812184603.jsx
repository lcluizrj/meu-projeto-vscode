import React from 'react'
import ReactDOM from 'react-dom/client'
import {globalstyles} from './styles/GlobalStyles.js'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <globalstyles/>,
    <App />
  </React.StrictMode>,
)
