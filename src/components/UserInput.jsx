import React from "react";

// UserInput component represents an input section for user data
// Props:
// - labelTitle: the title input value
// - labelAmount: the amount input value
// - handleChange: function to handle changes in the amount input
// - handleDelete: function to handle the deletion of the input section
// - id: unique identifier for the input section
// - handleLabelTitleChange: function to handle changes in the title input
const UserInput = ({ labelTitle, labelAmount, handleChange, handleDelete, id, handleLabelTitleChange }) => {
    return (
        <>
            <div className="flex p-2 justify-center">
                {/* Title input */}
                <input
                    type="text"
                    className="text-lg font-medium leading-10 px-8 py-2 mx-5 border-0 ring-1 ring-inset ring-gray-300 w-40 bg-white rounded-3xl text-center"
                    placeholder="Title"
                    value={labelTitle}
                    onChange={(e) => handleLabelTitleChange(id, e)}
                />
                {/* Amount input */}
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-md">£</span>
                    </div>
                    <input
                        type="number"
                        className="rounded-3xl border-0 py-4 pl-7 pr-20 ring-1 ring-inset ring-gray-300 w-40 placeholder:text-gray-400"
                        placeholder="0.00"
                        value={labelAmount === 0 ? "" : labelAmount}
                        onChange={(e) => handleChange(id, e)}
                    />
                </div>
                {/* Delete button */}
                <button
                    onClick={() => handleDelete(id)}
                    className="text-sm font-medium border-0 w-10 h-10 px-2 mx-5 mt-2 ring-1 ring-inset ring-gray-300 rounded-3xl bg-gray-100 text-gray-400"
                >
                    X
                </button>
            </div>
        </>
    );
}

export default UserInput;
