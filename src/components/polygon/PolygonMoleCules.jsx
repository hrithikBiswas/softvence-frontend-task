import React from 'react';
import Polygon from '../shared/Polygon';
import Image from 'next/image';

const PolygonMolecules = ({ className }) => {
    return (
        <Image
            src="/PolygonMolecules.png"
            alt="PolygonMolecules"
            width="80"
            height="95"
            className={`hidden xs:inline w-[57px] sm:w-[68px] lg:w-[80px] h-[65px] sm:h-[80px] lg:h-[95px]  absolute ${className}`}
        />
    );
};

export default PolygonMolecules;
