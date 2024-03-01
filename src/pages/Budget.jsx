import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInput from '../components/UserInput';
import FormTitle from './FormTitle';
import FormButton from '../components/FormButton';

function Budget({ userData }) {
  const navigate = useNavigate();
  const [budget, setBudget] = useState({ rent: '', bills: '', groceries: '', savings: '', investments: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBudget({ ...budget, [name]: value });
  };

  const handleSubmit = () => {
    navigate('/savingsgoals');
  };

  return (
    <>
      <FormTitle title='Your Expenditure Budget:' />
      <UserInput incomeTitle='Rent' value={budget.rent} handleChange={handleChange} />
      <UserInput incomeTitle='Bills' value={budget.bills} handleChange={handleChange} />
      <UserInput incomeTitle='Groceries' value={budget.groceries} handleChange={handleChange} />
      <UserInput incomeTitle='Savings' value={budget.savings} handleChange={handleChange} />
      <UserInput incomeTitle='Investments' value={budget.investments} handleChange={handleChange} />
      <FormButton onClick={handleSubmit} title='Next' />
    </>
  );
}

export default Budget;