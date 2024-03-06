import React, { useState, useEffect } from 'react';
import FormButton from './FormButton';
import UserInput from '../components/UserInput';

function DisplayBudget() {
  const [userData, setUserData] = useState(loadUserData());
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setUserData(loadUserData());
  }, []); // Update userData on component mount

  function loadUserData() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      return null;
    }
    const rawUserData = localStorage.getItem(currentUser);
    if (!rawUserData) {
      return null;
    }
    const userData = JSON.parse(rawUserData);
    return userData;
  }

  const handleSubmit = () => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const updatedUserData = {
        ...userData,
        budgets: userData.budgets.map((budget) =>
          budget.id === counter
            ? { ...budget, title, amount: parseFloat(amount) || 0 }
            : budget
        ),
      };
      localStorage.setItem(currentUser, JSON.stringify(updatedUserData));
      setUserData(updatedUserData);
    }
  };

  const handleBudgetChange = (id, e) => {
    const value = e.target.value;
    setUserData((prevUserData) => ({
      ...prevUserData,
      budgets: prevUserData.budgets.map((budget) =>
        budget.id === id ? { ...budget, amount: parseFloat(value) || 0 } : budget
      ),
    }));
  };

  const handleAddBudgets = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setUserData((prevUserData) => ({
      ...prevUserData,
      budgets: [
        ...prevUserData.budgets,
        { id: counter, title: '', amount: 0 },
      ],
    }));
  };

  const handleBudgetTitleChange = (id, newTitle) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      budgets: prevUserData.budgets.map((budget) =>
        budget.id === id ? { ...budget, title: newTitle } : budget
      ),
    }));
  };

  const handleDelete = (id) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      budgets: prevUserData.budgets.filter((budget) => budget.id !== id),
    }));
  };

  return (
    <div >
      <div className='flex flex-col items-center'>
        <h3>Your Perfect Budget</h3>
        {userData &&
          userData.budgets &&
          userData.budgets.map((item) => (
            <div key={item.id} className='flex p-2 justify-center'>
              <UserInput
                labelTitle={item.title}
                labelAmount={item.amount}
                id={item.id}
                handleChange={handleBudgetChange}
                handleLabelTitleChange={handleBudgetTitleChange}
                handleDelete={handleDelete}
              />
            </div>
          ))}        
      </div>
      <div className='flex justify-center mt-8'>
        <FormButton onClick={handleAddBudgets} title='Add new budget item' />
        <FormButton onClick={handleSubmit} title='Save' />
      </div>
    </div>
  );
}

export default DisplayBudget;
