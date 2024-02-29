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
        <>
            <h1 className="mb-10">Your Saving Goals:</h1>

            <p className="italics">Simply enter the item or goal name, set the target amount, and let Insight Wallet guide you towards realizing your aspirations..</p>

            <div className="flex p-2 justify-start">

            <input
                type="text"
                name="savingsItem1"
                className="rounded-3xl border-0 py-4 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-300 sm:text-md sm:leading-6"
                placeholder="Holiday"
            />

                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-md">£</span>
                </div>

                <input
                        type="text"
                        name="Holiday"
                        className="rounded-3xl border-0 py-4 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-300 sm:text-md sm:leading-6"
                        placeholder="0.00"
                        onChange={handleChange}
                />
                </div>

            </div>

            <div className="flex p-2 justify-start">

                <label
                    htmlFor="savingItem2"
                    className="text-lg font-medium leading-10 px-10 py-2 mx-5 border-0 ring-1 ring-inset ring-gray-300 w-48 savingItem2"
                >
                    Car
                </label>

                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-md">£</span>
                    </div>
                    <input
                        type="text"
                        name="price"
                        className="rounded-3xl border-0 py-4 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-300 sm:text-md sm:leading-6"
                        placeholder="0.00"
                    />
                </div>

            </div>

            <div className="flex p-2 justify-start">
                <label
                    htmlFor="savingItem3"
                    className="text-lg font-medium leading-10 px-10 py-2 mx-5 border-0 ring-1 ring-inset ring-gray-300 w-48 savingItem3"
                >
                    Other
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-md">£</span>
                    </div>
                    <input
                        type="text"
                        name="price"
                        className="rounded-3xl border-0 py-4 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-300 sm:text-md sm:leading-6"
                        placeholder="0.00"
                    />
                </div>
            </div>

            <button className="button" onClick={handleSubmit}>
                Next
            </button>
        </>
    );
}

export default SavingsGoals;
