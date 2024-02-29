import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const [error, setError] = useState({ username: false, password: false });

  // Function to handle login
  const handleLogin = (e) => {
    e.preventDefault();
    let hasError = false;
  
    if (!username.trim()) {
      setError(prev => ({ ...prev, username: true }));
      hasError = true;
    } else {
      setError(prev => ({ ...prev, username: false }));
    }
  
    if (!password.trim()) {
      setError(prev => ({ ...prev, password: true }));
      hasError = true;
    } else {
      setError(prev => ({ ...prev, password: false }));
    }
  
    if (hasError) return;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      navigate('/dashboard');
    } else {
      alert("Incorrect username or password");
    }
  };

  // Function to handle sign up
  const handleSignUp = (e) => {
    e.preventDefault();

    const account = { username: newUsername, password: newPassword, email: newEmail };
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);
    localStorage.setItem('email', newEmail);
    localStorage.setItem('account', JSON.stringify(account));

    navigate('/income');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Insight Wallet</h1>
      <div className="flex space-x-4">
        {/* Login Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                Username
              </label>
              {/* Username Input */}
              <input
                className={`appearance-none border ${error.username ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {/* Error Message for Username */}
              {error.username && <p className="text-red-500 text-xs italic">Please enter your username.</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Password
              </label>
              {/* Password Input */}
              <input
                className={`appearance-none border ${error.password ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* Error Message for Password */}
              {error.password && <p className="text-red-500 text-xs italic">Please enter your password.</p>}
            </div>
            {/* Login Button */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
        {/* Sign Up Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="newUsername">
                New Username
              </label>
              {/* New Username Input */}
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="newUsername"
                type="text"
                placeholder="New Username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="newPassword">
                New Password
              </label>
              {/* New Password Input */}
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="newPassword"
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="newEmail">
                Your Email
              </label>
              {/* Email Input */}
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="newEmail"
                type="email" 
                placeholder="Your Email Address"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>
            {/* Sign Up Button */}
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
