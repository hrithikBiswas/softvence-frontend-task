'use client';

import React from 'react';
import { motion } from 'motion/react';

const Button = ({ text, onClick = () => {}, className, type = 'button' }) => {
    return (
        <motion.button
            type={type}
            className={`bg-primary-500 cursor-pointer text-white rounded-[18px] px-4 py-4 text-xl ${className}`}
            onClick={onClick}
            whileHover={{ scale: 1.02, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } }}
            whileTap={{ scale: 0.98 }}
        >
            {text}
        </motion.button>
    );
};

export default Button;
