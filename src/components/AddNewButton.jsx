import React, { useState } from 'react';
import AddNewWidget from './AddNewWidget';

const AddNewButton = () => {
  const [showWidget, setShowWidget] = useState(false);

  const handleButtonClick = () => {
    setShowWidget(true);
  };

  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-md"
        onClick={handleButtonClick}
      >
        +
      </button>
      {showWidget && <AddNewWidget />}
    </div>
  );
};

export default AddNewButton;
