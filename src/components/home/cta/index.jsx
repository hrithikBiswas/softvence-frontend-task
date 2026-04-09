'use client';
import { motion } from 'motion/react';
import Button from '@/components/shared/Button';
import React from 'react';
import { smoothTransition, fadeInDown, viewportSettings } from '@/lib/animations';

const Cta = () => {
    return (
        <div className=" px-4.25 sm:px-6.25 mt-16 sm:mt-20 md:mt-28">
            <div className="max-w-353.25 mx-auto bg-black rounded-[45px] text-gray-200 py-16 sm:py-10 md:py-14 lg:py-22 px-4 sm:px-6">
                <div className="max-w-240.5 mx-auto flex flex-col items-center justify-center">
                    <motion.h2
                        className="text-[20px] sm:text-[24px] lg:text-[28px] font-medium mb-0 lg:mb-2"
                        variants={fadeInDown}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                        transition={{ ...smoothTransition, delay: 0.15 }}
                    >
                        Join our community
                    </motion.h2>
                    <motion.h1
                        className="text-center leading-8 font-heading text-[24px] sm:text-[36px] md:text-[40px] lg:text-[48px] mb-1 md:mb-2 lg:mb-3"
                        variants={fadeInDown}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                        transition={{ ...smoothTransition, delay: 0.05 }}
                    >
                        Subscribe to our newslatter
                    </motion.h1>
                    <motion.p
                        variants={fadeInDown}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                        transition={{ ...smoothTransition, delay: 0.2 }}
                        className="text-[#FFFFFFBF] text-center  mb-4 md:mb-6"
                    >
                        Join our community of fitness enthusiasts and athletes!
                        By subscribing to our newsletter, you will receive expert
                        training tips, nutrition guides, exclusive discounts,
                        and the latest news on upcoming events and products.
                    </motion.p>
                    <motion.div
                        className="overflow-hidden flex justify-between border-2 rounded-full p-1 md:p-2 w-full max-w-90 sm:max-w-130 md:max-w-200"
                        variants={fadeInDown}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                        transition={{ ...smoothTransition, delay: 0.3 }}
                    >
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="text-[14px] sm:text-[18px] md:text-[22px] font-medium md:font-bold outline-none w-full pl-6 sm:pl-10 pr-3 sm:pr-6 bg-transparent transition-colors focus:placeholder:text-white/50"
                        />
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        >
                            <Button
                                text={'SUBSCRIBE'}
                                className={
                                    'bg-white text-black! text-[16px] sm:text-lg font-medium  rounded-full px-4 sm:px-6 md:px-8 py-2! sm:py-3! md:py-4'
                                }
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Cta;
