import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Context - Provider
import { Provider_Themes } from './context/ThemesContext.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider_Themes>
    <App />
    </Provider_Themes>
  </StrictMode>,
)
