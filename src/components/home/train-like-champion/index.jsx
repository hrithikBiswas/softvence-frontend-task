'use client';
import { motion } from 'motion/react';
import TextBox from '@/components/common/TextBox';
import Button from '@/components/shared/Button';
import Heading from '@/components/shared/Heading';
import Title from '@/components/shared/Title';
import PlayIcon from '@/components/svg/PlayIcon';
import Image from 'next/image';
import React from 'react';
import {
    fadeInLeft,
    fadeInRight,
    smoothTransition,
    viewportSettings,
} from '@/lib/animations';
import PolygonMolecules from '@/components/polygon/PolygonMoleCules';

const TrainLikeChampion = () => {
    return (
        <div className="relative px-4.25 sm:px-6.25 mt-16 sm:mt-20 md:mt-28">
            <PolygonMolecules className="-top-[60px] sm:-top-[100px] left-10 rotate-90" />
            <PolygonMolecules className="-top-[55px] sm:-top-[80px] right-[30px] sm:right-[100px]" />
            <Title
                title={'Train Like a Champion'}
                subtitle={'Unleash Your Power with Expert Boxing Training'}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-12 md:gap-18 bg-black rounded-[45px] p-6 sm:p-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={viewportSettings}
                    transition={{ ...smoothTransition, delay: 0.1 }}
                >
                    <Image
                        src={'/body.png'}
                        alt="body"
                        width={522}
                        height={591}
                        className="h-full object-cover rounded-[22px]"
                    />
                </motion.div>
                <motion.div
                    className="flex flex-col justify-between"
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                >
                    <Heading
                        text={'Training Focus Areas:'}
                        margin="mb-5 md:mb-9"
                    />
                    <TextBox
                        title={'Strength & Conditioning'}
                        description={
                            'Develop knockout power with a mix of strength training and explosive movements.'
                        }
                        margin="mb-6 md:mb-10"
                    />
                    <TextBox
                        title={'Speed & Agility'}
                        description={
                            'Sharpen your reflexes and footwork with dynamic drills that improve speed and coordination.'
                        }
                        margin="mb-6 md:mb-10"
                    />
                    <TextBox
                        title={'Endurance Training'}
                        description={
                            'Boost your stamina with high-intensity circuits that keep you fighting strong till the final round.'
                        }
                    />
                </motion.div>
                <motion.div
                    className="flex flex-col justify-between"
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                >
                    <Heading
                        text={'Why Train With Us:'}
                        margin="mb-5 md:mb-9"
                    />
                    <TextBox
                        title={'Expert Coaches'}
                        description={
                            'Our experienced boxing trainers have worked with amateur and professional athletes, ensuring you get the best training tailored to your goals.'
                        }
                        margin="mb-6 md:mb-10"
                    />
                    <TextBox
                        title={'Flexible Programs'}
                        description={
                            'Whether you are a beginner or seasoned boxer, we offer flexible programs that fit your schedule and needs.'
                        }
                        margin="mb-6 md:mb-10"
                    />
                    <div className="flex gap-4 xs:gap-6 sm:gap-8 items-center">
                        <Button
                            text={'Punch Now'}
                            className={
                                'rounded-[20px] bg-primary-600 px-8 xs:px-14 py-4 xs:py-5 font-bold text-2xl hover:bg-primary-700'
                            }
                        />
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 25,
                            }}
                        >
                            <Button
                                text={<PlayIcon />}
                                className={
                                    'group/item bg-transparent border-2 border-dashed rounded-full border-primary-700 hover:border-primary-700/70'
                                }
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TrainLikeChampion;
