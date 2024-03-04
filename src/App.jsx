import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Income from './pages/Income';
import Budget from './pages/Budget';
import Dashboard from './pages/Dashboard';
import SavingsGoals from './pages/Savings-goals';
import './App.css';

function App() {
  const [userData, setUserData] = useState({});

  const updateUserData = (newData) => {
    setUserData({ ...userData, ...newData });
  };

  return (
    <Router>
      {/* <div className="App min-h-screen flex flex-col"> */}
        {/* <header className="bg-blue-500 text-white py-4 px-8 ">
          <h1 className="text-xl font-bold">Budget App</h1>
        </header> */}
        {/* <div className="container mx-auto flex-grow py-8"> */}
          <Routes> 
            <Route path="/" element={<Home />} /> 
            <Route path="/income" element={<Income updateUserData={updateUserData} />} /> 
            <Route path="/budget" element={<Budget updateUserData={updateUserData}/>} /> 
            <Route path="/Savings-goals" element={<SavingsGoals updateUserData={updateUserData}/>} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes> 
        {/* </div> */}
        {/* <footer className="bg-blue-500 text-white py-4 px-8">
          <p className="text-sm">&copy; 2024 Budget App</p>
        </footer> */}
      {/* </div> */}
    </Router>
  );
}

export default App;
