import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormButton from '../components/FormButton';

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
    <>
      <h1 className="text-3xl font-bold mb-8">Insight Wallet</h1>
      <div className="block max-w-sm">
        {/* Login Form */}
          <form onSubmit={handleLogin}>
              {/* Username Input */}
              <input
                className={`rounded-3xl border-0 w-full my-2 py-3 pl-7 pr-20 ring-1 ring-inset ${error.username ? 'ring-red-500' : 'ring-gray-300'} placehoder:text-gray-400`}
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {/* Error Message for Username */}
              {error.username && <p className="text-red-500 text-xs italic">Please enter your username.</p>}
              {/* Password Input */}
              <input
                className={`rounded-3xl border-0 w-full my-2 py-3 pl-7 pr-20 ring-1 ring-inset ${error.password ? 'ring-red-500' : 'ring-gray-300'} placehoder:text-gray-400`}
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* Error Message for Password */}
              {error.password && <p className="text-red-500 text-xs italic">Please enter your password.</p>}
            {/* Login Button */}
            <FormButton title='Login' />
          </form>
        {/* Sign Up Form */}
          <form onSubmit={handleSignUp}>
              {/* New Username Input */}
              <input
                className="rounded-3xl border-0 w-full my-2 py-3 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placehoder:text-gray-400"
                id="newUsername"
                type="text"
                placeholder="New Username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
              {/* New Password Input */}
              <input
                className="rounded-3xl border-0 w-full my-2 py-3 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placehoder:text-gray-400"
                id="newPassword"
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              {/* Email Input */}
              <input
                className="rounded-3xl border-0 w-full my-2 py-3 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placehoder:text-gray-400"
                id="newEmail"
                type="email" 
                placeholder="Your Email Address"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            {/* Sign Up Button */}
            <FormButton title='Sign Up' />
          </form>
        </div>
    </>
  );
}

export default Home;
