import React from 'react';

const CloseIcon = () => {
    return (
        <svg
            className="w-8 h-8 text-gray-700 hover:scale-105 hover:text-gray-800 transition cursor-pointer duration-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18 17.94 6M18 18 6.06 6"
            />
        </svg>
    );
};

export default CloseIcon;
