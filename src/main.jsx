import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

app.use(express.static('public', {
  setHeaders: (res, path) => {
    if (path.endsWith('.jsx')) {
      res.type('text/javascript');
    }
  }
}));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
