import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StateSnapshot from './components/StateSnapshot.jsx'
// import StateOverTime from './components/StateOverTime.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <StateSnapshot></StateSnapshot>
    {/* <StateOverTime></StateOverTime> */}
  </StrictMode>,
)
