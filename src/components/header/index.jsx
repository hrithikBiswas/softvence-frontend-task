import React from 'react';
import Logo from '@/components/common/Logo';
import Navbar from '@/components/common/Navbar';
import Button from '../shared/Button';

const Header = () => {
    return (
        <div className="absolute w-full z-20 flex items-start justify-between px-6.25 pt-3.5">
            <div className="flex items-end gap-10">
                <Logo />
                <Navbar />
            </div>
            <Button
                text={'REGISTER'}
                className="font-heading text-[35px] rounded-[55px] w-[320px] h-[95px]"
            />
        </div>
    );
};

export default Header;
