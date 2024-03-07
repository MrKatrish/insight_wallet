import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Income from './pages/Income';
import Budget from './pages/Budget';
import Dashboard from './pages/Dashboard';
import SavingsGoals from './pages/SavingsGoals';
import './App.css';

function App() {
  const [userData, setUserData] = useState({});

  const updateUserData = (newData) => {
    setUserData({ ...userData, ...newData });
  };

  return (
    <Router>
          <Routes> 
            <Route path="/" element={<Home />} /> 
            <Route path="/income" element={<Income updateUserData={updateUserData} />} /> 
            <Route path="/budget" element={<Budget userData={userData} />} /> 
            <Route path="/savingsgoals" element={<SavingsGoals />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes> 
    </Router>
  );
}

export default App;
