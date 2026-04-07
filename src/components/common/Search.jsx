import Image from 'next/image';
import React from 'react';

const Search = () => {
    return (
        <div className="flex items-center justify-between px-10 bg-[#404040] rounded-[70px] font-medium text-[22px] w-[219px] h-[60px]">
            <input
                type="text"
                placeholder="Search"
                className="bg-transparent focus:outline-none text-white w-full"
            />
            <Image
                src="/icon/magnifying.svg"
                alt="Search Icon"
                width={24}
                height={24}
                className="ml-2"
            />
        </div>
    );
};

export default Search;
