import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link
            href="/"
            className="bg-primary-500 w-20 lg:w-28 2xl:w-31.5 h-20 lg:h-28 2xl:h-31.5 rounded-full flex items-center justify-center"
        >
            <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="max-w-[35px] lg:max-w-[50px] max-h-[35px] lg:max-h-[50px]"
            />
        </Link>
    );
};

export default Logo;
