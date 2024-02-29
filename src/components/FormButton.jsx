import React from "react";

export default function FormButton({onClick, title}) {
    return (
        <button className="button" onClick={onClick}>{title}</button>
    );
}