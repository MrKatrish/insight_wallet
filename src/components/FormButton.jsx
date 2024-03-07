import React from "react";

// FormButton component that represents a button in the form
// Props:
// - onClick: Function to be called when the button is clicked
// - title: Text content of the button
export default function FormButton({onClick, title}) {
    return (
        // Button with styling, rounded corners, and custom background color
        <button className="button mr-5 my-5 rounded-3xl px-10 py-3 text-white bg-customPurple" onClick={onClick}>
            {/* Button text, dynamically set by the 'title' prop */}
            {title}
        </button>
    );
}
