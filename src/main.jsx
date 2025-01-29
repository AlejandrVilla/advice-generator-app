import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import RouterConfig from './RouterConfig.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterConfig />
  </StrictMode>,
)
