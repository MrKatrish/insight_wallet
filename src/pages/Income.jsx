import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInput from '../components/UserInput';
import FormTitle from './FormTitle';
import FormButton from '../components/FormButton';
import AddIncome from '../components/AddIncome';

function Income({ updateUserData }) {
  const navigate = useNavigate();
  const [income, setIncome] = useState({ salary: '', sideHustle: '', other: '', additionalIncome: [] });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncome(prevIncome => ({
      ...prevIncome,
      [name]: value
    }));
  };


   const handleAddIncome = () => {
    setIncome(prevIncome => ({
      ...prevIncome,
      additionalIncome: [...prevIncome.additionalIncome, { title: '', amount: '' }]
    }));
  };

  const handleAdditionalIncomeChange = (index, e) => {
    const { name, value } = e.target;
    setIncome(prevIncome => ({
      ...prevIncome,
      additionalIncome: prevIncome.additionalIncome.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      )
    }));
  };


  const handleSubmit = () => {
    updateUserData({ income });
    navigate('/budget');
  };

  return (
    <>
    <div>
      <FormTitle title='Your Income:' />
      <UserInput incomeTitle='Salary' value={income.salary} handleChange={handleChange}/>
      <UserInput incomeTitle='Side Hustle' income={income.sideHustle} handleChange={handleChange}/>
      <UserInput incomeTitle='Other' income={income.other} handleChange={handleChange}/>

      {income.additionalIncome && income.additionalIncome.map((item, index) => (
        <div key={index} className="flex p-2 justify-start">
          <AddIncome index={index} />
        </div>
      ))}

      <div className='flex flex-row justify-center'>
        <FormButton onClick={handleSubmit} title='Next' />
        <FormButton onClick={handleAddIncome} title='Add new income' />
      </div>

    </div>

      <div className='flex p-2'>
            <label className="text-lg font-medium leading-10 px-10 py-2 mx-5 border-0 ring-1 ring-inset ring-gray-300 w-48 incomeTitle">Total</label>
            <label className="text-lg font-medium leading-10 px-10 py-2 mx-5 border-0 ring-1 ring-inset ring-gray-300 w-48 incomeTitle">SUMA</label>
      </div>
    </>
  );
}

export default Income;