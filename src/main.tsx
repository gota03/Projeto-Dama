import './index.css'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { AdminProvider } from './components/Admin/AdminContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <AdminProvider>
      <App />
    </AdminProvider>
)
