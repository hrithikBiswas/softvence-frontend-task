'use client';
import React, { useState } from 'react';
import { MenuIcon } from '../svg/MenuIcon';
import Search from './Search';
import CloseIcon from '../svg/CloseIcon';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import useAuth from '@/hook/useAuth';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const handleAction = async () => {
        if (user) {
            await logout();
            closeMenu();
        }
        closeMenu();
        return router.push('/registration');
    };

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/location', label: 'Our gym location' },
    ];
    return (
        <div className="md:hidden">
            <motion.button
                onClick={toggleMenu}
                className="absolute right-[28px] top-[17px] flex items-center justify-center bg-black z-50 border-2 border-gray-500 rounded-2xl"
                aria-label="Toggle menu"
                whileTap={{ scale: 0.95 }}
            >
                <MenuIcon width={40} height={40} />
            </motion.button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={closeMenu}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-white z-50 rounded-l-xl"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 30,
                        }}
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex justify-between items-center px-4 sm:px-6 border-b border-gray-700 py-4 sm:py-6">
                                <div className="w-3/4">
                                    <Search />
                                </div>
                                <motion.button
                                    onClick={closeMenu}
                                    className="flex items-center justify-center ml-2"
                                    aria-label="Close menu"
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <CloseIcon width={32} height={32} />
                                </motion.button>
                            </div>

                            <nav className="flex-1 overflow-y-auto">
                                <ul className="w-full flex flex-col py-4">
                                    {navItems.map((item, index) => (
                                        <motion.li
                                            key={item.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                delay: 0.1 + index * 0.05,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={closeMenu}
                                                className="block font-medium text-lg sm:text-xl lg:text-2xl px-4 sm:px-6 py-4 text-gray-900 hover:bg-gray-200 transition duration-300"
                                            >
                                                <motion.span
                                                    whileHover={{ x: 4 }}
                                                    transition={{
                                                        duration: 0.2,
                                                    }}
                                                    className="inline-block"
                                                >
                                                    {item.label}
                                                </motion.span>
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>

                            <div className="px-4 sm:px-6 py-6 border-t border-gray-700">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <button
                                        onClick={handleAction}
                                        className="block w-full text-center cursor-pointer bg-primary-500 hover:bg-primary-600 text-gray-100 font-heading text-2xl sm:text-2xl py-4 sm:py-4 rounded-[55px]"
                                    >
                                        {user ? 'LOGOUT' : 'REGISTER'}
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileMenu;
