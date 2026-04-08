import React from 'react';
import Heading from '../shared/Heading';

const TextBox = ({ title, description, margin = '' }) => {
    return (
        <div>
            <Heading
                text={title}
                size="text-[24px]"
                color="text-neutral-400"
                margin="mb-1"
            />
            <p className={`text-[20px] text-neutral-400 leading-8 ${margin}`}>
                {description}
            </p>
        </div>
    );
};

export default TextBox;
