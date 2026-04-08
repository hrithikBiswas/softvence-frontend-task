import TextBox from '@/components/common/TextBox';
import Button from '@/components/shared/Button';
import Heading from '@/components/shared/Heading';
import Title from '@/components/shared/Title';
import PlayIcon from '@/components/svg/PlayIcon';
import Image from 'next/image';
import React from 'react';

const TrainLikeChampion = () => {
    return (
        <div className="px-4.25 sm:px-6.25 mt-16 sm:mt-20 md:mt-28">
            <Title
                title={'Train Like a Champion'}
                subtitle={'Unleash Your Power with Expert Boxing Training'}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-12 md:gap-18 bg-black rounded-[45px] p-6 sm:p-10">
                <div>
                    <Image
                        src={'/body.png'}
                        alt="body"
                        width={522}
                        height={591}
                        className="h-full object-cover rounded-[22px]"
                    />
                </div>
                <div className="flex flex-col justify-between">
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
                </div>
                <div className="flex flex-col justify-between">
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
                    <div className="flex gap-8 items-center">
                        <Button
                            text={'Punch Now'}
                            className={
                                ' rounded-[20px] bg-primary-600 px-14 py-5 font-bold text-2xl hover:bg-primary-700 transition'
                            }
                        />
                        <Button
                            text={<PlayIcon />}
                            className={
                                'group/item bg-transparent transition border-2 border-dashed rounded-full border-primary-700 hover:border-primary-700/70'
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainLikeChampion;
