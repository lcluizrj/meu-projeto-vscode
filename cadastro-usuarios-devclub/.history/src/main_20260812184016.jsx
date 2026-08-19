import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { globalstyles } from './styles/globalstyles.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <reaStrictMode>
    <globalstyles/>,
    <App />
  </reaStrictMode>,
)
