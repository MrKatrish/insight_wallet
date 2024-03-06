import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInput from '../components/UserInput';
import FormTitle from '../components/FormTitle';
import FormButton from '../components/FormButton';
import profileImage from "../Assets/jonas-kakaroto.jpg";
import MyCalendar from './ExternalCalendar';
import { TbMoneybag } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { TbZoomMoney } from "react-icons/tb";

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
    <div className=" text-white h-full fixed top-0 left-0 bg-customPurple grid grid-cols-1 grid-rows-6 items-center justify-center">
      {/* User Profile Section */}
      <div className='bg-purple-900 bg-opacity-30 rounded-xl w-72 text-center p-2 m-8 col-span-1 grid grid-cols-2 grid-rows-1 mt-24 shadow-lg'>
          <img
            src={user.profilePicture}
            className=" outline-blue-950 shadow-xl w-24 h-24 rounded-full mx-auto mb-1 mt-2 ml-2"
          />
          <div> 
            <h2 className="mb-2 font-semibold mt-6 text-left">Hi {user.username}, </h2>
            <h3 className="mb-2 text-left">Welcome back!</h3>
          </div>
      </div>

      {/* Vertical Line before Calendar */}
      <div className=" border-gray-500 w-94 col-span-1"></div>

      <MyCalendar className="col-span-1" />

      {/* Vertical Line after Calendar */}
      <div className=" border-gray-500 w-94 col-span-1"></div>

      {/* Navigation Links */}
      <ul className="col-span-1 text-center mt-2 mb-22 grid grid-rows-4">
        <h3 className="mb-2 font-semibold col-span-1">Need to make changes?</h3>
        <li className="mb-1">
          <Link to="/income" className="block hover:bg-black hover:bg-opacity-50 hover:rounded-md col-span-1"><GiReceiveMoney />Add new income
          </Link>
        </li>
        <li className="mb-1">
          <Link to="/budget" className="block hover:bg-black hover:bg-opacity-50 hover:rounded-md col-span-1">
          <TbZoomMoney className="ml-"/> Amend your budget
          </Link>
        </li>
        <li className="mb-1">
          <Link to="/savingsgoals" className="block hover:bg-black hover:bg-opacity-50 hover:rounded-md col-span-1">
          <TbMoneybag /> Set new savings goals
          </Link>
        </li>
      </ul>
    </div>
  );
};

      <div className='flex flex-col sm:flex-row p-2 justify-center items-center'>
        <label className="text-lg font-medium leading-10 px-4 sm:px-6 py-2 sm:my-2 sm:mx-2 border-0 ring-1 ring-inset ring-customPurple w-full sm:w-48 bg-white rounded-3xl">Total</label>
        <label className="text-lg font-medium leading-10 py-2 border-0 ring-1 ring-inset ring-customPurple w-full sm:w-64 bg-white rounded-3xl mt-2 sm:mt-0">£ {totalIncome.toFixed(2)}</label>
      </div>
    </>
  );
}

export default Income;