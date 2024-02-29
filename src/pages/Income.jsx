import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Income.css';
import UserInput from '../components/UserInput';
import FormTitle from './FormTitle';
import FormButton from '../components/FormButton';

function Income({ updateUserData }) {
  const navigate = useNavigate(); 
  const [income, setIncome] = useState({ salary: '', sideHustle: '', other: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncome({ ...income, [name]: value });
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
      <FormButton onClick={handleSubmit} title='Next' />
    </>
  );
}

export default Income;