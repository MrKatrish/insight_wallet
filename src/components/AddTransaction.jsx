import React from 'react';

const AddTransactionButton = ({ onClick }) => {
  return (
    <button className="add-transaction-button" onClick={onClick}>
      Add New Transaction
    </button>
  );
};

export default AddTransactionButton;