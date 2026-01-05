import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// IMPORTA TU PROVIDER
import { GameProvider } from './context/GameContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* ENVUELVE LA APP AQUÍ 👇 */}
    <GameProvider>
      <App />
    </GameProvider>

  </React.StrictMode>,
)