import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Employees from './pages/Employees'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/employees-list" element={<Employees />} />
      </Routes>
    </Router>
  )
}

export default App
