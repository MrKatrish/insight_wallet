import React from "react";

// SignUpInput component represents an input field in the sign-up form
// Props:
// - id: unique identifier for the input
// - type: type of the input (e.g., text, password)
// - placeholder: placeholder text for the input
// - value: current value of the input
// - onChange: function to handle input changes
// - isEmpty: flag indicating whether the input is empty (used for validation)
const SignUpInput = ({ id, type, placeholder, value, onChange, isEmpty }) => {
  return (
    <>
      {/* Input field with dynamic styles based on isEmpty flag */}
      <input
        className={`rounded-3xl border-0 w-full my-2 py-3 pl-7 pr-20 ring-1 ring-inset ${
          isEmpty ? 'ring-red-500' : 'ring-gray-300'
        } placeholder:text-gray-400`}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {/* Display error message if the input is mandatory and isEmpty is true */}
      {isEmpty && <p className="text-red-500 text-xs italic">This input is mandatory.</p>}
    </>
  );
};

export default SignUpInput;
