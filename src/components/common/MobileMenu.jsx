import React from 'react';
import { MenuIcon } from '../svg/MenuIcon';
import Search from './Search';
import CloseIcon from '../svg/CloseIcon';
import Link from 'next/link';

const MobileMenu = () => {
    return (
        <div className="fixed right-0 top-0 bottom-0">
            <div>
                <MenuIcon width={40} height={40} />
            </div>
            <div className="absolute top-0 right-0 bottom-0 w-2xs h-full bg-white border-l border-l-gray-200">
                <div>
                    <div className="flex justify-between items-center px-2 border-b border-b-gray-200 py-4">
                        <Search />
                        <CloseIcon />
                    </div>
                    <ul className="w-full flex flex-col">
                        <li>
                            <Link
                                href="/"
                                className="font-medium text-2xl px-4 py-4"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/location"
                                className="font-medium text-2xl px-4 py-4"
                            >
                                Our gym location
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
