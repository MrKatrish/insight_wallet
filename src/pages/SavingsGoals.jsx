import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInput from '../components/UserInput';
import FormTitle from './FormTitle';
import FormButton from '../components/FormButton';
import AddIncome from '../components/AddIncome';

function SavingsGoals({ updateUserData }) {
    const navigate = useNavigate();

    const [holidayInput, setHolidayInput] = useState(0);
    const [houseInput, setHouseInput] = useState(0);
    const [carInput, setOtherInput] = useState(0);
    const [additionalSavings, setAdditionalSavings] = useState([]);

    const handleMainInputChange = (name, e) => {
        const { value } = e.target;
        let valueNumber = parseFloat(value);
    
        if (isNaN(valueNumber)) {
          valueNumber = 0;
        }
    
        switch (name) {
          case 'Holiday':
            setHolidayInput(valueNumber);
            break;
          case 'House':
            setHouseInput(valueNumber);
            break;
          case 'Other':
            setOtherInput(valueNumber);
            break;
          default:
            break;
        }
     };

     const handleAddSavings = () => {
       
        setAdditionalSavings([
          ...additionalSavings,  { title: '', amount: 0 }
        ])
    };
        

      const handleAdditionalSavingGoals = (index, e) => {
        const { value } = e.target;
        let valueNumber = parseFloat(value);
    
        if(isNaN(valueNumber)) {
          valueNumber = 0;
        }
        
        setAdditionalSavings(
          (previousAdditionalSavings) => previousAdditionalSavings.map((obj, i) => i === index ? {...obj, amount: valueNumber} : obj) 
        )
      };

      const handleSubmit = () => {
        const savingsData = {
          holiday: holidayInput,
          house: houseInput,
          car: carInput,
        };
    
        updateUserData({ savings: savingsData });
        navigate('/dashboard');
      };
    
      return (
        <>
        <div>
          <FormTitle title='Your Saving Goals:' />
          <UserInput incomeTitle='Holiday:' handleChange={handleMainInputChange}/>
          <UserInput incomeTitle='House:' handleChange={handleMainInputChange}/>
          <UserInput incomeTitle='Car:' handleChange={handleMainInputChange}/>
    
          {additionalSavings.map((item, index) => (
            <div key={index} className="flex p-2 justify-start">
              <AddIncome index={index} onChange={handleAdditionalSavingGoals}/>
            </div>
          ))}
    
          <div className='flex flex-row justify-center'>
            <FormButton onClick={handleAddSavings} title='Add New Saving Goal' />
            <FormButton onClick={handleSubmit} title='Next' />
          </div>
    
        </div>

        </>
      );
    }

export default SavingsGoals;
