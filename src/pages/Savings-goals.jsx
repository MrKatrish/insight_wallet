import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInput from '../components/UserInput';
import FormTitle from './FormTitle';
import FormButton from '../components/FormButton';

function SavingsGoals({ updateUserData }) {
    const navigate = useNavigate();
    const [SavingsGoals, setSavingsGoals] = useState({
        Holiday: '',
        Car: '',
        Laptop: '',
    });

    const [totalAmount, setTotalAmount] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSavingsGoals({ ...SavingsGoals, [name]: value });

        setTotalAmount((prevTotal) => prevTotal + (parseFloat(value) || 0));
        
    };

    const handleSubmit = () => {
        updateUserData({ SavingsGoals });
        navigate('/dashboard');
    };

    return (
        <div>
            <FormTitle title='Your Savings Goals:' />
            <p className="italics">Simply enter the item or goal name, set the target amount, and let Insight Wallet guide you towards realizing your aspirations..</p>
            <UserInput incomeTitle='Holiday' value={SavingsGoals.Holiday} handleChange={handleChange} />
            <UserInput incomeTitle='Car' value={SavingsGoals.Car} handleChange={handleChange} />
            <UserInput incomeTitle='Laptop' value={SavingsGoals.Laptop} handleChange={handleChange} />

            <p>Total Savings: ${totalAmount.toFixed(2)}</p>

            <FormButton onClick={handleSubmit} title='Next' />
        </div>
    );
}

export default SavingsGoals;
