'use client';
import { motion } from 'motion/react';
import React from 'react';
import Heading from '../shared/Heading';
import Link from 'next/link';
import { fadeInDown, smoothTransition, viewportSettings, getStaggerDelay } from '@/lib/animations';

const Footer = () => {
    return (
        <div className="px-4.25 sm:px-6.25 mt-16 sm:mt-20 md:mt-28">
            <div className="max-w-353.25 mx-auto">
                <hr className="border-2 border-gray-200 mb-10 sm:mb-16 md:mb-22" />
                <div className="grid  grid-cols-1 sm:grid-cols-5 lg:grid-cols-7 gap-8 md:gap-14 justify-between">
                    <motion.div
                        className="col-span-1 sm:col-span-3"
                        variants={fadeInDown}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                    >
                        <Heading
                            text={'About'}
                            color="text-gray-800"
                            size="text-[20px]"
                            margin={'mb-5'}
                        />
                        <p className="text-base">
                            At MuscleForge, we believe in the power of
                            dedication and hard work. Our mission is to provide
                            you with the tools, resources, and community you
                            need to build the body of your dreams
                        </p>
                        <hr className="w-56 border-2 border-gray-300 mt-5 mb-2" />
                        <div className="flex">
                            <h4 className="font-medium text-lg">
                                Social Media:
                            </h4>
                            <ul className="flex gap-4 ml-4">
                                <li>
                                    <motion.div whileHover={{ x: 2 }}>
                                        <Link
                                            className="font-bold text-lg transition-opacity"
                                            href="https://www.facebook.com/softvenceagency"
                                        >
                                            Fb
                                        </Link>
                                    </motion.div>
                                </li>
                                <li>
                                    <motion.div whileHover={{ x: 2 }}>
                                        <Link
                                            className="font-bold text-lg"
                                            href="https://www.instagram.com/softvence/?hl=en"
                                        >
                                            In
                                        </Link>
                                    </motion.div>
                                </li>
                                <li>
                                    <motion.div whileHover={{ x: 2 }}>
                                        <Link
                                            className="font-bold text-lg"
                                            href="#"
                                        >
                                            Tw
                                        </Link>
                                    </motion.div>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div
                        className="col-span-1"
                        variants={fadeInDown}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                        transition={{ ...smoothTransition, delay: getStaggerDelay(1, 0.1) }}
                    >
                        <Heading
                            text={'Quick Links'}
                            color="text-gray-800"
                            size="text-[20px]"
                            margin={'mb-5'}
                        />
                        <ul className="flex flex-col text-base gap-3">
                            {[0, 1, 2, 3].map((i) => (
                                <motion.li
                                    key={i}
                                    whileHover={{ x: 3 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link href={'/'}>
                                        {['Home', 'Our gym location', 'Contact Us', 'Privacy policy'][i]}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ...smoothTransition, delay: getStaggerDelay(2, 0.1) }}
                        className="col-span-1"
                    >
                        <Heading
                            text={'Our Services'}
                            color="text-gray-800"
                            size="text-[20px]"
                            margin={'mb-5'}
                        />
                        <ul className="flex flex-col text-base gap-3">
                            <li>Indoor gym</li>
                            <li>Outdoor gym</li>
                            <li>On ground gym</li>
                            <li>Yoga class</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="col-span-1 sm:col-span-2"
                        initial={{ opacity: 0, y: -25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ...smoothTransition, delay: getStaggerDelay(3, 0.1) }}
                    >
                        <Heading
                            text={'Contact Info'}
                            color="text-gray-800"
                            size="text-[20px]"
                            margin={'mb-5'}
                        />
                        <ul className="flex flex-col text-base gap-3">
                            <li>
                                <span className="font-medium">Mail: </span>
                                <motion.span whileHover={{ opacity: 0.7 }}>
                                    <Link href="mailto:info@example.com">
                                        info@example.com
                                    </Link>
                                </motion.span>
                            </li>
                            <li>
                                <span className="font-medium">Call: </span>
                                <motion.span whileHover={{ opacity: 0.7 }}>
                                    <Link href="callto:+91 9876543210">
                                        +91 9876543210
                                    </Link>
                                </motion.span>
                            </li>
                            <li>
                                <span className="font-medium">Location: </span>
                                New York, 235 Lane, 10001
                            </li>
                            <li>
                                <span className="font-medium">Time: </span>
                                Workout Hours: 5AM - 8PM
                            </li>
                        </ul>
                    </motion.div>
                </div>
                <hr className="max-w-60 sm:max-w-100 mx-auto border-2 border-gray-200 mt-8 sm:mt-10 mb-4 sm:mb-10" />
                <div className="flex justify-center pb-10 sm:pb-22">
                    <motion.p
                        className="text-neutral-600 text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        websitename.com©{new Date().getFullYear()} all right
                        reserve
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
