'use client';
import React from 'react';
import Logo from '@/components/common/Logo';
import Navbar from '@/components/common/Navbar';
import Button from '../shared/Button';
import MobileMenu from '../common/MobileMenu';
import { useRouter } from 'next/navigation';
import useAuth from '@/hook/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    const router = useRouter();

    const handleAction = async () => {
        if (user) {
            await logout();
        }

        return router.push('/registration');
    };

    console.log(user);

    return (
        <div className="relative w-full z-20 flex items-start justify-between pl-4.25 sm:pl-6.25 md:pr-6.25 pt-3.5">
            <div className="flex items-end gap-10 lg:gap-12 2xl:gap-10">
                <Logo />
                <Navbar />
            </div>
            <Button
                text={user ? 'LOGOUT' : 'REGISTER'}
                className="hidden md:inline font-heading text-[24px] lg:text-[35px] rounded-[55px] w-[215px] lg:w-[300px] 2xl:w-[320px] h-[65px] lg:h-[86px] 2xl:h-[95px]"
                onClick={handleAction}
            />
            <MobileMenu />
        </div>
    );
};

export default Header;
