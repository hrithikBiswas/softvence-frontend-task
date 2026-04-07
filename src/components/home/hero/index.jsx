import SocialIcon from '@/components/common/SocialIcon';
import SpecialtyCard from '@/components/common/SpecialtyCard';
import { SpecialtyPolygon } from '@/components/polygon';
import Button from '@/components/shared/Button';
import { socialLinksData, specialtyCardData } from '@/contant/data';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="w-full absolute top-3.5 text-white px-6.25 z-10">
            <div className="relative overflow-hidden">
                <Image
                    src="/Subtract.svg"
                    alt="Hero"
                    className="w-full h-full"
                    width={500}
                    height={300}
                />
                <div className="absolute top-[200px] left-[87px] w-full flex justify-between">
                    <div>
                        <div className="flex items-center">
                            <h3 className="font-heading text-2xl">
                                Follow On:
                            </h3>
                            <div className="flex">
                                {socialLinksData.map((item, i) => (
                                    <div key={i} className="ml-4">
                                        <SocialIcon item={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <Image
                            src="/banner-2.png"
                            alt="Banner"
                            width={978}
                            height={1054}
                            className="-mt-[90px] mr-[95px]"
                        />
                        <div className="absolute -bottom-36 left-14">
                            <Image
                                src="/banner-text.png"
                                alt="Power Your Potential"
                                width={900}
                                height={280}
                                className=""
                            />
                            <div className="flex gap-8 mt-6">
                                <Button
                                    text={'SHOP NOW'}
                                    className={
                                        'bg-transparent border-2 border-white font-medium text-[32px] px-10'
                                    }
                                />
                                <Button
                                    text={
                                        <Image
                                            src="/icon/maps.svg"
                                            alt="map"
                                            width={36}
                                            height={36}
                                        />
                                    }
                                    className={
                                        'bg-transparent border-2 border-white'
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[url('/vector3.png')] bg-cover bg-no-repeat absolute bottom-0 pt-9 px-4 pb-4">
                <SpecialtyPolygon />
                <h1 className="uppercase font-heading font-medium text-[35px] py-6">
                    our specialty
                </h1>
                <div className="flex flex-col gap-4">
                    {specialtyCardData.map((item, i) => (
                        <SpecialtyCard key={i} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
