import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Budget({ userData }) {
  const navigate = useNavigate();
  const [budget, setBudget] = useState({ rent: '', bills: '', groceries: '', savings: '', investments: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBudget({ ...budget, [name]: value });
  };

  const handleSubmit = () => {
    // logic for saving changes
    navigate('dashboard'); 
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Expenditure Budget:</h2>
      <form>
        <div className="mb-4">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="rent"
            value={budget.rent}
            onChange={handleChange}
            placeholder="Rent"
          />
        </div>
        <div className="mb-4">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="bills"
            value={budget.bills}
            onChange={handleChange}
            placeholder="Bills"
          />
        </div>
        <div className="mb-4">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="groceries"
            value={budget.groceries}
            onChange={handleChange}
            placeholder="Groceries"
          />
        </div>
        <div className="mb-4">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="savings"
            value={budget.savings}
            onChange={handleChange}
            placeholder="Savings"
          />
        </div>
        <div className="mb-4">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="investments"
            value={budget.investments}
            onChange={handleChange}
            placeholder="Investments"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSubmit}
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default Budget;
