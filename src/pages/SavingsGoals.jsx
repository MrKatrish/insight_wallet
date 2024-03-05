import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserInput from "../components/UserInput";
import FormTitle from "../components/FormTitle";
import FormButton from "../components/FormButton";
import TotalSum from "../components/TotalSum";

<<<<<<< HEAD
function SavingsGoals({ updateUserData }) {
  const navigate = useNavigate();

  const [holidayInput, setHolidayInput] = useState(0);
  const [houseInput, setHouseInput] = useState(0);
  const [carInput, setCarInput] = useState(0);
  const [additionalSavings, setAdditionalSavings] = useState([]);

  const [counter, setCounter] = useState(8);
  const [totalSavings, setTotalSavings] = useState(0);

  const handleMainInputChange = (name, e) => {
    const { value } = e.target;
=======
function SavingsGoals() {
  const navigate = useNavigate();

  const [savingsGoals, setSavingsGoals] = useState([
    { id: 1, title: 'Holiday', amount: 0 },
    { id: 2, title: 'House', amount: 0 },
    { id: 3, title: 'Car', amount: 0 }
  ]);

  const [counter, setCounter] = useState(4);

  const handleSavingsGoalsChange = (id, e) => {
    const value = e.target.value;
>>>>>>> 8117794bd13bddd00f37128a5f854d3275dd6f41
    let valueNumber = parseFloat(value);

    if (isNaN(valueNumber)) {
      valueNumber = 0;
    }

<<<<<<< HEAD
    switch (name) {
      case "Holiday":
        setHolidayInput(valueNumber);
        break;
      case "House":
        setHouseInput(valueNumber);
        break;
      case "Other":
        setCarInput(valueNumber);
        break;
      default:
        break;
    }
  };

  const handleAddSavings = () => {
    // setAdditionalSavings([
    //   ...additionalSavings,  { title: '', amount: 0 }
    // ])
    setCounter((p) => p + 1);
    setTotalSavings((previous) => [
      ...previous + 0,
      { id: counter, title: "", amount: 0 },
    ]);
  };

  const handleAdditionalSavingGoals = (index, e) => {
    const { value } = e.target;
    let valueNumber = parseFloat(value);

    if (isNaN(valueNumber)) {
      valueNumber = 0;
    }

    setAdditionalSavings((previousAdditionalSavings) =>
      previousAdditionalSavings.map((obj, i) =>
        i === index ? { ...obj, amount: valueNumber } : obj
=======
    setSavingsGoals(
      savingsGoals.map(goal => 
        goal.id === id ? { ...goal, amount: valueNumber } : goal
>>>>>>> 8117794bd13bddd00f37128a5f854d3275dd6f41
      )
    );
  };

<<<<<<< HEAD
  const handleSubmit = () => {
    const savingsData = {
      holiday: holidayInput,
      house: houseInput,
      car: carInput,
    };

    navigate("/dashboard"); //need to add path in App.jsx as well I'm not sure about data is saving/changing/updating
=======
  const handleLabelTitleChange = (id, e) => {
    const newTitle = e.target.value;

    setSavingsGoals(previous => previous.map(goal => {
      if (goal.id === id) {
        return { ...goal, title: newTitle };
      }
      return goal;
    }));
  };

  const handleAddSavings = () => {
    setSavingsGoals([
      ...savingsGoals, { id: counter, title: '', amount: 0 }
    ]);
    setCounter(counter + 1);
  };

  const handleSubmit = () => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const userData = JSON.parse(localStorage.getItem(currentUser));
      userData.savingsGoals = savingsGoals;
      localStorage.setItem(currentUser, JSON.stringify(userData));
    }
    navigate('/dashboard');
>>>>>>> 8117794bd13bddd00f37128a5f854d3275dd6f41
  };

  return (
    <>
<<<<<<< HEAD
      <div>
        <FormTitle title="Your Saving Goals:" />
        <p className="italic text-gray-400 mb-8 mx-48 text-lg">
          Page Description Here.
        </p>

        <div>
          <UserInput
            incomeTitle="Holiday:"
            handleChange={handleMainInputChange}
          />
          <UserInput
            incomeTitle="House:"
            handleChange={handleMainInputChange}
          />
          <UserInput incomeTitle="Car:" handleChange={handleMainInputChange} />

          {additionalSavings.map((item, index) => (
            <div key={index} className="flex p-2 justify-start">
              <AddIncome index={index} onChange={handleAdditionalSavingGoals} />
            </div>
          ))}

          <div className="flex flex-row justify-center">
            <FormButton
              className="h-8 w-8 p-4 m-4 rounded-full font-bold"
              onClick={handleAddSavings}
              title="+"
            />
          </div>

          <TotalSum label="Total" total={totalSavings} />
        </div>

        {/* Insert back button here */}
        <FormButton onClick={handleSubmit} title="Next" />
=======
      <FormTitle title='Your Saving Goals:' />
      <p className='italic text-gray-400 mb-8 mx-4 sm:mx-8 md:mx-16 lg:mx-48 text-lg'>Whether it's a dream vacation, a new gadget, or an emergency fund. Simply enter the item or goal name, and set the target amount.</p>
      {savingsGoals.map((goal, index) => (
        <div key={index} className="flex p-2 justify-center">
        <UserInput
          key={index}
          labelTitle={goal.title}
          labelAmount={goal.amount}
          id={goal.id}
          handleChange={handleSavingsGoalsChange}
          handleLabelTitleChange={handleLabelTitleChange}
          handleDelete={(id) => {
            setSavingsGoals(savingsGoals.filter(goal => goal.id !== id));
          }}
        />
        </div>
      ))}
      <div className='flex flex-row justify-center'>
        <FormButton onClick={handleAddSavings} title='Add New Saving Goal' />
        <FormButton onClick={handleSubmit} title='Next' />
>>>>>>> 8117794bd13bddd00f37128a5f854d3275dd6f41
      </div>
    </>
  );
}

export default SavingsGoals;
