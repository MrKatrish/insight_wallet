import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInput from '../components/UserInput';
import FormTitle from '../components/FormTitle';
import FormButton from '../components/FormButton';

function Budget({ updateUserData }) {
  const navigate = useNavigate();


  const [budgets, setBudgets] = useState([
    {id: 1, title: 'Rent', amount: 0},
    {id: 2, title: 'Bills', amount: 0},
    {id: 3, title: 'Groceries', amount: 0},
    {id: 4, title: 'Savings', amount: 0},
    {id: 5, title: 'Investments', amount: 0}
  ]);
  const [counter, setCounter] = useState(6);
  const [totalBudget, setTotalBudget] = useState(0);

  useEffect(() => {
    const totalSum = budgets
      .map((e) => e.amount)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    setTotalBudget(totalSum);
  }, [budgets]);

   const handleAddBudgets = () => {
    setCounter(p => p + 1);

    setBudgets(
      (previous) => [...previous, { id: counter, title: '', amount: 0 }]
    )
  };

  const handleBudgetChange = (id, e) => {
    const { value } = e.target;
    let valueNumber = parseFloat(value);

    if(isNaN(valueNumber)) {
      valueNumber = 0;
    }

    setBudgets(
      (previousAdditionalBudget) => previousAdditionalBudget.map((obj, i) => obj.id === id ? {...obj, amount: valueNumber} : obj) 
    )
  };

  const handleSubmit = () => {

    navigate('/savingsgoals');
  };

  const handleBudgetTitleChange = (id, e) => {
    setBudgets(
      (previousAdditionalBudget) => previousAdditionalBudget.map((obj, i) => obj.id === id ? {...obj, title: e.target.value} : obj) 
    )
  }

  const handleDelete = (id) => {
    setBudgets((previousAdditionalBudget) =>
      previousAdditionalBudget.filter((obj) => obj.id !== id));
  }


  return (
    <>
      <FormTitle title='Your Expenditure Budget:' />
      <p className='italic text-gray-400 mb-8 mx-48 text-lg'>Allocate funds to different categories such as housing, utilities, entertainment, and more. Simply input your estimated spending for each category, and our finance tracker will help you stay on top of your financial goals.</p>

      {budgets.map((item, index) => (
        <div key={index} className="flex p-2 justify-center">
            <UserInput labelTitle={item.title} labelAmount={item.amount} id={item.id} handleChange={handleBudgetChange} handleLabelTitleChange={handleBudgetTitleChange} handleDelete={handleDelete}/>
        </div>
      ))}

      <div className='flex flex-row justify-center'>
        <FormButton onClick={handleAddBudgets} title='Add new budget item' />
        <FormButton onClick={handleSubmit} title='Next' />
      </div>

      <div className='flex p-2 justify-center'>
            <label className="text-lg font-medium leading-10 px-20 py-2 mx-5 border-0 ring-1 ring-inset ring-customPurple w-48 bg-white rounded-3xl">Total</label>
            <label className="text-lg font-medium leading-10 py-2 border-0 ring-1 ring-inset ring-customPurple w-64 bg-white rounded-3xl">£ {totalBudget.toFixed(2)}</label>
      </div>

    </>
  );
}

export default Budget;