import React from "react";

export default function SignUpInput({id, type, placeholder, value, onChange, isEmpty}) {
    return (
      <>
      <input
        className={`rounded-3xl border-0 w-full my-2 py-3 pl-7 pr-20 ring-1 ring-inset ${isEmpty ? 'ring-red-500' : 'ring-gray-300'} placehoder:text-gray-400`}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
        {isEmpty && <p className="text-red-500 text-xs italic">This input is mandatory.</p>}
      </>
    );
}