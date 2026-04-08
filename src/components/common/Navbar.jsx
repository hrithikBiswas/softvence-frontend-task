import Link from 'next/link';
import React from 'react';
import Search from './Search';

const Navbar = () => {
    return (
        <div className="hidden md:flex items-center text-white w-[587px] 2xl:w-[787px] h-[55px] lg:h-[80px] 2xl:h-[90px] rounded-[130px] border-[3px] border-white">
            <ul className="w-full flex justify-between items-center px-4 ml-14">
                <li>
                    <Link href="/" className="font-medium text-xl lg:text-2xl">
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/location"
                        className="font-medium text-xl lg:text-2xl"
                    >
                        Our gym location
                    </Link>
                </li>
                <li>|</li>
                <li>
                    <Search />
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
