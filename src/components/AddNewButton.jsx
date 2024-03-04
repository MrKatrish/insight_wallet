import React from 'react';

export default function AddNewButton({onClick, title}) {

  return (
    <button
      className="w-14 h-14 rounded-full bg-customPurple text-white items-center justify-center shadow-md"
      onClick={onClick}>{title}
      <span className="ml-1 font-bold justify-center">+</span>
    </button>

  );
};

