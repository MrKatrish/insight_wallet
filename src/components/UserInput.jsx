import React from "react";

export default function UserInput({incomeTitle, handleChange}) {
    return (
        <>
        <div className="flex p-2 justify-start">
            <label className="text-lg font-medium leading-10 px-10 py-2 mx-5 border-0 ring-1 ring-inset ring-gray-300 w-48 bg-white rounded-3xl">{incomeTitle}</label>
            <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-md">£</span>
            </div>
            <input type="number" className="rounded-3xl border-0 py-4 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400" placeholder="0.00" onChange={(e) => handleChange(incomeTitle,e)} />
            </div>
        </div>
        </>
    );
}