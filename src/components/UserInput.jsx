import React from "react";

export default function UserInput({incomeTitle, value, handleChange}) {
    return (
        <>
        <div className="flex p-2 justify-start">
            <label htmlFor="salary" className="text-lg font-medium leading-10 px-10 py-2 mx-5 border-0 ring-1 ring-inset ring-gray-300 w-48 incomeTitle">{incomeTitle}</label>
            <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-md">£</span>
            </div>
            <input type="text" name="salary" className="rounded-3xl border-0 py-4 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-300 sm:text-md sm:leading-6" placeholder="0.00" value={value} onChange={handleChange} />
            </div>
        </div>
        </>
    );
}