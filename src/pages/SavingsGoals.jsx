import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserInput from '../components/UserInput';

function SavingsGoals({ updateUserData }) {
    const navigate = useNavigate();
    const [savingsGoals, setSavingsGoals] = useState({
        Holiday: "",
        Car: "",
        Laptop: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSavingsGoals({ ...savingsGoals, [name]: value });
    };

    const handleSubmit = () => {
        if (typeof updateUserData === 'function') {
            updateUserData({ SavingsGoals: savingsGoals });
            navigate("/dashboard");
        } else {
            console.error("updateUserData is not a function");
        }
    };
    

    return (
        <div>
            <h2>Your Savings Goals:</h2> 
            <p className="italics">Simply enter the item or goal name, set the target amount, and let Insight Wallet guide you towards realizing your aspirations.</p>
            <UserInput inputTitle='Holiday' value={savingsGoals.Holiday} handleChange={handleChange} /> 
            <UserInput inputTitle='Car' value={savingsGoals.Car} handleChange={handleChange} /> 
            <UserInput inputTitle='Laptop' value={savingsGoals.Laptop} handleChange={handleChange} /> 
            <button onClick={handleSubmit}>Next</button> 
        </div>
    );
}

export default SavingsGoals;
