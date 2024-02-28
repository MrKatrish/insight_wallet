import React, { useState } from 'react';

function Budget({ navigate, userData }) {
  const [budget, setBudget] = useState({ rent: '', bills: '', groceries: '', savings: '', investments: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBudget({ ...budget, [name]: value });
  };

  const handleSubmit = () => {
    // Tutaj możesz dodać logikę zapisu danych budżetu
    navigate('dashboard'); // Zakładając, że "dashboard" jest kolejnym krokiem
  };

  return (
    <div>
      <h2>Your Expenditure Budget:</h2>
      {/* Formularz do wprowadzania danych o wydatkach */}
      <input name="rent" value={budget.rent} onChange={handleChange} placeholder="Rent" />
      <input name="bills" value={budget.bills} onChange={handleChange} placeholder="Bills" />
      <input name="groceries" value={budget.groceries} onChange={handleChange} placeholder="Groceries" />
      <input name="savings" value={budget.savings} onChange={handleChange} placeholder="Savings" />
      <input name="investments" value={budget.investments} onChange={handleChange} placeholder="Investments" />
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
}

export default Budget;
