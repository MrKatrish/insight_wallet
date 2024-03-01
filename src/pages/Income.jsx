import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInput from '../components/UserInput';
import FormTitle from './FormTitle';
import FormButton from '../components/FormButton';
import AddIncome from '../components/AddIncome';

function Income({ updateUserData }) {
  const navigate = useNavigate();

  const [salaryInput, setSalaryInput] = useState(0);
  const [sideHustleInput, setSideHustleInput] = useState(0);
  const [otherInput, setOtherInput] = useState(0);
  const [additionalIncomes, setAdditionalIncomes] = useState([]);
  const [total, setTotal] = useState(0);

  const handleMainInputChange = (name, e) => {
    const { value } = e.target;
    let valueNumber = parseFloat(value);

    if (isNaN(valueNumber)) {
      valueNumber = 0;
    }

    switch (name) {
      case 'Salary':
        setSalaryInput(valueNumber);
        break;
      case 'Side Hustle':
        setSideHustleInput(valueNumber);
        break;
      case 'Other':
        setOtherInput(valueNumber);
        break;
      default:
        break;
    }

  };

  useEffect(() => {
    const totalSum = salaryInput + sideHustleInput + otherInput + additionalIncomes
    .map((e) => e.amount)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    setTotal(totalSum);
  }, [salaryInput, sideHustleInput, otherInput, additionalIncomes]);

   const handleAddIncomes = () => {
    setAdditionalIncomes([
      ...additionalIncomes,  { title: '', amount: 0 }
    ])
  };

  const handleAdditionalIncomeChange = (index, e) => {
    const { value } = e.target;
    let valueNumber = parseFloat(value);

    if(isNaN(valueNumber)) {
      valueNumber = 0;
    }
    
    setAdditionalIncomes(
      (previousAdditionalIncome) => previousAdditionalIncome.map((obj, i) => i === index ? {...obj, amount: valueNumber} : obj) 
    )
  };


  const handleSubmit = () => {
    const incomeData = {
      salary: salaryInput,
      sideHustle: sideHustleInput,
      other: otherInput,
    };

    updateUserData({ income: incomeData });
    navigate('/budget');
  };

  return (
    <>
    <div>
      <FormTitle title='Your Income:' />
      <UserInput incomeTitle='Salary' handleChange={handleMainInputChange}/>
      <UserInput incomeTitle='Side Hustle' handleChange={handleMainInputChange}/>
      <UserInput incomeTitle='Other' handleChange={handleMainInputChange}/>

      {additionalIncomes.map((item, index) => (
        <div key={index} className="flex p-2 justify-start">
          <AddIncome index={index} onChange={handleAdditionalIncomeChange}/>
        </div>
      ))}

      <div className='flex flex-row justify-center'>
        <FormButton onClick={handleAddIncomes} title='Add new income' />
        <FormButton onClick={handleSubmit} title='Next' />
      </div>

    </div>

      <div className='flex p-2'>
            <label className="text-lg font-medium leading-10 px-20 py-2 mx-5 border-0 ring-1 ring-inset ring-customPurple w-48 bg-white rounded-3xl">Total</label>
            <label className="text-lg font-medium leading-10 py-2 border-0 ring-1 ring-inset ring-customPurple w-64 bg-white rounded-3xl">£ {total.toFixed(2)}</label>
      </div>
    </>
  );
}

export default Income;