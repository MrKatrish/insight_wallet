import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInput from '../components/UserInput';
import FormTitle from '../components/FormTitle';
import FormButton from '../components/FormButton';

function SavingsGoals() {
  const navigate = useNavigate();

  const [savingsGoals, setSavingsGoals] = useState([
    { id: 1, title: 'Holiday', amount: 0 },
    { id: 2, title: 'House', amount: 0 },
    { id: 3, title: 'Car', amount: 0 }
  ]);

  const [counter, setCounter] = useState(4);

  const handleSavingsGoalsChange = (id, value) => {
    let valueNumber = parseFloat(value);

    if (isNaN(valueNumber)) {
      valueNumber = 0;
    }

    setSavingsGoals(
      savingsGoals.map(goal => 
        goal.id === id ? { ...goal, amount: valueNumber } : goal
      )
    );
  };

  const handleAddSavings = () => {
    setSavingsGoals([
      ...savingsGoals, { id: counter, title: '', amount: 0 }
    ]);
    setCounter(counter + 1);
  };

  const handleSubmit = () => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const userData = JSON.parse(localStorage.getItem(currentUser));
      userData.savingsGoals = savingsGoals;
      localStorage.setItem(currentUser, JSON.stringify(userData));
    }
    navigate('/dashboard');
  };

  return (
    <>
      <FormTitle title='Your Saving Goals:' />
      {savingsGoals.map((goal, index) => (
        <UserInput
          key={index}
          labelTitle={goal.title}
          labelAmount={goal.amount}
          id={goal.id}
          handleChange={handleSavingsGoalsChange}
          handleLabelTitleChange={(id, value) => {
            setSavingsGoals(
              savingsGoals.map(goal =>
                goal.id === id ? { ...goal, title: value } : goal
              )
            );
          }}
          handleDelete={(id) => {
            setSavingsGoals(savingsGoals.filter(goal => goal.id !== id));
          }}
        />
      ))}
      <div className='flex flex-row justify-center'>
        <FormButton onClick={handleAddSavings} title='Add New Saving Goal' />
        <FormButton onClick={handleSubmit} title='Next' />
      </div>
    </>
  );
}

export default SavingsGoals;
