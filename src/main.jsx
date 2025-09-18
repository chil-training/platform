import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import './index.css'
import App from './App.jsx'

const routerBaseName = import.meta.env.VITE_BASE_PATH || '';

createRoot(document.getElementById('root')).render(
  <HashRouter basename={routerBaseName}>
    <App />
  </HashRouter>
)
