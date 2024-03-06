import React, { useState, useEffect } from 'react';
import FormButton from './FormButton';
import UserInput from '../components/UserInput';

function DisplayBudget() {
  const [userData, setUserData] = useState(loadUserData());
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [counter, setCounter] = useState(0);

  // Effect to update userData on component mount
  useEffect(() => {
    setUserData(loadUserData());
  }, []); // Update userData on component mount

  // Function to load user data from local storage
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

  // Function to handle form submission
  const handleSubmit = () => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      // Update user data and local storage
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

  // Function to handle budget amount change
  const handleBudgetChange = (id, e) => {
    const value = e.target.value;
    setUserData((prevUserData) => ({
      ...prevUserData,
      budgets: prevUserData.budgets.map((budget) =>
        budget.id === id ? { ...budget, amount: parseFloat(value) || 0 } : budget
      ),
    }));
  };

  // Function to add new budget item
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

  // Function to handle budget title change
  const handleBudgetTitleChange = (id, newTitle) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      budgets: prevUserData.budgets.map((budget) =>
        budget.id === id ? { ...budget, title: newTitle } : budget
      ),
    }));
  };

  // Function to handle budget item deletion
  const handleDelete = (id) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      budgets: prevUserData.budgets.filter((budget) => budget.id !== id),
    }));
  };

  // JSX rendering
  return (
    <div>
      <div className='flex flex-col items-center'>
        <h3>Perfection to Your Budget</h3>
        {/* Map over user budgets and render UserInput component */}
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
