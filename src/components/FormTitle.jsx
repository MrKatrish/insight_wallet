import React from "react";
import logo from '../Assets/logo.png'; // Upewnij się, że ścieżka wskazuje na właściwy plik graficzny z rozszerzeniem

export default function FormTitle({ title }) {
    return (
        <>
            <div className="block mx-auto w-32">
                <img src={logo} alt="Logo" />
            </div>
            <h1 className="mb-10">{title}</h1>
        </>
    );
}