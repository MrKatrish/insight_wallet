import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInput from '../components/UserInput';
import FormTitle from './FormTitle';
import FormButton from '../components/FormButton';
import AddIncome from '../components/AddIncome';

function Budget({ updateUserData }) {
  const navigate = useNavigate();

  const [rentInput, setRentInput] = useState(0);
  const [billsInput, setBillsInput] = useState(0);
  const [groceriesInput, setGroceriesInput] = useState(0);
  const [savingsInput, setSavingInput] = useState(0);
  const [investmentsInput, setInvestmentsInput] = useState(0);
  const [additionalBudgets, setAdditionalBudgets] = useState([]);
  const [totalBudget, setTotalBudget] = useState(0);

  const handleMainInputChange = (name, e) => {
    const { value } = e.target;
    let valueNumber = parseFloat(value);

    if (isNaN(valueNumber)) {
      valueNumber = 0;
    }

    switch (name) {
      case 'Rent':
        setRentInput(valueNumber);
        break;
      case 'Bills':
        setBillsInput(valueNumber);
        break;
        case 'Groceries':
          setGroceriesInput(valueNumber);
        case 'Savings':
          setSavingInput(valueNumber);
          break;
        case 'Investments':
          setInvestmentsInput(valueNumber);
          break;
        default:
          break;
    }

  };

  useEffect(() => {
    const totalSum = rentInput + billsInput + groceriesInput + savingsInput + investmentsInput + additionalBudgets
    .map((e) => e.amount)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    setTotalBudget(totalSum);
  }, [rentInput, billsInput, groceriesInput, savingsInput, investmentsInput, additionalBudgets]);

   const handleAddBudget = () => {
    setAdditionalBudgets([
      ...additionalBudgets,  { title: '', amount: 0 }
    ])
  };

  const handleAdditionalBudgetChange = (index, e) => {
    const { value } = e.target;
    let valueNumber = parseFloat(value);

    if(isNaN(valueNumber)) {
      valueNumber = 0;
    }

    setAdditionalBudgets(
      (previousAdditionalBudget) => previousAdditionalBudget.map((obj, i) => i === index ? {...obj, amount: valueNumber} : obj) 
    )
  };

  const handleSubmit = () => {
    const budgetData = {
      rent: rentInput,
      bills: billsInput,
      groceries: groceriesInput,
      savings: savingsInput,
      investments: investmentsInput,
    };

    updateUserData({ budget: budgetData });
    navigate('/savingsgoals');
  };

  return (
    <>
      <FormTitle title='Your Expenditure Budget:' />
      <UserInput incomeTitle='Rent' handleChange={handleMainInputChange} />
      <UserInput incomeTitle='Bills' handleChange={handleMainInputChange} />
      <UserInput incomeTitle='Groceries' handleChange={handleMainInputChange} />
      <UserInput incomeTitle='Savings' handleChange={handleMainInputChange} />
      <UserInput incomeTitle='Investments' handleChange={handleMainInputChange} />

      {additionalBudgets.map((item, index) => (
        <div key={index} className="flex p-2 justify-start">
          <AddIncome index={index} onChange={handleAdditionalBudgetChange}/>
        </div>
      ))}

      <div className='flex flex-row justify-center'>
        <FormButton onClick={handleAddBudget} title='Add new budget item' />
        <FormButton onClick={handleSubmit} title='Next' />
      </div>

      <div className='flex p-2'>
            <label className="text-lg font-medium leading-10 px-20 py-2 mx-5 border-0 ring-1 ring-inset ring-customPurple w-48 bg-white rounded-3xl">Total</label>
            <label className="text-lg font-medium leading-10 py-2 border-0 ring-1 ring-inset ring-customPurple w-64 bg-white rounded-3xl">£ {totalBudget.toFixed(2)}</label>
      </div>

    </>
  );
}

export default Budget;