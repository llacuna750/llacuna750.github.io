import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProjectPage from './components/ProjectPage.jsx'
import './index.css'
import './components/portfolio.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProjectPage />
  </StrictMode>,
)
