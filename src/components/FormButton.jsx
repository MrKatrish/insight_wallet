import React from "react";

export default function FormButton({onClick, title}) {
    return (
        <button className="button mr-1" onClick={onClick}>{title}</button>
    );
}