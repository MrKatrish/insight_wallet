import React, { useState } from 'react';
import FormButton from './FormButton';

function DisplayBudget() {
  const [userData, setUserData] = useState(loadUserData());
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  function loadUserData() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      
    }
    const rawUserData = localStorage.getItem(currentUser);
    if (!rawUserData) {

    }
    const userData = JSON.parse(rawUserData);
    return userData;
  }

  const handleSubmit = () => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const userData = JSON.parse(localStorage.getItem(currentUser));
      userData.budgets = budgets;
      localStorage.setItem(currentUser, JSON.stringify(userData));
    }
  };

  const handleAddBudgets = () => {
    setCounter(prevCounter => prevCounter + 1);
    setBudgets(previous => [...previous, { id: counter, title: '', amount: 0 }]);
  };

  return (
    <>
      <div className='flex flex-col items-center mt-8'>
        <input
          type='text'
          placeholder='Budget Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border-2 border-gray-300 rounded-md p-2 mb-4'
        />
        <input
          type='number'
          placeholder='Budget Amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className='border-2 border-gray-300 rounded-md p-2'
        />
      </div>
      <div className='flex justify-center mt-8'>
        <FormButton onClick={handleAddBudgets} title='Add new budget item' />
        <FormButton onClick={handleSubmit} title='Save' />
      </div>
    </>
  );
}

export default DisplayBudget;