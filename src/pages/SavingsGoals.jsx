import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserInput from '../components/UserInput';

function SavingsGoals({ updateUserData }) {
    const navigate = useNavigate();
    const [SavingsGoals, setSavingsGoals] = useState({
        Holiday: "",
        Car: "",
        Other: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSavingsGoals({ ...SavingsGoals, [name]: value });
    };

    const handleSubmit = () => {
        updateUserData({ SavingsGoals });
        navigate("/dashboard");
    };

    return (
        <div>
            <FormTitle title='Your Savings Goals:' />
            <p className="italics">Simply enter the item or goal name, set the target amount, and let Insight Wallet guide you towards realizing your aspirations..</p>
            <UserInput incomeTitle='Holiday' value={saving.item1} handleChange={handleChange} />
            <UserInput incomeTitle='Car' value={saving.item2} handleChange={handleChange} />
            <UserInput incomeTitle='Laptop' value={saving.item3} handleChange={handleChange} />
            <FormButton onclick={handleSubmit} title='Next' />
        </div>
    );
}

export default SavingsGoals;
