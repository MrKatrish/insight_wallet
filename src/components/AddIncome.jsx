import React from "react";

export default function AddIncome({index}) {
    return (
        <>
        <div className="flex p-2 justify-start">
            <input type="text" name={`additionalIncome[${index}].title`} id={`title${index}`} className="rounded-3xl border-0 py-4 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-300 sm:text-md sm:leading-6" placeholder="Income source" onChange={(e) => handleAdditionalIncomeChange(index, e)}></input>
            <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-md">£</span>
            </div>
            <input type="number" name={`additionalIncome[${index}].amount`} className="rounded-3xl border-0 py-4 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-300 sm:text-md sm:leading-6" placeholder="0.00" onChange={(e) => handleAdditionalIncomeChange(index, e)} />
            </div>
        </div>
        </>
    );
}