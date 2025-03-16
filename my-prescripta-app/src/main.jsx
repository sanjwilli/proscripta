import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootElement = document.createElement('div');
rootElement.style.padding = '0';
rootElement.style.margin = '0';
rootElement.style.width = '100%';
rootElement.style.height = '100vh';
document.body.appendChild(rootElement);

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
