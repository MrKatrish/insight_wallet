import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserInput from "../components/UserInput";
import FormTitle from "../components/FormTitle";
import FormButton from "../components/FormButton";
import TotalSum from "../components/TotalSum";

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
    let valueNumber = parseFloat(value);

    if (isNaN(valueNumber)) {
      valueNumber = 0;
    }

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
      )
    );
  };

  const handleSubmit = () => {
    const savingsData = {
      holiday: holidayInput,
      house: houseInput,
      car: carInput,
    };

    navigate("/dashboard"); //need to add path in App.jsx as well I'm not sure about data is saving/changing/updating
  };

  return (
    <>
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
      </div>
    </>
  );
}

export default SavingsGoals;
