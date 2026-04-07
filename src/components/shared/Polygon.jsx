import Image from 'next/image';

const Polygon = ({ rotated = '0' }) => {
    return (
        <Image
            src="icon/Polygon.svg"
            alt="Polygon"
            width={37}
            height={32}
            className={rotated}
        />
    );
};

export default Polygon;
