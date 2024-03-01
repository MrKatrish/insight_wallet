import React from "react";

export default function FormButton({onClick, title}) {
    return (
        <button className="button mr-1 my-5 rounded-3xl px-10 py-3 text-white bg-customPurple" onClick={onClick}>{title}</button>
    );
}