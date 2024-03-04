import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormButton from '../components/FormButton';
import FormTitle from '../components/FormTitle';
import SignUpInput from '../components/SignUpInput';

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

    const userData = JSON.parse(localStorage.getItem(username));

    if (userData && userData.password === password) {
      localStorage.setItem('currentUser', username);
      navigate('/dashboard');
    } else {
      alert("Incorrect username or password");
    }
  };

  // Function to handle sign up
  const handleSignUp = (e) => {
    e.preventDefault();
    const account = { username: newUsername, password: newPassword, email: newEmail, incomes: [], budgets: [], savingsGoals: [] };
    localStorage.setItem(newUsername, JSON.stringify(account));
    localStorage.setItem('currentUser', newUsername);
    navigate('/income');
  };

  return (
    <>
      <FormTitle title='Insight Wallet' />
      <p className='italic text-gray-400 mb-8 mx-48 text-lg'>Gain a deeper understanding of your financial landscape with Insight Wallet, a powerful and intuitive finance app designed to empower you on your journey to financial well-being.</p>
      <div className="block max-w-sm mx-auto text-center">
        {/* Login Form */}
        <form onSubmit={handleLogin}>
          {/* Username Input */}
          <input
            className={`rounded-3xl border-0 w-full my-2 py-3 pl-7 pr-20 ring-1 ring-inset ${error.username ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400`}
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
            className={`rounded-3xl border-0 w-full my-2 py-3 pl-7 pr-20 ring-1 ring-inset ${error.password ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400`}
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
          <SignUpInput id='newUsername' type='text' placeholder='New Username' value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
          <SignUpInput id='newPassword' type='password' placeholder='New Password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          <SignUpInput id='newEmail' type='email' placeholder='Your Email Address' value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
          <FormButton title='Sign Up' />
        </form>
      </div>
    </>
  );
}

export default Home;
