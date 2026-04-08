import Image from 'next/image';

const Polygon = ({ rotated = '0', className = '' }) => {
    return (
        <Image
            src="icon/Polygon.svg"
            alt="Polygon"
            width={37}
            height={32}
            className={`max-w-[18px] lg:max-w-[37px] max-h-[14px] lg:max-h-[32px] ${rotated} ${className}`}
        />
    );
};

export default Polygon;
