import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import './scss/all.scss'
import App from './MyApp.jsx'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  //嚴警模式
  <StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
  </StrictMode>,
)
