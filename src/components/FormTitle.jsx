import React from "react";
import logo from '../Assets/logo.png';

// FormTitle component that displays a logo and a title
// Props:
// - title: Text content for the title
export default function FormTitle({ title }) {
    return (
        <>
            {/* Logo block centered in the middle */}
            <div className="block mx-auto w-32">
                {/* Logo image sourced from the 'logo' variable */}
                <img src={logo} alt="Logo" />
            </div>
            {/* Main title with margin-bottom */}
            <h1 className="mb-10">
                {/* Title text, dynamically set by the 'title' prop */}
                {title}
            </h1>
        </>
    );
}
