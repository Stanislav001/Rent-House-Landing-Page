import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import HouseContextProvider from './context/house-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HouseContextProvider>
      <App />
    </HouseContextProvider>
  </React.StrictMode>,
)
