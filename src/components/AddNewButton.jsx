import React from 'react';
import FormButton from './FormButton';

// Functional component for a button to add new items
const AddNewButton = ({ onClick, title }) => {
  return (
    // Reusing the FormButton component for styling and functionality
    <FormButton
      onClick={onClick}
      title={`Add New ${title}`} // Displaying a dynamic title based on the provided 'title' prop
      className="w-14 h-14 rounded-full bg-customPurple text-white flex items-center justify-center font-bold text-xl shadow-md"
    >
      +
    </FormButton>
  );
};

export default AddNewButton;
