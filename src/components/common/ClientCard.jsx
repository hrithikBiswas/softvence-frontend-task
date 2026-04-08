'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';
import StarIcon from '../svg/StarIcon';

const ClientCard = ({ client, index }) => {
    const animationDelay = Number.parseFloat(index * 0.2).toFixed(1);
    return (
        <motion.div
            className="rounded-[25px] bg-black text-gray-200 p-6 sm:p-10"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: animationDelay }}
        >
            <h1 className="font-medium text-2xl mb-4">{client.title}</h1>
            <p className="text-lg text-justify mb-10">{client.description}</p>
            <div className="flex justify-between items-center">
                <div className="w-full flex items-center gap-4">
                    <Image
                        src={client.image}
                        alt={client.image}
                        className="rounded-full w-[70px] h-[70px]"
                        width={70}
                        height={70}
                    />
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
