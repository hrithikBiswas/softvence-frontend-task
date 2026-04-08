'use client';

import React from 'react';

const Button = ({ text, onClick = () => {}, className, type = 'button' }) => {
    return (
        <button
            type={type}
            className={`bg-primary-500 cursor-pointer text-white rounded-[18px] px-4 py-4 text-xl ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
