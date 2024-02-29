import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <h1 className="mb-10">Your Income:</h1>

      <div className="flex p-2 justify-start">
        <label htmlFor="salary" className="text-lg font-medium leading-10 px-10 py-2 mx-5 border-0 ring-1 ring-inset ring-gray-300 w-48 incomeTitle">Salary</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-md">£</span>
          </div>
          <input type="number" name="salary" className="rounded-3xl border-0 py-4 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-300 sm:text-md sm:leading-6" placeholder="0.00" value={income.salary} onChange={handleChange} />
        </div>
      </div>

            <div className="flex p-2 justify-start">
                <label htmlFor="salary" className="text-lg font-medium leading-10 px-10 py-2 mx-5 border-0 ring-1 ring-inset ring-gray-300 w-48 incomeTitle">Side Hustle</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-md">£</span>
                    </div>
                    <input type="number" name="price" className="rounded-3xl border-0 py-4 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-300 sm:text-md sm:leading-6" placeholder="0.00" />
                </div>
            </div>

            <div className="flex p-2 justify-start">
                <label htmlFor="salary" className="text-lg font-medium leading-10 px-10 py-2 mx-5 border-0 ring-1 ring-inset ring-gray-300 w-48 incomeTitle">Other</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-md">£</span>
                    </div>
                    <input type="number" name="price" className="rounded-3xl border-0 py-4 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-300 sm:text-md sm:leading-6" placeholder="0.00" />
                </div>
            </div>

      {income.additionalIncome && income.additionalIncome.map((item, index) => (
        <div key={index} className="flex p-2 justify-start">
          <label htmlFor={`title${index}`} className="text-lg font-medium leading-10 px-10 py-2 mx-5 border-0 ring-1 ring-inset ring-gray-300 w-48 incomeTitle">Title</label>
          <input
            type="text"
            name={`additionalIncome[${index}].title`}
            id={`title${index}`}
            className="rounded-3xl border-0 py-4 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-300 sm:text-md sm:leading-6"
            placeholder="Income source"
            onChange={(e) => handleAdditionalIncomeChange(index, e)}
          />

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-md">£</span>
            </div>
            <input
              type="number"
              name={`additionalIncome[${index}].amount`}
              className="rounded-3xl border-0 py-4 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-300 sm:text-md sm:leading-6"
              placeholder="0.00" 
              onChange={(e) => handleAdditionalIncomeChange(index, e)}
            />
          </div>
        </div>
      ))}

            <button className="button" onClick={handleAddIncome}>Add new income</button>

            <button className="button" onClick={handleSubmit}>Next</button>
    </>
  );
}

export default Income;