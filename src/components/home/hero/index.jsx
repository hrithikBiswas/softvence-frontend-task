'use client';
import { motion } from 'motion/react';
import SocialIcon from '@/components/common/SocialIcon';
import SpecialtyCard from '@/components/common/SpecialtyCard';
import {
    BannerleftPolygon,
    BannerrightPolygon,
    SpecialtyPolygon,
} from '@/components/polygon';
import Button from '@/components/shared/Button';
import { socialLinksData, specialtyCardData } from '@/constant/data';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="w-full relative -top-[72px] lg:-top-[97px] 2xl:-top-[110px] text-white pl-4.25 sm:pl-6.25 md:pr-6.25 z-10">
            <div className="relative overflow-hidden">
                <Image
                    src="/Subtract.svg"
                    alt="Hero"
                    className="max-w-[980px] lg:max-w-[1397px] 2xl:max-w-[1478px] 3xl:max-w-[1516px] max-h-[970px]"
                    width={1516}
                    height={970}
                />
                <div className="absolute top-[120px] lg:top-[170px] 2xl:top-[200px] left-[40px] sm:left-[60px] lg:left-[87px] w-full flex justify-between">
                    <div>
                        <div className="flex items-center mb-2">
                            <h3 className="font-heading text-xl lg:text-2xl">
                                Follow On:
                            </h3>
                            <div className="flex">
                                {socialLinksData.map((item, i) => (
                                    <div key={i} className="ml-2 sm:ml-4">
                                        <SocialIcon item={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <BannerleftPolygon />
                    </div>
                    <div className="relative">
                        <div className="absolute right-38 -top-10 lg:-top-14 2xl:-top-20">
                            <BannerrightPolygon />
                        </div>
                        <motion.div
                            className=""
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Image
                                src="/banner-2.png"
                                alt="Banner"
                                width={978}
                                height={1054}
                                className="max-w-[573px] lg:max-w-[978px] max-h-[1054px] -mt-[40px] lg:-mt-[70px] 2xl:-mt-[90px] mr-[95px]"
                            />
                        </motion.div>
                        <div className="absolute -bottom-36 left-0 md:left-14">
                            <motion.div
                                className=""
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <Image
                                    src="/banner-text.png"
                                    alt="Power Your Potential"
                                    width={900}
                                    height={280}
                                    className="max-w-[330px] md:max-w-[500px] lg:max-w-[900px] max-h-[280px]"
                                />
                            </motion.div>
                            <div className="hidden sm:flex gap-8 mt-6 mb-6 2xl:mb-0">
                                <motion.div
                                    className=""
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 }}
                                >
                                    <Button
                                        text={'SHOP NOW'}
                                        className={
                                            'bg-transparent border-2 border-white font-medium text-[18px] md:text-[24px] lg:text-[32px] px-10'
                                        }
                                    />
                                </motion.div>
                                <motion.div
                                    className=""
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.4 }}
                                >
                                    <Button
                                        text={
                                            <Image
                                                src="/icon/maps.svg"
                                                alt="map"
                                                width={36}
                                                height={36}
                                                className="w-[24px] md:w-[28px] lg:w-[36px] h-[24px] md:h-[28px] lg:h-[36px]"
                                            />
                                        }
                                        className={
                                            'bg-transparent border-2 border-white'
                                        }
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[url('/vector3.png')] bg-cover bg-no-repeat absolute bottom-0 pt-7 px-4 pb-4">
                <SpecialtyPolygon />
                <motion.h1
                    className="uppercase font-heading font-medium text-[22px] lg:text-[35px] py-2 lg:py-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                >
                    our specialty
                </motion.h1>
                <div className="flex flex-col gap-4">
                    {specialtyCardData.map((item, i) => (
                        <SpecialtyCard key={i} item={item} index={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
