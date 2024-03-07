import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <>
        <nav className="bg-customPurple p-4 w-full top-0">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-white font-bold text-lg cursor-pointer" onClick={handleClick}>Insight Wallet</div>
            </div>
        </nav>
        </>
    );
}