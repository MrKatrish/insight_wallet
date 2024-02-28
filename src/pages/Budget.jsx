import React, { useState } from 'react';

function Budget({ navigate, userData }) {
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
            <label>Rent: <span> £</span>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="rent"
            value={budget.rent}
            onChange={handleChange}
            placeholder="Rent"
          />
          </label>
        </div>
        <div className="mb-4">
            <label>Bills: <span> £</span>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="bills"
            value={budget.bills}
            onChange={handleChange}
            placeholder="Bills"
          />
          </label>
        </div>
        <div className="mb-4">
            <label>Groceries: <span>£</span>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="groceries"
            value={budget.groceries}
            onChange={handleChange}
            placeholder="Groceries"
          />
          </label>
        </div>
        <div className="mb-4">
            <label>Savings: <span>£</span>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="savings"
            value={budget.savings}
            onChange={handleChange}
            placeholder="Savings"
          />
          </label>
        </div>
        <div className="mb-4">
            <label>Investments: <span>£</span>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="investments"
            value={budget.investments}
            onChange={handleChange}
            placeholder="Investments"
          />
          </label>
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