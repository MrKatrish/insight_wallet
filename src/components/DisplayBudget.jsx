import React, { useState } from 'react';
import FormButton from '../components/FormButton';

function DisplayBudget() {
  // State variables for expenditure
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  // State variables for income
  const [titleIncome, setTitleIncome] = useState('');
  const [income, setIncome] = useState('');

  // Function to handle submission of expenditure
  const handleSubmit = () => {
    // Create a new budget object with user input
    const newBudget = {
      title: title,
      amount: parseFloat(amount) || 0
    };
  
    // Retrieve current user data from localStorage
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const userData = JSON.parse(localStorage.getItem(currentUser));
      
      // Initialize budgets array if it doesn't exist
      if (!userData.budgets) {
        userData.budgets = [];
      }
      
      // Add the new budget to the budgets array
      userData.budgets.push(newBudget);
      
      // Save the updated user data back to localStorage
      localStorage.setItem(currentUser, JSON.stringify(userData));
    }
  
    // Clear input fields after submission
    setTitle('');
    setAmount('');

    window.location.reload();
  };
  
  // Function to handle submission of income
  const handleSubmitIncome = () => {
    // Create a new income object with user input
    const newIncome = {
      title: titleIncome,
      income: parseFloat(income) || 0
    };
  
    // Retrieve current user data from localStorage
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const userData = JSON.parse(localStorage.getItem(currentUser));
      
      // Initialize incomes array if it doesn't exist
      if (!userData.incomes) {
        userData.incomes = [];
      }
      
      // Add the new income to the incomes array
      userData.incomes.push(newIncome);
      
      // Save the updated user data back to localStorage
      localStorage.setItem(currentUser, JSON.stringify(userData));
    }
  
    // Clear input fields after submission
    setTitleIncome('');
    setIncome('');
    window.location.reload();
  };
  

  return (
    <>
      <div className='flex flex-col items-center mt-8'>
        {/* Input fields for expenditure */}
        <input
          type='text'
          placeholder='Expenditure Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='text-md leading-10 px-5 py-1 my-1 border-0 ring-1 ring-inset ring-gray-300 bg-white rounded-3xl text-left sm:mr-2 sm:w-64 max-w-full'
        />
        <input
          type='number'
          placeholder='Expenditure Amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className='text-md leading-10 px-5 py-1 my-1 border-0 ring-1 ring-inset ring-gray-300 bg-white rounded-3xl text-left sm:mr-2 sm:w-64 max-w-full4'
        />
        {/* Button to add expenditure */}
        <FormButton onClick={() => handleSubmit('budget')} title='Add Expenditure' />
        
        {/* Input fields for income */}
        <input
          type='text'
          placeholder='Income Title'
          value={titleIncome}
          onChange={(e) => setTitleIncome(e.target.value)}
          className='text-md leading-10 px-5 py-1 my-1 border-0 ring-1 ring-inset ring-gray-300 bg-white rounded-3xl text-left sm:mr-2 sm:w-64 max-w-full'
        />
        <input
          type='number'
          placeholder='Income Amount'
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className='text-md leading-10 px-5 py-1 my-1 border-0 ring-1 ring-inset ring-gray-300 bg-white rounded-3xl text-left sm:mr-2 sm:w-64 max-w-full'
        />
        {/* Button to add income */}
        <FormButton onClick={() => handleSubmitIncome('income')} title='Add Income' />
      </div>
    </>
  );
}

export default DisplayBudget;
