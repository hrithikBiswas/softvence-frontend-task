import Image from 'next/image';
import React from 'react';

const SpecialtyCard = ({ item }) => {
    return (
        <div className="w-[300px] flex gap-6 items-center rounded-[30px] last:rounded-b-[65px] border-[#FFFFFF26] border-2 p-6">
            <Image
                src={item.image}
                alt={item.title}
                width={62}
                height={62}
                className="rounded-[15px] p-2 border-[#FFFFFF26] border-2"
            />
            <h3 className="text-white font-bold text-lg">{item.title}</h3>
        </div>
    );
};

export default SpecialtyCard;
