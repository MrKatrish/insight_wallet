import React, { useState } from 'react';
import FormButton from '../components/FormButton';

function DisplayBudget() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [titleIncome, setTitleIncome] = useState('');
  const [income, setIncome] = useState('');

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
  

  const handleSubmitIncome = () => {
    const newIncome = {
      title: titleIncome,
      income: parseFloat(income) || 0
    };
  
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const userData = JSON.parse(localStorage.getItem(currentUser));
      if (!userData.incomes) {
        userData.incomes = []; 
      }
      userData.incomes.push(newIncome); 
      localStorage.setItem(currentUser, JSON.stringify(userData)); 
    }
  };

  return (
    <>
      <div className='flex flex-col items-center mt-8'>
        <input
          type='text'
          placeholder='Expenditure Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border-2 border-gray-300 rounded-md p-2 mb-4'
        />
        <input
          type='number'
          placeholder='Expenditure Amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className='border-2 border-gray-300 rounded-md p-2 mb-4'
        />
        <FormButton onClick={() => handleSubmit('budget')} title='Add Expenditure' />
        <input
          type='text'
          placeholder='Income Title'
          value={titleIncome}
          onChange={(e) => setTitleIncome(e.target.value)}
          className='border-2 border-gray-300 rounded-md p-2 mb-4'
        />
        <input
          type='number'
          placeholder='Income Amount'
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className='border-2 border-gray-300 rounded-md p-2 mb-4'
        />
        <FormButton onClick={() => handleSubmitIncome('income')} title='Add Income' />
      </div>
    </>
  );
}

export default DisplayBudget;