import React, { useState, useEffect } from 'react';

function SavingsGoalsDashboard() {
  const [savingsGoals, setSavingsGoals] = useState([]);

  useEffect(() => {
    // Fetch saving goals from local storage
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const userData = JSON.parse(localStorage.getItem(currentUser));
      const userSavingsGoals = userData.savingsGoals || [];
      setSavingsGoals(userSavingsGoals);
    }
  }, []);

  return (
    <div>
      <h2>Saving Goals Dashboard</h2>
      {savingsGoals.map(goal => (
        <div key={goal.id} className="card">
          <h3>{goal.title}</h3>
          <p>Amount: {goal.amount}</p>
        </div>
      ))}
    </div>
  );
}

export default SavingsGoalsDashboard;
