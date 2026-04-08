'use client';
import React, { useState } from 'react';
import { MenuIcon } from '../svg/MenuIcon';
import Search from './Search';
import CloseIcon from '../svg/CloseIcon';
import Link from 'next/link';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/location', label: 'Our gym location' },
    ];
    return (
        <div className="md:hidden">
            <button
                onClick={toggleMenu}
                className="absolute right-[28px] top-[17px] flex items-center justify-center z-50 border-2 border-gray-500 rounded-2xl"
                aria-label="Toggle menu"
            >
                <MenuIcon width={40} height={40} />
            </button>
            <div className="">
                <div
                    className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
                        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    onClick={closeMenu}
                />

                <div
                    className={`fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-white z-50 rounded-l-xl transform transition-transform duration-300 ease-in-out ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-center px-4 sm:px-6 border-b border-gray-700 py-4 sm:py-6">
                            <div className="w-3/4">
                                <Search />
                            </div>
                            <button
                                onClick={closeMenu}
                                className="flex items-center justify-center ml-2"
                                aria-label="Close menu"
                            >
                                <CloseIcon width={32} height={32} />
                            </button>
                        </div>

                        <nav className="flex-1 overflow-y-auto">
                            <ul className="w-full flex flex-col py-4">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            onClick={closeMenu}
                                            className="block font-medium text-lg sm:text-xl lg:text-2xl px-4 sm:px-6 py-4 text-gray-900 hover:bg-gray-200 transition-colors duration-200"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="px-4 sm:px-6 py-6 border-t border-gray-700">
                            <Link
                                href="/register"
                                onClick={closeMenu}
                                className="block w-full text-center bg-primary-500 hover:bg-primary-600 text-gray-100 transition font-heading text-2xl sm:text-2xl py-4 sm:py-4 rounded-[55px] transition-colors duration-200"
                            >
                                REGISTER
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
