import Image from 'next/image';
import React from 'react';

const Logo = () => {
    return (
        <div className="bg-primary-500 w-31.5 h-31.5 rounded-full flex items-center justify-center">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </div>
    );
};

export default Logo;
