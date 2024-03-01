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
  const [total, setTotal] = useState(0);

  const handleMainInputChange = (name, e) => {
    const { value } = e.target;
    const valueNumber = parseFloat(value);

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
    const totalSum = salaryInput + sideHustleInput + otherInput;

    setTotal(totalSum);
  }, [salaryInput, sideHustleInput, otherInput]);

  // const [income, setIncome] = useState({ salary: '', sideHustle: '', other: '', additionalIncome: [] });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setIncome(prevIncome => ({
  //     ...prevIncome,
  //     [name]: value
  //   }));
  // };


  //  const handleAddIncome = () => {
  //   setIncome(prevIncome => ({
  //     ...prevIncome,
  //     additionalIncome: [...prevIncome.additionalIncome, { title: '', amount: '' }]
  //   }));
  // };

  // const handleAdditionalIncomeChange = (index, e) => {
  //   const { name, value } = e.target;
  //   setIncome(prevIncome => ({
  //     ...prevIncome,
  //     additionalIncome: prevIncome.additionalIncome.map((item, i) =>
  //       i === index ? { ...item, [name]: value } : item
  //     )
  //   }));
  // };


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

      {/* {income.additionalIncome && income.additionalIncome.map((item, index) => (
        <div key={index} className="flex p-2 justify-start">
          <AddIncome index={index} />
        </div>
      ))} */}

      <div className='flex flex-row justify-center'>
        <FormButton onClick={handleSubmit} title='Next' />
        {/* <FormButton onClick={handleAddIncome} title='Add new income' /> */}
      </div>

    </div>

      <div className='flex p-2'>
            <label className="text-lg font-medium leading-10 px-10 py-2 mx-5 border-0 ring-1 ring-inset ring-gray-300 w-48 bg-white rounded-3xl">Total</label>
            <label className="text-lg font-medium leading-10 px-10 py-2 mx-5 border-0 ring-1 ring-inset ring-gray-300 w-48 bg-white rounded-3xl">{total.toFixed(2)}</label>
      </div>
    </>
  );
}

export default Income;