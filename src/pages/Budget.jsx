import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInput from '../components/UserInput';
import FormTitle from '../components/FormTitle';
import FormButton from '../components/FormButton';

function Budget() {
  const navigate = useNavigate();
  const [budgets, setBudgets] = useState([
    { id: 1, title: 'Rent', amount: 0 },
    { id: 2, title: 'Bills', amount: 0 },
    { id: 3, title: 'Groceries', amount: 0 },
    { id: 4, title: 'Investments', amount: 0 }
  ]);
  const [counter, setCounter] = useState(5);
  const [totalBudget, setTotalBudget] = useState(0);

  useEffect(() => {
    const totalSum = budgets
      .map(budget => parseFloat(budget.amount))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    setTotalBudget(totalSum);
  }, [budgets]);

  const handleAddBudgets = () => {
    setCounter(prevCounter => prevCounter + 1);
    setBudgets(previous => [...previous, { id: counter, title: '', amount: 0 }]);
  };

  const handleBudgetChange = (id, e) => {
    const value = e.target.value;
    setBudgets(budgets.map(budget => {
      if (budget.id === id) {
        return { ...budget, amount: parseFloat(value) || 0 };
      }
      return budget;
    }));
  };

  const handleSubmit = () => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const userData = JSON.parse(localStorage.getItem(currentUser));
      userData.budgets = budgets;
      localStorage.setItem(currentUser, JSON.stringify(userData));
    }
    navigate('/savingsgoals');
  };

  const handleBudgetTitleChange = (id, e) => {
    const newTitle = e.target.value;
  
    setBudgets(previous => previous.map(budget => {
      if (budget.id === id) {
        return { ...budget, title: newTitle };
      }
      return budget;
    }));
  };

  const handleDelete = id => {
    setBudgets(previous => previous.filter(budget => budget.id !== id));
  };

  return (
    <>
      <FormTitle title='Your Expenditure Budget:' />
      <p className='italic text-gray-400 mb-8 mx-4 sm:mx-8 md:mx-16 lg:mx-48 text-lg'>Allocate funds to different categories such as housing, utilities, entertainment, and more. Simply input your estimated spending for each category, and our finance tracker will help you stay on top of your financial goals.</p>

      {budgets.map((item, index) => (
        <div key={index} className="flex p-2 justify-center">
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

      <div className='flex flex-row justify-center'>
        <FormButton onClick={handleAddBudgets} title='Add new budget item' />
        <FormButton onClick={handleSubmit} title='Next' />
      </div>

      <div className='flex flex-col sm:flex-row p-2 justify-center items-center'>
        <label className="text-lg font-medium leading-10 px-4 sm:px-6 py-2 sm:my-2 sm:mx-2 border-0 ring-1 ring-inset ring-customPurple w-full sm:w-48 bg-white rounded-3xl">Total</label>
        <label className="text-lg font-medium leading-10 py-2 border-0 ring-1 ring-inset ring-customPurple w-full sm:w-64 bg-white rounded-3xl mt-2 sm:mt-0">£ {typeof totalBudget === 'number' ? totalBudget.toFixed(2) : '0.00'}</label>
      </div>
    </>
  );
}

export default Budget;