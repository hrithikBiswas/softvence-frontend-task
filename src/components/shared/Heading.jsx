import React from 'react';

const Heading = ({
    text,
    size = 'text-[28px]',
    color = 'text-white',
    margin = '',
}) => {
    return <h1 className={`font-bold ${color} ${size} ${margin}`}>{text}</h1>;
};

export default Heading;
