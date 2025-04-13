import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import "./assets/css/common.css"
import "./assets/css/reset.css"
const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
