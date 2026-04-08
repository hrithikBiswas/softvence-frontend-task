import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SocialIcon = ({ item }) => {
    return (
        <Link
            href={item.href}
            target="_blank"
            className="w-10 h-10 rounded-full flex items-center justify-center"
        >
            <Image
                src={item.icon}
                alt={item.name}
                className=" w-[24px] sm:w-[28px] h-[24px] sm:h-[28px]"
                width={28}
                height={28}
            />
        </Link>
    );
};

export default SocialIcon;
