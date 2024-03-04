import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInput from '../components/UserInput';
import FormTitle from '../components/FormTitle';
import FormButton from '../components/FormButton';
import TotalSum from '../components/TotalSum';

function Income({ updateUserData }) {
  const navigate = useNavigate();

  const [incomes, setIncomes] = useState([
    {id: 1, title: 'Salary', amount: 0},
    {id: 2, title: 'Side Hustle', amount: 0},
    {id: 3, title: 'Other', amount: 0}
  ]);
  const [counter, setCounter] = useState(4)
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    const totalSum = incomes
      .map((e) => e.amount)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    setTotalIncome(totalSum);
  }, [incomes]);

  const handleAddIncomes = () => {
   setCounter(p => p + 1);

    setIncomes(
      (previous) => [...previous, { id: counter, title: '', amount: 0 }] 
      )
  };

  const handleIncomeChange = (id, e) => {
    const { value } = e.target;
    let valueNumber = parseFloat(value);

    if(isNaN(valueNumber)) {
      valueNumber = 0;
    }
    
    setIncomes(
      (previousAdditionalIncome) => previousAdditionalIncome.map((obj, i) => obj.id === id ? {...obj, amount: valueNumber} : obj) 
    )
  };


  const handleSubmit = () => {
    const incomeData = incomes;

    updateUserData({ income: incomeData });
    navigate('/budget');
  };

  const handleIncomeTitleChange = (id, e) => {
    setIncomes(
      (previousAdditionalIncome) => previousAdditionalIncome.map((obj, i) => obj.id === id ? {...obj, title: e.target.value} : obj) 
    )
  }

  const handleDelete = (id) => {
    setIncomes((previousAdditionalIncome) =>
      previousAdditionalIncome.filter((obj) => obj.id !== id));
  }

  return (
    <>
      <FormTitle title='Your Income:' />
      <p className='italic text-gray-400 mb-8 mx-48 text-lg'>Welcome to the Income Input page! Here, you can enter your various income streams, such as salary, freelance work, or any additional sources of earnings.</p>
       
        {incomes.map((item, index) => { 
          return (
          <div key={index} className="flex p-2 justify-center">
            <UserInput labelTitle={item.title} labelAmount={item.amount} id={item.id} handleChange={handleIncomeChange} handleLabelTitleChange={handleIncomeTitleChange} handleDelete={handleDelete}/>
          </div>
        )})}

        <div className='flex flex-row justify-center'>
          <FormButton onClick={handleAddIncomes} title='Add new income' />
          <FormButton onClick={handleSubmit} title='Next' />
        </div>


        <TotalSum label="Total" total={totalIncome} />
    </>
  );
}


export default Income;