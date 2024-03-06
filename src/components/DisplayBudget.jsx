import React, { useState } from 'react';
import FormButton from '../components/FormButton';

function DisplayBudget() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    const newBudget = {
      title: title,
      amount: parseFloat(amount) || 0
    };

    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const userData = JSON.parse(localStorage.getItem(currentUser));
      if (!userData.budgets) {
        userData.budgets = [];
      }
      userData.budgets.push(newBudget);
      localStorage.setItem(currentUser, JSON.stringify(userData));
    }
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
        <FormButton onClick={handleSubmit} title='Add Budget' />
      </div>
    </>
  );
}

export default DisplayBudget;
