import React from 'react';

const Title = ({ title, subtitle }) => {
    return (
        <div className="mb-8 md:mb-12">
            <h1 className="font-bold text-4xl mb-2 md:mb-3">{title}</h1>
            <h4 className="font-medium text-2xl">{subtitle}</h4>
        </div>
    );
};

export default Title;
