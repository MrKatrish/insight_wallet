import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInput from '../components/UserInput';
import FormTitle from '../components/FormTitle';
import FormButton from '../components/FormButton';

function SavingsGoals() {
  const navigate = useNavigate();

  // State for managing savings goals
  const [savingsGoals, setSavingsGoals] = useState([
    { id: 1, title: 'Holiday', amount: 0 },
    { id: 2, title: 'House', amount: 0 },
    { id: 3, title: 'Car', amount: 0 }
  ]);

  // Counter for generating unique IDs
  const [counter, setCounter] = useState(4);

  // Handle change in savings goal amount
  const handleSavingsGoalsChange = (id, e) => {
    const value = e.target.value;
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

  // Handle change in savings goal title
  const handleLabelTitleChange = (id, e) => {
    const newTitle = e.target.value;

    setSavingsGoals(previous => previous.map(goal => {
      if (goal.id === id) {
        return { ...goal, title: newTitle };
      }
      return goal;
    }));
  };

  // Add a new savings goal
  const handleAddSavings = () => {
    setSavingsGoals([
      ...savingsGoals, { id: counter, title: '', amount: 0 }
    ]);
    setCounter(counter + 1);
  };

  // Handle form submission
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
      {/* Component for displaying the form title */}
      <FormTitle title='Your Saving Goals:' />

      {/* Description of the page */}
      <p className='italic text-gray-400 mb-8 mx-4 sm:mx-8 md:mx-16 lg:mx-48 text-lg'>
        Whether it's a dream vacation, a new gadget, or an emergency fund. 
        Simply enter the item or goal name, and set the target amount.
      </p>

      {/* Mapping through savings goals and rendering the UserInput component */}
      {savingsGoals.map((goal, index) => (
        <div key={index} className="flex p-2 justify-center">
          <UserInput
            key={index}
            labelTitle={goal.title}
            labelAmount={goal.amount}
            id={goal.id}
            handleChange={handleSavingsGoalsChange}
            handleLabelTitleChange={handleLabelTitleChange}
            handleDelete={(id) => {
              setSavingsGoals(savingsGoals.filter(goal => goal.id !== id));
            }}
          />
        </div>
      ))}

      {/* Buttons for adding a new savings goal and submitting the form */}
      <div className='flex flex-row justify-center'>
        <FormButton onClick={handleAddSavings} title='Add New Saving Goal' />
        <FormButton onClick={handleSubmit} title='Next' />
      </div>
    </>
  );
}

export default SavingsGoals;
