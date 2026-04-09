'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';
import StarIcon from '../svg/StarIcon';
import { getStaggerDelay, smoothTransition, viewportSettings } from '@/lib/animations';

const ClientCard = ({ client, index }) => {
    return (
        <motion.div
            className="rounded-[25px] bg-black text-gray-200 p-6 sm:p-10"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ ...smoothTransition, delay: getStaggerDelay(index, 0.1) }}
            whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
            layout
        >
            <h1 className="font-medium text-2xl mb-4">{client.title}</h1>
            <p className="text-lg text-justify mb-10">{client.description}</p>
            <div className="flex justify-between items-center">
                <div className="w-full flex items-center gap-4">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    >
                        <Image
                            src={client.image}
                            alt={client.image}
                            className="rounded-full w-[70px] h-[70px]"
                            width={70}
                            height={70}
                        />
                    </motion.div>
                    <div className="flex-1 sm:flex sm:items-end sm:justify-between">
                        <div className="flex flex-col justify-center">
                            <h3 className="font-medium text-2xl">
                                {client.name}
                            </h3>
                            <span className="text-lg font-medium text-neutral-500">
                                {client.designation}
                            </span>
                        </div>

                        <div className="flex gap-1 items-center">
                            {Array.from({ length: 5 }).map((_, i) => {
                                if (i < client.review) {
                                    return (
                                        <StarIcon
                                            key={i}
                                            color="text-yellow-600"
                                        />
                                    );
                                }
                                return <StarIcon key={i} />;
                            })}
                            ({client.review})
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ClientCard;
