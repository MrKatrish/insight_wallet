import React from 'react';
import FormButton from './FormButton';

const AddNewButton = ({ onClick, title }) => {
  return (
    <FormButton
      onClick={onClick}
      title={`Add New ${title}`}
      className="w-14 h-14 rounded-full bg-customPurple text-white flex items-center justify-center font-bold text-xl shadow-md"
    >
      +
    </FormButton>
  );
};

export default AddNewButton;
