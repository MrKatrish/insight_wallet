import React from "react";
import logo from '../assets/logo.png';

export default function FormTitle({ title }) {
    return (
        <div>
            <img src={logo} alt="Logo" className="logo-class" /> {/* Możesz dodać klasę CSS do dostosowania logo */}
            <h1 className="mb-10">{title}</h1>
        </div>
    );
}