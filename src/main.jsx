// Import necessary libraries and components
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Assuming App component is in the same directory
import './index.css'; // Importing custom styles

// Create a root using ReactDOM.createRoot and render the App component
// within a React StrictMode for additional checks in development mode
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
