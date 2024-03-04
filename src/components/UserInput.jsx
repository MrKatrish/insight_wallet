import React from "react";

export default function UserInput({labelTitle, labelAmount, handleChange, handleDelete, id, handleLabelTitleChange}) {
    return (
        <>
        <div className="flex p-2 justify-center">
            <input type="text" className="text-lg font-medium leading-10 px-10 py-2 mx-5 border-0 ring-1 ring-inset ring-gray-300 w-40 bg-white rounded-3xl text-center" placeholder="Title" value={labelTitle} onChange={(e) => handleLabelTitleChange(id, e)}></input>
            <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-md">£</span>
            </div>
            <input type="number" className="rounded-3xl border-0 py-4 pl-7 pr-20 ring-1 ring-inset ring-gray-300 w-40 placeholder:text-gray-400" placeholder="0.00" value={labelAmount === 0 ? "" : labelAmount} onChange={(e) => handleChange(id,e)} />
            </div>
            <button onClick={() => handleDelete(id)} className="text-sm font-medium border-0 w-10 h-10 px-2 mx-5 mt-2 ring-1 ring-inset ring-gray-300 rounded-3xl bg-gray-100 text-gray-400">X</button>
        </div>
        </>
    );
}