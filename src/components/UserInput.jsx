import React from "react";

export default function UserInput({ labelTitle, labelAmount, handleChange, handleDelete, id, handleLabelTitleChange }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row p-2 justify-center items-center">
        <input
          type="text"
          className="text-lg font-medium leading-10 px-4 sm:px-10 py-2 my-2 sm:mx-2 border-0 ring-1 ring-inset ring-gray-300 w-full sm:w-48 bg-white rounded-3xl text-center"
          placeholder="Title"
          defaultValue={labelTitle || ''}
          onChange={(e) => {
            handleLabelTitleChange(id, e)}}
        />
        <div className="relative flex items-center mt-2 sm:mt-0">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-md">£</span>
          </div>
          <input
            type="number"
            className="rounded-3xl border-0 py-4 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
            placeholder="0.00"
            value={labelAmount != null ? labelAmount.toString() : ''}
            onChange={(e) => handleChange(id, e)}
          />
        </div>
        <button
          onClick={() => handleDelete(id)}
          className="text-lg font-medium border-0 px-4 sm:px-5 py-3 mx-2 sm:mx-5 ring-1 ring-inset ring-gray-300 rounded-3xl bg-white text-red-400 mt-2 sm:mt-0"
        >
          X
        </button>
      </div>
    </>
  );
}
