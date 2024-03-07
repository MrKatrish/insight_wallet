import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Income from './pages/Income';
import Budget from './pages/Budget';
import Dashboard from './pages/Dashboard';
import SavingsGoals from './pages/SavingsGoals';
import './App.css';

function App() {
  // State to manage user data
  const [userData, setUserData] = useState({});

  // Function to update user data
  const updateUserData = (newData) => {
    setUserData({ ...userData, ...newData });
  };

  return (
    <Router>
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />

        {/* Route for the income page */}
        <Route path="/income" element={<Income updateUserData={updateUserData} />} />

        {/* Route for the budget page */}
        <Route path="/budget" element={<Budget userData={userData} />} />

        {/* Route for the savings goals page */}
        <Route path="/savingsgoals" element={<SavingsGoals />} />

        {/* Route for the dashboard page */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
