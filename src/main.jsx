import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import './scss/all.scss'
import App from './pages/App0813-weather2.jsx'

createRoot(document.getElementById('root')).render(
  //嚴警模式
  <StrictMode>
    <App />
  </StrictMode>,
)
