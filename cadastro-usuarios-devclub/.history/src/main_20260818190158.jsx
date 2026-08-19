import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from '../src/Pages/Home/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>,
    <Home />
  </React.StrictMode>,
)
