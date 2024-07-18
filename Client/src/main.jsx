import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SvgProvider from './context/SvgContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <SvgProvider>
    <App />
  </SvgProvider>
  // </React.StrictMode>,
)
