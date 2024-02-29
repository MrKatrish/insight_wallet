import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Income.css';
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
      <FormTitle title='Your Income:' />
      <UserInput incomeTitle='Salary' value={income.salary} handleChange={handleChange}/>
      <UserInput incomeTitle='Side Hustle' income={income.salary} handleChange={handleChange}/>
      <UserInput incomeTitle='Other' income={income.salary} handleChange={handleChange}/>
      <UserInput incomeTitle='+' income={income.salary} handleChange={handleChange}/>

      {income.additionalIncome && income.additionalIncome.map((item, index) => (
        <div key={index} className="flex p-2 justify-start">
          <AddIncome index={index} />
        </div>
      ))}

      <FormButton onClick={handleSubmit} title='Next' />
      <FormButton onClick={handleAddIncome} title='Add new income' />


    </>
  );
}

export default Income;