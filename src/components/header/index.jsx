import React from 'react';
import Logo from '@/components/common/Logo';
import Navbar from '@/components/common/Navbar';
import Button from '../shared/Button';
import MobileMenu from '../common/MobileMenu';

const Header = () => {
    return (
        <div className="absolute w-full z-20 flex items-start justify-between px-6.25 pt-3.5">
            <MobileMenu />
            <div className="flex items-end gap-10 lg:gap-12 2xl:gap-10">
                <Logo />
                <Navbar />
            </div>
            <Button
                text={'REGISTER'}
                className="hidden md:inline font-heading text-[24px] lg:text-[35px] rounded-[55px] w-[215px] lg:w-[300px] 2xl:w-[320px] h-[65px] lg:h-[86px] 2xl:h-[95px]"
            />
        </div>
    );
};

export default Header;
