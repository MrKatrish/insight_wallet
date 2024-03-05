import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInput from '../components/UserInput';
import FormTitle from '../components/FormTitle';
import FormButton from '../components/FormButton';
import TotalSum from '../components/TotalSum';

function Income() {
  const navigate = useNavigate();

  const [incomes, setIncomes] = useState([
    {id: 1, title: 'Salary', amount: 0},
    {id: 2, title: 'Side Hustle', amount: 0},
    {id: 3, title: 'Other', amount: 0}
  ]);
  const [counter, setCounter] = useState(4);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    const totalSum = incomes
      .map((income) => income.amount)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    setTotalIncome(totalSum);
  }, [incomes]);

  const handleAddIncomes = () => {
    setCounter(p => p + 1);
    setIncomes([...incomes, { id: counter, title: '', amount: 0 }]);
  };

  const handleIncomeChange = (id, e) => {
    const value = e.target.value;
    let valueNumber = parseFloat(value);
    if (isNaN(valueNumber)) {
      valueNumber = 0;
    }

    setIncomes(incomes.map((income) =>
      income.id === id ? { ...income, amount: valueNumber } : income
    ));
  };

  const handleIncomeTitleChange = (id, e) => {
    const { value } = e.target;
  
    setIncomes(incomes.map((income) => {
      if (income.id === id) {
        const amount = incomes.find(item => item.id === id)?.amount || 0;
        return { ...income, title: value, amount };
      }
      return income;
    }));
  };

  const handleDelete = (id) => {
    setIncomes(incomes.filter((income) => income.id !== id));
  }

  const handleSubmit = () => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const userData = JSON.parse(localStorage.getItem(currentUser));
      userData.incomes = incomes;
      localStorage.setItem(currentUser, JSON.stringify(userData));
    }
    navigate('/budget');
  };

  return (
    <>
      <FormTitle title='Your Income:' />
      <p className='italic text-gray-400 mb-8 mx-4 sm:mx-8 md:mx-16 lg:mx-48 text-lg'>Welcome to the Income Input page! Here, you can enter your various income streams, such as salary, freelance work, or any additional sources of earnings.</p>
       
      <div>
      {incomes.map((item, index) => (
        <div key={index} className="flex p-2 justify-center">
          <UserInput
            labelTitle={item.title}
            labelAmount={item.amount}
            id={item.id}
            handleChange={handleIncomeChange}
            handleLabelTitleChange={handleIncomeTitleChange}
            handleDelete={handleDelete}
          />
        </div>
      ))}

        <div className='flex flex-row justify-center'>
          <FormButton onClick={handleAddIncomes} title='Add new income' />
          <FormButton onClick={handleSubmit} title='Next' />
        </div>


        <div className='flex p-2 justify-center'>
              <label className="text-lg font-medium leading-10 px-20 py-2 mx-5 border-0 ring-1 ring-inset ring-customPurple w-48 bg-white rounded-3xl">Total</label>
              <label className="text-lg font-medium leading-10 py-2 border-0 ring-1 ring-inset ring-customPurple w-64 bg-white rounded-3xl">£ {totalIncome.toFixed(2)}</label>
        </div>
    </>
  );
}

export default Income;
